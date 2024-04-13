import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

type Ranking = {
  rank: number;
  username: string;
  score: number;
};

const MOCK_RANKINGS: Ranking[] = [
  { rank: 1, username: "BlueDino1", score: 1234 },
  { rank: 2, username: "RedPepper2", score: 1233 },
  { rank: 3, username: "GreenApple3", score: 1232 },
  { rank: 4, username: "YellowBanana4", score: 1231 },
  { rank: 5, username: "PurpleGrape5", score: 1230 },
];

export default function Component() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
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
          <span className="font-semibold">56</span> detail-
          <br />
          oriented people
        </div>
      </div>
      <div className="my-2 px-5 border-b w-[calc(100%-1.5rem)] border-[#C19117]" />
      {MOCK_RANKINGS.map((ranking) => (
        <div
          key={ranking.rank}
          className="px-7 my-2 flex flex-row w-full justify-start items-center"
        >
          <div className="text-sm font-medium w-[0.75rem] text-right">
            {ranking.rank}
          </div>
          <div className="ml-3 text-sm font-normal text-start w-[calc(100%-6rem)]">
            {ranking.username}
          </div>
          <div className="text-sm font-semibold w-[5rem] text-right">
            {ranking.score}
          </div>
        </div>
      ))}
    </div>
  );
}
