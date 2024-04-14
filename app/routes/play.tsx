import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import posthog from "posthog-js";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { PlaySessionCookie, lastPlaySessionCookie } from "~/cookies.server";
import prisma from "~/lib/prisma";
import { useStore } from "~/lib/store";
import { generateUsername } from "~/lib/username-generator";
import { generateRandomAlphanumericString } from "~/lib/utils";

const GAME_SECONDS = 600;

export const loader = ({ request }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get("User-Agent");
  const isMobile = !!userAgent && /Mobi/.test(userAgent);

  return { device: isMobile ? "mobile" : "desktop" };
};

export const action = async (args: ActionFunctionArgs) => {
  const body = await args.request.formData();
  const scoreRaw = body.get("score");

  if (!scoreRaw) {
    return {};
  }

  const score = parseInt(scoreRaw as string);

  if (score > 10000) {
    return json({ error: "Come on, man" }, { status: 400 });
  }

  const newPlaySession = await prisma.playSession.create({
    data: {
      code: generateRandomAlphanumericString(14),
      score: Math.max(score, 0),
      display_name: generateUsername(),
    },
  });

  const playSessionCookie: PlaySessionCookie = {
    id: newPlaySession.id,
    code: newPlaySession.code,
    score: score,
    name: newPlaySession.display_name,
    createdAt: newPlaySession.created_at.toUTCString(),
  };

  return redirect("/home/results", {
    headers: {
      "Set-Cookie": await lastPlaySessionCookie.serialize(playSessionCookie),
    },
  });
};

export default function Component() {
  const data = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const navigation = useNavigation();
  const setPlayStartTs = useStore((state) => state.setPlayStartTs);
  const latestBugReason = useStore((state) => state.latestBugReason);
  const countdownTimerRef = useRef<HTMLDivElement>(null);
  const [timesUp, setTimesUp] = useState(false);
  const score = useStore((state) => state.score);

  useEffect(() => {
    if (!countdownTimerRef.current || navigation.state !== "idle") return;

    const oneMinuteInFuture = Date.now() + GAME_SECONDS * 1000;

    if (!window.location.hostname.includes("localhost")) {
      posthog.capture("games_started", {
        device: data.device,
      });
    }

    setPlayStartTs(Date.now());
    const interval = setInterval(() => {
      const timeDiff = oneMinuteInFuture - Date.now();
      const minutes = Math.max(
        Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        0
      );
      const seconds = Math.max(Math.floor((timeDiff % (1000 * 60)) / 1000), 0);
      const ms = Math.max(Math.floor((timeDiff % 1000) / 10), 0);

      countdownTimerRef.current!.innerText = `${minutes}:${
        seconds > 9 ? seconds : `0${seconds}`
      }:${ms > 9 ? ms : `0${ms}`}`;

      if (minutes === 0 && seconds === 0 && ms === 0) {
        countdownTimerRef.current!.style.color = "#FF0000";
      }

      if (timeDiff <= 0) {
        clearInterval(interval);
        setTimesUp(true);
      }
    }, 85);
    return () => clearInterval(interval);
  }, [!!countdownTimerRef.current]);

  useEffect(() => {
    if (timesUp) {
      submit(
        { score },
        {
          method: "post",
        }
      );
    }
  }, [timesUp]);

  return (
    <div className="w-screen h-screen">
      <div className="h-[4.5rem] bg-[#FFD47F] w-full px-7 py-3">
        <div className="font-semibold">
          Tap on all the
          <img src="/icons/bug.svg" className="inline-block mb-[2px]" />
          bugs you can find!
        </div>
        <div className="font-light text-sm">
          <span className="font-bold text-[#8317A9]">
            {Math.floor(score / 100)} found:
          </span>{" "}
          {latestBugReason}
        </div>
      </div>
      <div className="h-[calc(100%-4.5rem)] pb-[5rem] bg-white w-full overflow-y-auto">
        <Outlet />
      </div>
      <div className="fixed bottom-0 bg-[#FFBF43] h-[5rem] w-full px-3 py-2 flex flex-row justify-between">
        <div className="w-[6rem] h-full flex flex-col items-center justify-center">
          <div
            ref={countdownTimerRef}
            className="text-start w-full pl-[10px] text-xl font-semibold text-[#553608]"
          >
            0:59:34
          </div>
          <div className="text-sm font-medium text-[#553608]">Time Left</div>
        </div>
        <Button
          onClick={() => {
            setTimesUp(true);
          }}
          className="w-1/4 max-w-[5rem] h-full rounded-md flex flex-col items-center justify-center"
        >
          <img className="w-6 h-6" src={"/icons/done.svg"} />
          <div className="mt-1 font-medium text-sm text-[#553608]">
            I'm done
          </div>
        </Button>
        <div className="h-full w-[6rem] rounded-md flex flex-col items-center justify-center">
          <div className="text-xl font-bold">{score}</div>
          <div className="font-medium text-sm text-[#553608]">Score</div>
        </div>
      </div>
    </div>
  );
}
