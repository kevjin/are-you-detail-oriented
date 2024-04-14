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
      <div className="h-[calc(100%-5rem)] pb-[5rem] bg-white w-full overflow-y-auto">
        <Outlet />
      </div>
      <div className="fixed bottom-0 bg-[#FFBF43] h-[5rem] w-full px-3 py-2 flex flex-row justify-between">
        <div className="w-[6rem] h-full flex flex-col items-center justify-center">
          <div className="text-xl font-bold">0:59:34</div>
          <div className="text-sm font-medium text-[#553608]">Time Left</div>
        </div>
        <Link
          to="/home/results"
          className="w-1/4 max-w-[5rem] h-full rounded-md flex flex-col items-center justify-center"
        >
          <img className="w-6 h-6" src={"/icons/done.svg"} />
          <div className="mt-1 font-medium text-sm text-[#553608]">
            I'm done
          </div>
        </Link>
        <div className="h-full w-[6rem] rounded-md flex flex-col items-center justify-center">
          <div className="text-xl font-bold">{0}</div>
          <div className="font-medium text-sm text-[#553608]">Score</div>
        </div>
      </div>
    </div>
  );
}
