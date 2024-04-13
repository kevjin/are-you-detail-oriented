import { Link } from "@remix-run/react";

export default function Component() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="mt-20 text-3xl font-semibold text-center">
        {/* TODO add special font */}
        Are you <span className="text-[#F54F01]">detail oriented?</span>
      </div>
      <div className="mt-3 font-medium text-sm">
        Can you catch all the in-app bugs in{" "}
        <span className="text-[#C87B09]">1 minute</span>?
      </div>

      <div className="mt-40 text-sm font-light text-center">
        Compete against{" "}
        <span className="font-semibold">
          56 other
          <br />
          founders, builders, PMs, qa testers
        </span>
      </div>
      <Link to="play/landing">
        <button className="bordere border-[#AA6D12] rounded-md px-10 py-3 text-lg font-semibold">
          I'm ready! <img className="w-4 h-4 inline" src="/icons/eye.svg" />
        </button>
      </Link>
    </div>
  );
}
