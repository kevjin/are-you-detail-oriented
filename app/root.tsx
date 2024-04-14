import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./global.css";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Are you Detail Oriented?",
    viewport: "width=device-width,initial-scale=1",
  },
  {
    property: "og:image",
    content: "https://static.lite.build/social-preview.png",
  },
  {
    property: "twitter:image",
    content: "https://static.lite.build/social-preview.png",
  },
];

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
