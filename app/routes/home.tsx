import { Outlet } from "@remix-run/react";

export default function Component() {
  return (
    <div className="w-screen h-screen bg-[#F5F2DC]">
      <Outlet />
      <div className="bg-[#FFBF43]"></div>
    </div>
  );
}
