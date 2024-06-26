import { create } from "zustand";

type StoreState = {
  score: number;
  clearGame: () => void;
  bugs: Record<string, BugStatus>;
  foundBug: (id: string, reason: string) => void;
  latestBugReason: string;
  playStartTs: number;
  setPlayStartTs: (ts: number) => void;
};

type BugStatus = {
  found: boolean;
  foundAtSeconds: number;
};

export const useStore = create<StoreState>((set) => ({
  score: 0,
  clearGame: () =>
    set({ bugs: {}, score: 0, latestBugReason: "No bugs found yet!" }),
  bugs: {},
  latestBugReason: "No bugs found yet!",
  playStartTs: Date.now(),
  setPlayStartTs: (ts: number) => set({ playStartTs: ts }),
  foundBug: (id, reason) =>
    set((state) => ({
      bugs: {
        ...state.bugs,
        [id]: {
          found: true,
          foundAtSeconds: Math.max(
            Math.round((Date.now() - state.playStartTs) / 1000),
            60
          ),
        },
      },
      latestBugReason: reason,
      score: getScoreFromBugStatus({
        ...state.bugs,
        [id]: {
          found: true,
          foundAtSeconds: Math.max(
            Math.round((Date.now() - state.playStartTs) / 1000),
            60
          ),
        },
      }),
    })),
}));

// Idempotent func for getting score from bug status based on bug count found and timestamp found at (earlier the better)
function getScoreFromBugStatus(bugs: Record<string, BugStatus>) {
  return Object.values(bugs).reduce((acc, bug) => {
    if (bug.found) {
      return acc + 100 + (60 - bug.foundAtSeconds) / 2;
    }
    return acc;
  }, 0);
}
