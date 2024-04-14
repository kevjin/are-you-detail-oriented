import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

export function PrettyButton({
  children,
  className,
  buttonClassName,
  shadowClassName,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  shadowClassName?: string;
  onClick?: () => void;
}) {
  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "top-[0.25rem] bg-[#E79822] border border-[#AA6D12] w-56 h-14 rounded-md absolute",
          shadowClassName
        )}
      />
      <Button
        onClick={onClick}
        className={cn(
          "relative bg-white border border-[#AA6D12] rounded-md w-56 h-14 text-lg font-bold group-hover:translate-y-[-0.125rem]",
          buttonClassName
        )}
      >
        {children}
      </Button>
    </div>
  );
}
