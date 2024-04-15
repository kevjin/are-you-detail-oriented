import { Link } from "@remix-run/react";
import {
  BugBackground,
  MagnifyingGlassBackground,
} from "~/components/background-patterns";
import { PrettyButton } from "~/components/pretty-button";

export default function Component() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <MagnifyingGlassBackground className="bottom-[7rem] left-[2rem] rotate-90 h-16 w-16" />
      <div className="mt-5 md:mt-16 text-[#F54F01] text-base md:text-lg font-bold text-center">
        How to Play
      </div>
      <div className="mt-3 font-normal text-base md:text-xl px-7 text-center max-w-[38rem]">
        <span className="font-bangers">TODO Wizard</span> is planning its big
        launch soon, and your goal is to find all the bugs in the app. The app
        was built by <span className="font-light text-sm">BudgetSoftware™</span>{" "}
        for $100 and has not been tested yet.
      </div>

      <div className="mt-12 text-sm md:text-lg flex flex-row w-full items-center">
        <div className="relative w-3/4">
          <div className="absolute top-1 left-1 bg-[#9A7E35] w-full h-full rounded-r-full" />
          <div className="relative bg-[#FFF0C8] py-4 md:py-6 px-3 font-light w-full rounded-r-full leading-4">
            <span className="font-medium">{"Step 1)"}</span> Navigate around the{" "}
            <span className="font-bangers">TODO Wizard</span> app. Click on{" "}
            <span className="font-semibold text-[#8317A9]">bugs</span> you find!
          </div>
        </div>

        <img
          src="/images/bug-example.png"
          className="pl-3 md:pl-10 w-1/4 max-w-[10rem] h-auto"
        />
      </div>

      <div className="mt-12 text-sm md:text-lg flex flex-row w-full items-center justify-end">
        <div className="pt-1 pl-4 pr-5 md:pr-10 w-1/4 max-w-[10rem]">
          <img src="/images/points-earned.png" className="h-auto" />
        </div>

        <div className="relative w-3/4">
          <div className="absolute top-1 left-1 bg-[#9A7E35] w-full h-full rounded-l-full" />
          <div className="relative bg-[#FFF0C8] py-4 md:py-6 pl-5 md:pl-10 font-light w-full rounded-l-full leading-4">
            <span className="font-medium">{"Step 2)"}</span> When you find a{" "}
            <span className="font-semibold text-[#8317A9]">bug</span>, you earn
            points. Collect as many as possible
          </div>
        </div>
      </div>

      <Link to="/play/landing">
        <PrettyButton className="mt-[3.25rem]">
          Let's go! <img className="ml-2 w-5 h-5 inline" src="/icons/eye.svg" />
        </PrettyButton>
      </Link>
    </div>
  );
}
