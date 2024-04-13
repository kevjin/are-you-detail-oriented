import { Link } from "@remix-run/react";
import {
  BugBackground,
  MagnifyingGlassBackground,
} from "~/components/background-patterns";
import { PrettyButton } from "~/components/pretty-button";

export default function Component() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <MagnifyingGlassBackground className="top-[9rem] right-[-4rem]" />
      <MagnifyingGlassBackground className="bottom-[7rem] left-[2rem] rotate-90 h-16 w-16" />
      <BugBackground className="left-[5rem] top-[19rem] h-7 w-7 opacity-50 -rotate-45" />
      <div className="mt-20 text-3xl font-semibold text-center">
        Are you{" "}
        <span className="text-[#F54F01]">
          <span className="font-gochihand font-normal">detail</span> oriented?
        </span>
      </div>
      <div className="mt-3 font-medium text-sm">
        Can you catch all the in-app bugs in{" "}
        <span className="text-[#C87B09]">1 minute</span>?
      </div>

      <div className="mt-56 text-sm font-light text-center">
        Compete against{" "}
        <span className="font-semibold">
          56 other
          <br />
          founders, builders, PMs, qa testers
        </span>
      </div>
      <Link to="/play/landing">
        <PrettyButton className="mt-3">
          I'm ready!{" "}
          <img className="ml-2 w-5 h-5 inline" src="/icons/eye.svg" />
        </PrettyButton>
      </Link>
    </div>
  );
}
