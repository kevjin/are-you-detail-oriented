import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const lastPlaySessionCookie = createCookie("last-play-session", {
  maxAge: 604_800, // one week
});

export type PlaySessionCookie = {
  id: string;
  code: string;
  score: number;
  name: string;
  createdAt: string;
};
