import { Link } from "@remix-run/react";
import { MagnifyingGlassBackground } from "~/components/background-patterns";
import { PrettyButton } from "~/components/pretty-button";

export default function Component() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="mt-5 md:mt-16 text-[#F54F01] text-base md:text-lg font-bold text-center">
        About
      </div>
      <div className="mt-3 font-light text-base md:text-xl px-7 text-left max-w-[38rem]">
        How attentive to details are you? The very best founders & builders I
        know are not only great at guiding high-level vision, but are also very
        meticulous about small improvements/bugs.{" "}
        <img src="/icons/bug.svg" className="inline-block h-5 opacity-50" />
        <div className="mt-4" />
        Your goal is to catch as many software bugs in this game as possible,
        and see how you stack up against other founders, engineers, PMs, QA
        testers!
        <div className="mt-4" />
        All the code is{" "}
        <Link
          target="_blank"
          to="https://github.com/kevjin/are-you-detail-oriented"
          className="text-[#a57241] underline"
        >
          open-source on Github
        </Link>
        . If you're a CS student/junior engineer, it could be a good reference
        for building your own side project.
      </div>

      <div className="mt-14 md:mt-32 font-light text-base md:text-xl px-7 text-left max-w-[38rem]">
        This was a fun, small weekend project of mine. Come follow my socials to
        see what else I’m building!
      </div>
      <div className="mt-3 px-7 flex flex-row w-full justify-between items-center max-w-[38rem]">
        <div className="flex flex-row justify-start items-start gap-2">
          <img src="/icons/profile-pic.png" className="h-10 w-10" />
          <div>
            <div className="font-semibold text-sm">Kevin</div>
            <div className="text-[#787878] text-xs">@itskevinjin</div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          <Link target="_blank" to="https://twitter.com/itskevinjin">
            <PrettyButton
              buttonClassName="w-10 h-10 p-0 bg-[#F7EDCA]"
              shadowClassName="w-10 h-10 p-0"
            >
              <img src="/icons/twitter.png" className="h-4 w-5" />
            </PrettyButton>
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/itskevinjin/">
            <PrettyButton
              buttonClassName="w-10 h-10 p-0 bg-[#F7EDCA]"
              shadowClassName="w-10 h-10 p-0"
            >
              <img src="/icons/linkedin.png" className="h-4 w-5" />
            </PrettyButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
