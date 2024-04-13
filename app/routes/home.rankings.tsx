import { Link } from "@remix-run/react";

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
    <div className="w-full h-full flex flex-col items-start justify-center">
      <div className="mt-3 text-3xl font-semibold">
        {/* TODO add special font */}
        Are you <span className="text-[#F54F01]">detail oriented?</span>
      </div>

      <div className="flex flex-row w-full justify-between items-center">
        <div className="text-lg font-semibold">
          Global Rankings
          <img
            src="/icons/rankings.svg"
            className="ml-1 h-[1.75rem] inline-block"
          />
        </div>

        <div className="font-light text-sm">
          <b>56</b> detail-
          <br />
          oriented people
        </div>
      </div>
      <div className="my-3 border-b w-full border-[#C19117]" />
      {MOCK_RANKINGS.map((ranking) => (
        <div
          key={ranking.rank}
          className="my-3 flex flex-row w-full justify-start items-center"
        >
          <div className="text-sm font-medium w-[3rem]">{ranking.rank}</div>
          <div className="ml-3 text-base font-light w-[calc(100%-8rem)]">
            {ranking.username}
          </div>
          <div className="text-lg font-semibold w-[5rem]">{ranking.score}</div>
        </div>
      ))}

      <Link to="play/landing">
        <button className="bordere border-[#AA6D12] rounded-md px-10 py-3 text-lg font-semibold">
          Try again? 🥴
        </button>
      </Link>
    </div>
  );
}
