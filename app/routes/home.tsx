import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { ConditionalLink } from "~/components/conditional-link";
import { lastPlaySessionCookie } from "~/cookies.server";
import { cn } from "~/lib/utils";

const FAKE_LAST_PLAY_SESSION = {
  id: "U843TI3O2NROIN32G",
  score: 1504,
  name: "RedTurtle34",
  createdAt: new Date().toISOString(),
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await lastPlaySessionCookie.parse(cookieHeader)) || {};
  const lastPlaySessionId = cookie.session_id as string | undefined;

  if (lastPlaySessionId) {
    // TODO fetch the last play session and return it
  }

  return { lastSession: FAKE_LAST_PLAY_SESSION };
};

export default function Component() {
  const data = useLoaderData<typeof loader>();

  const location = useLocation();
  return (
    <div className="relative w-screen h-screen bg-[#F5F2DC] overflow-hidden">
      <div className="w-full h-full pb-[5rem] overflow-hidden">
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
        <NavButton
          to={data.lastSession ? "/home/results" : undefined}
          currentPath={location.pathname}
          icon={data.lastSession.score ?? 0}
          text="Latest Score"
        />
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
  icon: string | number;
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
      {typeof icon === "string" ? (
        <img className="w-6 h-6 mb-1" src={icon} />
      ) : (
        <div className="text-xl text-[#553608] font-bold mb-[1px]">{icon}</div>
      )}
      <div className="font-medium text-xs text-[#553608]">{text}</div>
    </ConditionalLink>
  );
}
