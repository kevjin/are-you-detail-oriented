import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { PlaySessionCookie, lastPlaySessionCookie } from "~/cookies.server";
import prisma from "~/lib/prisma";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [topPlaySessions, totalPlaySessions] = await Promise.all([
    prisma.playSession.findMany({
      take: 200,
      orderBy: {
        score: "desc",
      },
      select: {
        score: true,
        display_name: true,
      },
    }),
    prisma.playSession.count(),
  ]);

  const cookieHeader = request.headers.get("Cookie");
  const cookie: PlaySessionCookie =
    (await lastPlaySessionCookie.parse(cookieHeader)) || {};

  const myRanking = !!cookie
    ? (await prisma.playSession.count({
        where: {
          score: {
            gt: cookie.score,
          },
        },
      })) + 1
    : null;

  return {
    topPlaySessions,
    totalPlaySessions,
    myRanking,
  };
};

export default function Component() {
  const data = useLoaderData<typeof loader>();
  const [topPlaySessions, setTopPlaySessions] = useState(data.topPlaySessions);
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-start">
      <div className="mt-12 text-3xl font-semibold text-center">
        Are you{" "}
        <span className="text-[#F54F01]">
          <span className="font-gochihand font-normal">detail</span> oriented?
        </span>
      </div>

      <div className="mt-5 px-5 flex flex-row w-full justify-between items-end">
        <div className="text-base font-semibold">
          Global Rankings
          <img
            src="/icons/rankings.svg"
            className="ml-1 mb-1 h-5 inline-block"
          />
        </div>

        <div className="font-light text-xs text-right">
          <span className="font-semibold">{data.totalPlaySessions}</span>{" "}
          detail-
          <br />
          oriented people
        </div>
      </div>
      <div className="my-2 px-5 border-b w-[calc(100%-1.5rem)] border-[#C19117]" />
      {topPlaySessions.map((playSession, idx) => (
        <div
          key={idx}
          className="px-7 my-2 flex flex-row w-full justify-start items-center"
        >
          <div className="text-sm font-medium w-[0.75rem] text-right">
            {idx + 1}
          </div>
          <div className="ml-3 text-sm font-normal text-start w-[calc(100%-6rem)]">
            {playSession.display_name}
          </div>
          <div className="text-sm font-semibold w-[5rem] text-right">
            {playSession.score}
          </div>
        </div>
      ))}
      <div className="mb-10" />
    </div>
  );
}
