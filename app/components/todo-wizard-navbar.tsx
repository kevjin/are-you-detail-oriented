import { Link } from "@remix-run/react";

export function TodoWizardNavbarLoggedOut() {
  return (
    <div className="py-2 flex flex-row pl-4 pr-2 items-center justify-between border-b-2 border-black">
      <div className="font-semibold uppercase text-lg">Todo Wizard</div>
      <div className="flex flex-row items-center gap-3">
        <Link to="/play/login">
          <button className="border-2 border-black rounded-sm font-medium py-3 px-4">
            Log In
          </button>
        </Link>
        <Link to="/play/signup">
          <button className="bg-black rounded-sm font-medium text-white py-3 px-4">
            Sign Up
          </button>
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
