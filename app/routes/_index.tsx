import { redirect, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Are you detail oriented?" },
    {
      name: "description",
      content:
        "Test your detail-oriented-'ness' with our quick quiz. Can you catch all the bugs in the app?",
    },
  ];
};

export const loader = () => redirect("/home/start");
