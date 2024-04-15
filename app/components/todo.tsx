import { useState } from "react";
import { cn } from "~/lib/utils";

export function Todo({
  title,
  completed,
  editable = false,
  className,
}: {
  title: string;
  completed?: boolean;
  editable?: boolean;
  className?: string;
}) {
  const [isComplete, setIsComplete] = useState(completed);
  return (
    <div
      className={cn(
        "bg-white w-full py-1 overflow-hidden transition-colors duration-500 border rounded-[0.25rem] border-black px-3",
        isComplete && "line-through bg-[#bebebe]",
        className
      )}
    >
      <img
        src="/icons/checkmark.svg"
        className={cn(
          "h-5 w-5 inline-block mr-3 mb-1",
          editable && "cursor-pointer"
        )}
        onClick={() => {
          if (!editable) return;
          setIsComplete((prev) => !prev);
        }}
      />
      {title}
    </div>
  );
}
