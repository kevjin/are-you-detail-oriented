import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { PrettyButton } from "~/components/pretty-button";
import { PlaySessionCookie, lastPlaySessionCookie } from "~/cookies.server";
import prisma from "~/lib/prisma";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie: PlaySessionCookie =
    (await lastPlaySessionCookie.parse(cookieHeader)) || null;

  if (!cookie) {
    return {
      lastSession: {
        score: 0,
        name: "Unknown",
      },
      myRanking: 0,
      percentile: 0,
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

  return { lastSession: cookie, myRanking, percentile };
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
          Incredible, you're in the {data.percentile}th percentile!
        </div>
      </div>

      <div className="mt-5 flex flex-row justify-between items-center w-full px-10">
        <div className="font-bold">{data.lastSession.name}</div>
        <PrettyButton
          buttonClassName="w-32 h-11 text-base font-semibold justify-start bg-[#F7EDCA]"
          shadowClassName="w-32 h-11 top-[0.25rem]"
        >
          Share...
        </PrettyButton>
      </div>

      <div className="mt-3 w-full px-10">
        <Link to="/play/landing">
          <PrettyButton
            shadowClassName="w-full bg-[#C1C1C1] border-[#76726A] h-12"
            buttonClassName="w-full border-[#76726A] text-base font-normal h-12"
          >
            Try again? 🥴
          </PrettyButton>
        </Link>
      </div>
    </div>
  );
}
