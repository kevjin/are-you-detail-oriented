import { useState } from "react";
import { useStore } from "~/lib/store";
import { cn } from "~/lib/utils";

export function BugWrapper({
  id,
  reason,
  children,
  className,
}: {
  id: string;
  reason: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [bugDirection, setBugDirection] = useState<number>(
    Math.floor(Math.random() * 8)
  );
  const [bugAnimate, setBugAnimate] = useState<boolean>(false);
  const [foundAtXY, setFoundAtXY] = useState<{ x: number; y: number }>();
  const foundBug = useStore((state) => state.foundBug);
  const bugStatus = useStore((state) => state.bugs[id]);
  return (
    <div
      onClick={(e) => {
        if (!bugStatus?.found) {
          foundBug(id, reason);
          const rect = e.currentTarget.getBoundingClientRect();
          setFoundAtXY({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          setTimeout(() => setBugAnimate(true), 500);
        }
      }}
      className={cn(
        "relative transition-opacity duration-500",
        bugStatus?.found && "opacity-50",
        className
      )}
    >
      {children}
      {!!foundAtXY && (
        <>
          <div
            style={{
              left: foundAtXY.x - 20,
              top: foundAtXY.y - 20,
            }}
            className="absolute rounded-full border border-[#802d8c] w-[40px] h-[40px]"
          />
          <img
            src="/icons/bug.svg"
            style={{
              left: foundAtXY.x,
              top: foundAtXY.y,
            }}
            className={cn(
              "shrink-0 h-5 w-5 absolute opacity-0 transition-all duration-1000",
              bugDirection === 0 && "rotate-0",
              bugDirection === 1 && "rotate-[45deg]",
              bugDirection === 2 && "rotate-[90deg]",
              bugDirection === 3 && "rotate-[135deg]",
              bugDirection === 4 && "rotate-[180deg]",
              bugDirection === 5 && "rotate-[225deg]",
              bugDirection === 6 && "rotate-[270deg]",
              bugDirection === 7 && "rotate-[315deg]",
              !!bugAnimate && "opacity-100",
              !!bugAnimate && bugDirection === 0 && "-translate-y-12",
              !!bugAnimate &&
                bugDirection === 1 &&
                "-translate-y-8 translate-x-8",
              !!bugAnimate && bugDirection === 2 && "translate-x-12",
              !!bugAnimate &&
                bugDirection === 3 &&
                "translate-y-8 translate-x-8",
              !!bugAnimate && bugDirection === 4 && "translate-y-12",
              !!bugAnimate &&
                bugDirection === 5 &&
                "translate-y-8 -translate-x-8",
              !!bugAnimate && bugDirection === 6 && "translate-x-12",
              !!bugAnimate &&
                bugDirection === 7 &&
                "-translate-y-8 -translate-x-8"
            )}
          />
        </>
      )}
    </div>
  );
}
