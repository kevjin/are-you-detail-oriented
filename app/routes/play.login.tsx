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
          Login to{" "}
          <span className="font-normal text-xl md:text-2xl font-bangers">
            TODO Wizard
          </span>
        </div>
        <div className="mt-3 md:mt-10 text-xs mb-[2px] font-bold">Username</div>
        <Input className="border-2 border-black" value="johndoe@gmail.com" />
        <div className="mt-3 md:mt-5 text-xs mb-[2px] font-bold">Password</div>
        <Input
          type="password"
          className="border-2 border-black"
          value="hunter2"
        />

        <Link to="/play/app" className="w-full">
          <Button className="mt-5 md:mt-7 bg-black text-white rounded-full font-semibold w-full py-3 text-sm md:text-base text-center">
            Login
          </Button>
        </Link>
        <div className="text-[#959595] text-center text-xs w-full mt-1">
          This is not a real login
        </div>

        <BugWrapper
          id="23iohjer5hegn31oin"
          className="w-full"
          reason="This the login page, text doesn't make sense"
        >
          <div className="mt-14 text-sm text-center w-full font-light text-[#8b8b8b]">
            Already have an account? <span className="underline">Login</span>
          </div>
        </BugWrapper>
      </div>
    </div>
  );
}
