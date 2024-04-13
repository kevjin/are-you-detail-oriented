import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

export function PrettyButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative group">
      <div className="top-[0.85rem] bg-[#E79822] border border-[#AA6D12] w-56 h-14 rounded-md absolute" />
      <Button
        className={cn(
          "relative bg-white border border-[#AA6D12] rounded-md w-56 py-3 text-lg font-bold group-hover:translate-y-[-0.125rem]",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
