import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function Component() {
  return (
    <div className="w-screen h-screen">
      <div className="h-[5rem] bg-[#FFD47F] w-full px-7 py-3">
        <div>Tap on all the bugs you can find!</div>
        <div className="font-light">
          <span className="font-semibold text-[#8317A9]">(0/25)</span> No bugs
          found yet!
        </div>
      </div>
      <div className="h-[calc(100%-10rem)] bg-white w-full overflow-y-auto">
        <Outlet />
      </div>
      <div className="bg-[#FFBF43] h-[5rem] w-full px-3 py-2 flex flex-row justify-center">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-lg font-semibold">0:59:34</div>
          <div className="text-sm font-medium mt-2 text-[#553608]">
            Time Left
          </div>
        </div>
        <Link to="/play/results">
          <Button className="h-full w-1/4 max-w-[5rem] rounded-md flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.2)]">
            <img className="w-4 h-4" src={"/icons/done.svg"} />
            <div className="mt-2 font-medium text-sm text-[#553608]">
              I'm done
            </div>
          </Button>
        </Link>
        <div className="h-full w-1/4 max-w-[5rem] rounded-md flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.2)]">
          <div className="text-lg font-semibold">{0}</div>
          <div className="mt-2 font-medium text-sm text-[#553608]">
            I'm done
          </div>
        </div>
      </div>
    </div>
  );
}
