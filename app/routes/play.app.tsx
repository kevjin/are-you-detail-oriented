import { Link } from "@remix-run/react";
import { TodoWizardNavbarLoggedOut } from "~/components/todo-wizard-navbar";

export function Component() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <TodoWizardNavbarLoggedOut />

      <div className="text-xl text-center mt-7">
        Track your personel tasks and goals with Todo Wizard
      </div>

      <button className="bg-black rounded-sm font-medium text-white py-3 px-4 max-w-[7rem] overflow-hidden">
        Get Started for Free
      </button>

      <div>
        <div className="w-[10rem] border rounded-sm border-black pl-3">
          Go to the gym
        </div>
        <div className="w-[10rem] border rounded-sm border-black pl-3">
          Buy groceries this weekend
        </div>
        <div className="w-[10rem] border rounded-sm border-black pl-3">
          Pay bills at end of month
        </div>
      </div>

      <div className="mt-20 text-sm text-center">
        10s of people trust Todo Wizard to manage their todo lists
      </div>

      <div className="flex flex-row gap-5">
        <img src="/images/google.png" />
        <img src="/images/reddit.png" />
        <img src="/images/facebook.png" />
      </div>

      <div className="w-full bg-[#E4E4E4] pb-16">
        <div>Use our unique GPT-wrapper features to generate goals for you</div>
        <div className="flex flex-row w-[10rem]">
          give me some exercise goals
          <button>Inspire</button>
        </div>

        <div className="w-[10rem] border rounded-sm border-black pl-3">
          Go on a walk
        </div>
        <div className="w-[10rem] border rounded-sm border-black pl-3">
          Go hiking
        </div>
        <div className="w-[10rem] border rounded-sm border-black pl-3">
          Go to the gym
        </div>
        <div className="w-[10rem] border rounded-sm border-black pl-3">
          Go to the gym
        </div>
      </div>

      <div className="mt-32 w-full max-w-[16rem]">
        <div className="text-start text-xl font-semibold">
          Frequently Asked Questions
        </div>
        <div className="w-full border-t border-black text-base">
          How do I create a new task?
        </div>
        <div className="w-full border-t border-black text-base">
          Can I prioritize my tasks?
        </div>
        <div className="w-full border-t border-black text-base">
          How can I track my progress?
        </div>
      </div>
      <div className="bg-[#E4E4E4] mt-32 py-16 w-full flex flex-col items-center justify-center">
        <div className="uppercase font-semibold text-lg">
          Simplify your life
        </div>
        <div className="text-center text-base font-normal">
          Never worry again about forgetting a task or goal. Task Wizard is
          incredibly easy to use and has AI generation capabilites to make
          managing your projects easier
        </div>

        <button className="border border-black rounded-sm font-medium py-3 px-6 mt-5 text-lg">
          Get Started
        </button>
      </div>

      <div className="mt-32 mb-7 flex flex-row justify-between w-full">
        <div>
          <div className="font-semibold">Task Wizard</div>
          <div className="font-light">Copyright @ 2023</div>
        </div>
        <div>
          <div className="underline">Privacy Policy</div>
          <div className="underline">Terms of Service</div>
        </div>
      </div>
    </div>
  );
}
