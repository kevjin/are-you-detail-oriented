import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { PrettyButton } from "~/components/pretty-button";
import { PlaySessionCookie, lastPlaySessionCookie } from "~/cookies.server";
import prisma from "~/lib/prisma";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!!id) {
    const playSession = await prisma.playSession.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        score: true,
        display_name: true,
      },
    });

    if (playSession) {
      const [playersAheadOfMe, totalPlayerCount] = await Promise.all([
        prisma.playSession.count({
          where: {
            score: {
              gt: playSession.score,
            },
          },
        }),
        prisma.playSession.count(),
      ]);
      const myRanking = playersAheadOfMe + 1;
      const percentile = Math.floor(
        ((totalPlayerCount - playersAheadOfMe) / totalPlayerCount) * 100
      );

      return {
        lastSession: {
          id: playSession.id,
          score: playSession.score,
          name: playSession.display_name,
        },
        myRanking,
        percentile,
        isMine: false,
      };
    }
  }

  const cookieHeader = request.headers.get("Cookie");
  const cookie: PlaySessionCookie =
    (await lastPlaySessionCookie.parse(cookieHeader)) || null;

  if (!cookie) {
    return {
      lastSession: {
        id: "unknown",
        score: 0,
        name: "Unknown",
      },
      myRanking: 0,
      percentile: 0,
      isMine: false,
    };
  }

  const [playersAheadOfMe, totalPlayerCount] = await Promise.all([
    prisma.playSession.count({
      where: {
        score: {
          gt: cookie.score,
        },
      },
    }),
    prisma.playSession.count(),
  ]);
  const myRanking = playersAheadOfMe + 1;
  const percentile = Math.floor(
    ((totalPlayerCount - playersAheadOfMe) / totalPlayerCount) * 100
  );

  return { lastSession: cookie, myRanking, percentile, isMine: true };
};

export default function Component() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="mt-10 w-full h-full flex flex-col items-center justify-start">
      <div className="text-sm font-light">Your timer has run out.</div>
      <div className="mt-1 text-xl font-semibold text-center">
        Are you{" "}
        <span className="text-[#F54F01]">
          <span className="font-gochihand font-normal">detail</span> oriented?
        </span>
      </div>
      <div className="mt-5 flex flex-row w-full items-center justify-center gap-6">
        <div className="relative">
          <div className="absolute top-2 left-2 h-[9rem] w-[9rem] rounded-lg bg-[#5E4425]" />
          <div className="bg-white h-[9rem] w-[9rem] rounded-lg flex items-center justify-center relative">
            <div className="absolute top-2 left-3 text-xs font-semibold">
              <img src="/icons/bug.svg" className="inline-block mb-1" /> Bugs
              found
            </div>
            <div className="text-[4rem] font-bold">
              {Math.floor(data.lastSession.score / 100)}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-2 left-2 h-[9rem] w-[9rem] rounded-lg bg-[#5E4425]" />
          <div className="bg-white h-[9rem] w-[9rem] rounded-lg flex items-center justify-center relative">
            <div className="absolute top-2 mt-1 left-3 text-xs font-semibold">
              Your total score is
            </div>
            <div className="text-5xl font-bold">{data.lastSession.score}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#FFE3AD] py-4 w-full flex items-center justify-center flex-col">
        <div className="text-sm font-light">Your leaderboard rank is</div>
        <div className="mt-1 text-5xl font-semibold">
          {data.myRanking}
          <img
            src="/icons/rankings.svg"
            className="ml-2 mb-2 h-[2.75rem] inline-block"
          />
        </div>
        <div className="text-sm font-light">
          Incredible, you're in the {data.percentile}
          {placeSuffix(data.percentile)} percentile!
        </div>
      </div>

      <div className="mt-5 flex flex-row justify-between items-center w-full px-10">
        <div className="font-bold text-sm">
          {data.lastSession.name}{" "}
          {/* <img src="/icons/edit.svg" className="inline-block h-4 w-4" /> */}
        </div>
        <PrettyButton
          disabled={!data.isMine}
          buttonClassName="w-36 h-11 text-base font-semibold justify-start bg-[#F7EDCA]"
          shadowClassName="w-36 h-11 top-[0.25rem]"
          onClick={() => {
            if (!navigator.canShare) {
              alert("Sorry! Your browser does not support social sharing.");
              return;
            }

            navigator.share({
              title: `I scored in the top ${data.percentile} percentile!`,
              text: `I found ${Math.floor(
                data.lastSession.score / 100
              )} in-app bugs and scored ${
                data.lastSession.score
              } points on 'Are You Detail Oriented?'. Can you do better?`,
              url: `${window.location.hostname}/home/results?id=${data.lastSession.id}`,
            });
          }}
        >
          Share...{" "}
          <img src="/icons/social-icons.png" className="ml-2 h-5 w-auto" />
        </PrettyButton>
      </div>

      <div className="mt-3 w-full px-10">
        <Link to="/play/landing">
          <PrettyButton
            shadowClassName="w-full bg-[#C1C1C1] border-[#76726A] h-12"
            buttonClassName="w-full border-[#76726A] text-base font-normal h-12"
          >
            Try again? <img src="/icons/eye.svg" className="ml-1 h-5 w-5" />
          </PrettyButton>
        </Link>
      </div>
    </div>
  );
}

function placeSuffix(n: number) {
  const lastDigit = n % 10;
  if (lastDigit === 1) return "st";
  if (lastDigit === 2) return "nd";
  if (lastDigit === 3) return "rd";
  return "th";
}
