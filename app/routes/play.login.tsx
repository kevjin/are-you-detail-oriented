import { Link } from "@remix-run/react";
import { TodoWizardNavbarLoggedOut } from "~/components/todo-wizard-navbar";

export default function Component() {
  return (
    <div className="w-full h-full bg-[#E6E6E6] flex flex-col items-center justify-center">
      <TodoWizardNavbarLoggedOut />

      <div className="bg-white w-full max-w-[20rem] rounded-lg border-2 border-black flex flex-col items-center justify-center pt-10 pb-7 px-10">
        <div className="font-medium text-lg">Login to TODO Wizard</div>
        <div className="mt-7 text-sm">Username</div>
        <input />
        <div className="mt-3 text-sm">Password</div>
        <input />

        <button className="border-black rounded-full font-medium w-full py-3 text-lg text-center">
          Sign Up
        </button>
        <div className="text-sm text-[#959595]">This is not a real login</div>

        <div className="mt-16 text-sm text-[#a6a6a6]">
          Don't have an account? <Link to="/play/login">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
