import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

export function TodoWizardNavbarLoggedOut() {
  return (
    <div className="py-2 flex flex-row pl-4 pr-2 items-center justify-between border-b-2 border-black">
      <div className="font-semibold uppercase text-lg">Todo Wizard</div>
      <div className="flex flex-row items-center gap-3">
        <Link to="/play/login">
          <Button className="border-2 border-black rounded-sm font-medium py-3 px-4">
            Log In
          </Button>
        </Link>
        <Link to="/play/signup">
          <Button className="bg-black rounded-sm font-medium text-white py-3 px-4">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function TodoWizardNavbarLoggedIn() {
  return (
    <div className="py-2 flex flex-row pl-4 pr-2 items-center justify-between border-b-2 border-black">
      <div className="font-semibold uppercase text-lg">Todo Wizard</div>
      <div className="text-sm">Welcome back John</div>
    </div>
  );
}
