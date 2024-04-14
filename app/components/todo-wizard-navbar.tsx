import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { BugWrapper } from "./bug-wrapper";
import { useState } from "react";

export function TodoWizardNavbarLoggedOut() {
  return (
    <div className="bg-white w-full py-2 flex flex-row pl-4 pr-2 items-center justify-between border-b-2 border-black">
      <Link to="/play/landing">
        <div className="uppercase text-lg font-bangers">Todo Wizard</div>
      </Link>
      <div className="flex flex-row items-center gap-3">
        <Link to="/play/login">
          <Button className="border-2 border-black rounded-sm text-xs font-medium h-8 px-4">
            Log In
          </Button>
        </Link>
        <Link to="/play/signup">
          <Button className="bg-black rounded-sm font-medium text-xs text-white h-8 px-4">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function TodoWizardNavbarLoggedIn() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white w-full py-2 flex flex-row pl-4 pr-2 items-center justify-between border-b-2 border-black">
      <BugWrapper id="2iogn2io2ng3rqui">
        <div className="uppercase text-base font-bold">Todo Wizard</div>
      </BugWrapper>
      <div
        onClick={() => setExpanded(!expanded)}
        className="text-xs font-semibold relative"
      >
        Welcome back John{" "}
        <img src="/icons/caret.svg" className="h-5 w-5 mb-1 inline-block" />
        {expanded && (
          <div className="absolute right-0 top-6 bg-white w-[7rem] py-2 px-3 border-2 border-black rounded-md">
            <Link to="/play/landing">
              <div className="font-bold text-[0.65rem] uppercase">Log Out</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
