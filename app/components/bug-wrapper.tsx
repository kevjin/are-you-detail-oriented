import { useStore } from "~/lib/store";
import { cn } from "~/lib/utils";

export function BugWrapper({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const foundBug = useStore((state) => state.foundBug);
  const bugStatus = useStore((state) => state.bugs[id]);
  return (
    <div
      onClick={() => {
        if (!bugStatus?.found) {
          foundBug(id);
        }
      }}
      className={cn(
        "transition-opacity duration-500",
        bugStatus?.found && "opacity-50"
      )}
    >
      {children}
    </div>
  );
}
