import { Link } from "@remix-run/react";

export default function Component() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <div className="text-sm">Your timer has run out</div>
      <div className="mt-5 text-4xl font-semibold">
        {/* TODO add special font */}
        Are you <span className="text-[#F54F01]">detail oriented?</span>
      </div>
      <div className="flex flex-row w-full items-center justify-center gap-3">
        <div className="bg-white h-[10rem] w-[10rem] items-center justify-center relative">
          <div className="absolute top-2 left-2 text-sm font-medium">
            Bugs found
          </div>
          <div className="text-5xl font-semibold">14</div>
        </div>
        <div className="bg-white h-[10rem] w-[10rem] items-center justify-center relative">
          <div className="absolute top-2 left-2 text-sm font-medium">
            Your total score is
          </div>
          <div className="text-4xl font-semibold">1432</div>
        </div>
      </div>

      <div className="mt-7 bg-[#FFE3AD] py-3 w-full flex items-center justify-center flex-col">
        <div>Your leaderboard rank is</div>
        <div className="text-4xl">
          645{" "}
          <img
            src="icons/rankings.svg"
            className="ml-1 h-[2.5rem] inline-block"
          />
        </div>
        <div>Incredible, you're in the 95th percentile!</div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <div>BlueDino3</div>
        <button className="bg-[#F7EDCA] border border-[#AA6D12] rounded-md">
          Share...
        </button>
      </div>

      <Link to="play/landing">
        <button className="bordere border-[#AA6D12] rounded-md px-10 py-3 text-lg font-semibold">
          Try again? 🥴
        </button>
      </Link>
    </div>
  );
}
