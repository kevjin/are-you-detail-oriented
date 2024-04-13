import { cn } from "~/lib/utils";

export function Todo({
  title,
  completed,
  className,
}: {
  title: string;
  completed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white w-full py-1 whitespace-nowrap overflow-hidden border rounded-[0.25rem] border-black px-3",
        className
      )}
    >
      <img
        src="/icons/checkmark.svg"
        className="h-5 w-5 inline-block mr-3 mb-1"
      />
      {title}
    </div>
  );
}
