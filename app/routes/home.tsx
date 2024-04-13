import { Link, Outlet } from "@remix-run/react";
import { ConditionalLink } from "~/components/conditional-link";
import { cn } from "~/lib/utils";

export default function Component() {
  return (
    <div className="w-screen h-screen bg-[#F5F2DC]">
      <div className="w-full h-[calc(100%-5rem)]">
        <Outlet />
      </div>
      <div className="bg-[#FFBF43] h-[5rem] w-full px-3 py-2 flex flex-row justify-center">
        <NavButton to="/home/start" icon="/icons/flag.svg" text="Start" />
        <NavButton
          to="/home/rankings"
          icon="/icons/rankings.svg"
          text="Rankings"
        />
        {/* TODO update this to be the score */}
        <NavButton icon="/icons/flag.svg" text="Latest Score" />
        <NavButton to="/home/about" icon="/icons/info.svg" text="About" />
      </div>
    </div>
  );
}

function NavButton({
  to,
  icon,
  text,
}: {
  to?: string;
  icon: string;
  text: string;
}) {
  return (
    <ConditionalLink condition={!!to} to={to}>
      <button
        className={cn(
          "h-full w-1/4 max-w-[5rem] rounded-md flex flex-col items-center justify-center",
          !!to && "hover:bg-[rgba(255,255,255,0.2)]"
        )}
      >
        <img className="w-4 h-4" src={icon} />
        <div className="mt-2 font-medium text-sm bg-[#553608]">{text}</div>
      </button>
    </ConditionalLink>
  );
}
