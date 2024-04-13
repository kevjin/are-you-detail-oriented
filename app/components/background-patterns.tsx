import { cn } from "~/lib/utils";

export function MagnifyingGlassBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <img
      src="/icons/magnifying-glass.svg"
      className={cn("absolute", className)}
    />
  );
}

export function BugBackground({ className }: { className?: string }) {
  return <img src="/icons/bug.svg" className={cn("absolute", className)} />;
}
