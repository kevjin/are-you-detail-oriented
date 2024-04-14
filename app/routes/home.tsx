import { Outlet, useLocation } from "@remix-run/react";
import { ConditionalLink } from "~/components/conditional-link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Component() {
  const location = useLocation();
  return (
    <div className="relative w-screen h-screen bg-[#F5F2DC] overflow-hidden">
      <div className="w-full h-full pb-[5rem]">
        <Outlet />
      </div>
      <div className="fixed bottom-0 bg-[#FFBF43] h-[5rem] w-full px-3 py-2 flex flex-row justify-between">
        <NavButton
          to="/home/start"
          currentPath={location.pathname}
          icon="/icons/flag.svg"
          text="Start"
        />
        <NavButton
          to="/home/rankings"
          currentPath={location.pathname}
          icon="/icons/rankings.svg"
          text="Rankings"
        />
        {/* TODO update this to be the score */}
        <NavButton icon="/icons/flag.svg" text="Latest Score" />
        <NavButton
          to="/home/about"
          currentPath={location.pathname}
          icon="/icons/info.svg"
          text="About"
        />
      </div>
    </div>
  );
}

function NavButton({
  to,
  currentPath,
  icon,
  text,
}: {
  to?: string;
  currentPath?: string;
  icon: string;
  text: string;
}) {
  return (
    <ConditionalLink
      condition={!!to}
      to={to}
      className={cn(
        "w-1/4 max-w-[5rem] h-full rounded-md flex flex-col items-center justify-center",
        !!to && to === currentPath && "bg-[rgba(255,255,255,0.25)]",
        !!to && "hover:bg-[rgba(255,255,255,0.25)]"
      )}
    >
      <img className="w-6 h-6" src={icon} />
      <div className="mt-2 font-medium text-xs text-[#553608]">{text}</div>
    </ConditionalLink>
  );
}
