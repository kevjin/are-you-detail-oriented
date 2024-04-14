import { Link } from "@remix-run/react";
import { BugWrapper } from "~/components/bug-wrapper";
import { TodoWizardNavbarLoggedOut } from "~/components/todo-wizard-navbar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Component() {
  return (
    <div className="w-full h-full bg-[#E6E6E6] flex flex-col items-center justify-start">
      <TodoWizardNavbarLoggedOut />

      <div className="mt-9 bg-white w-full max-w-[20rem] md:max-w-[24rem] rounded-xl border-2 border-black flex flex-col items-start justify-center pt-7 md:pt-12 pb-7 px-7">
        <div className="font-semibold text-lg text-center w-full">
          Sign up for{" "}
          <span className="font-normal text-xl font-bangers">TODO Wizard</span>
        </div>
        <div className="mt-5 md:mt-10 text-xs mb-[2px] font-bold">Name</div>
        <Input className="border-2 border-black" value="John Doe" />
        <div className="mt-3 md:mt-5 text-xs mb-[2px] font-bold">Username</div>
        <Input className="border-2 border-black" value="johndoe@gmail.com" />
        <div className="mt-3 md:mt-5 text-xs mb-[2px] font-bold">Password</div>
        <BugWrapper
          id="32bg3oirn3qfoi3"
          className="w-full"
          reason="Password input should be hidden"
        >
          <Input className="border-2 border-black" value="hunter2" />
        </BugWrapper>

        <Link to="/play/app" className="w-full">
          <Button className="mt-5 md:mt-7 bg-black text-white rounded-full font-semibold w-full py-3 text-sm md:text-base text-center">
            Sign Up
          </Button>
        </Link>
        <div className="text-[#959595] text-center text-xs w-full mt-1">
          This is not a real signup
        </div>
      </div>
    </div>
  );
}
