import { Link } from "@remix-run/react";
import { PrettyButton } from "~/components/pretty-button";
import { Button } from "~/components/ui/button";

export default function Component() {
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
              Bugs found
            </div>
            <div className="text-[4rem] font-bold">14</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-2 left-2 h-[9rem] w-[9rem] rounded-lg bg-[#5E4425]" />
          <div className="bg-white h-[9rem] w-[9rem] rounded-lg flex items-center justify-center relative">
            <div className="absolute top-2 left-3 text-xs font-semibold">
              Your total score is
            </div>
            <div className="text-5xl font-bold">1432</div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#FFE3AD] py-4 w-full flex items-center justify-center flex-col">
        <div className="text-sm font-light">Your leaderboard rank is</div>
        <div className="mt-1 text-5xl font-semibold">
          645
          <img
            src="/icons/rankings.svg"
            className="ml-2 mb-2 h-[2.75rem] inline-block"
          />
        </div>
        <div className="text-sm font-light">
          Incredible, you're in the 95th percentile!
        </div>
      </div>

      <div className="mt-5 flex flex-row justify-between items-center w-full px-10">
        <div className="font-bold">BlueDino3</div>
        <PrettyButton
          buttonClassName="w-32 h-11 text-base font-semibold justify-start bg-[#F7EDCA]"
          shadowClassName="w-32 h-11 top-[0.25rem]"
        >
          Share...
        </PrettyButton>
      </div>

      <div className="mt-3 w-full px-10">
        <Link to="play/landing">
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