import { Link, Outlet, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useStore } from "~/lib/store";

const SECONDS = 60;

export default function Component() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const countdownTimerRef = useRef<HTMLDivElement>(null);
  const score = useStore((state) => state.score);

  useEffect(() => {
    if (!countdownTimerRef.current || navigation.state === "loading") return;
    const oneMinuteInFuture = Date.now() + SECONDS * 1000;
    const interval = setInterval(() => {
      const time = oneMinuteInFuture - Date.now();
      const minutes = Math.max(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        0
      );
      const seconds = Math.max(Math.floor((time % (1000 * 60)) / 1000), 0);
      const ms = Math.max(Math.floor((time % 1000) / 10), 0);

      countdownTimerRef.current!.innerText = `${minutes}:${
        seconds > 9 ? seconds : `0${seconds}`
      }:${ms > 9 ? ms : `0${ms}`}`;

      if (minutes === 0 && seconds === 0 && ms === 0) {
        countdownTimerRef.current!.style.color = "#FF0000";
      }

      if (time <= 0) {
        clearInterval(interval);
        setTimeout(() => navigate("/home/results"), 1000);
      }
    }, 85);
    return () => clearInterval(interval);
  }, [!!countdownTimerRef.current, navigation.state]);

  return (
    <div className="w-screen h-screen">
      <div className="h-[4.5rem] bg-[#FFD47F] w-full px-7 py-3">
        <div className="font-semibold">
          Tap on all the
          <img src="/icons/bug.svg" className="inline-block mb-[2px]" />
          bugs you can find!
        </div>
        <div className="font-light text-sm">
          <span className="font-bold text-[#8317A9]">(0/25)</span> No bugs found
          yet!
        </div>
      </div>
      <div className="h-[calc(100%-5rem)] pb-[5rem] bg-white w-full overflow-y-auto">
        <Outlet />
      </div>
      <div className="fixed bottom-0 bg-[#FFBF43] h-[5rem] w-full px-3 py-2 flex flex-row justify-between">
        <div className="w-[6rem] h-full flex flex-col items-center justify-center">
          <div
            ref={countdownTimerRef}
            className="text-start w-full pl-[10px] text-xl font-semibold text-[#553608]"
          >
            0:59:34
          </div>
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
          <div className="text-xl font-bold">{score}</div>
          <div className="font-medium text-sm text-[#553608]">Score</div>
        </div>
      </div>
    </div>
  );
}
