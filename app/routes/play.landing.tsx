import { useState } from "react";
import { Todo } from "~/components/todo";
import { TodoWizardNavbarLoggedOut } from "~/components/todo-wizard-navbar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export default function Component() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <TodoWizardNavbarLoggedOut />

      <div className="text-xl text-center font-medium mt-7">
        Track your personel tasks and
        <br />
        goals with <span className="font-bangers text-2xl">Todo Wizard</span>
      </div>

      <Button className="mt-3 bg-black justify-start rounded-full font-medium text-white py-2 px-4 text-sm max-w-[8rem] overflow-hidden">
        Get Started for Free
      </Button>

      <div className="mt-10 flex flex-col gap-1">
        <Todo className="max-w-[15rem]" title="Go to the gym" />
        <Todo className="max-w-[15rem]" title="Buy groceries this weekend" />
        <Todo className="max-w-[15rem]" title="Pay bills at end of month" />
      </div>

      <div className="mt-16 text-xs text-center">
        10s of people trust Todo Wizard to manage their todo lists
      </div>

      <div className="flex flex-row items-start justify-center gap-10">
        <img className="mt-5 h-6 w-auto" src="/images/google.png" />
        <img className="mt-5 h-5 w-auto" src="/images/reddit.png" />
        <img className="mt-5 h-11 w-auto" src="/images/facebook.png" />
      </div>

      <div className="mt-7 w-full bg-[#E4E4E4] pb-16 px-7 flex flex-col">
        <div className="-mt-1 text-lg font-medium text-center">
          Use our unique GPT-wrapper features to generate goals for you
        </div>
        <div className="mt-6 flex flex-row justify-between items-center h-10 bg-white rounded-md border-2 border-black p-[2px]">
          <div className="text-sm pl-2">give me some exercise goals</div>
          <Button className="bg-[#c3c3c3] rounded-sm h-full text-xs px-3">
            Inspire ✨
          </Button>
        </div>

        <Todo title="Go on a walk" className="mt-5 py-2" />
        <Todo title="Go hiking" className="py-2 mt-1" />
        <Todo title="Go to the gym" className="py-2 mt-1" />
        <Todo title="Go to the gym" className="py-2 mt-1" />
      </div>

      <div className="mt-24 w-full px-7">
        <div className="mb-5 text-start text-xl font-semibold">
          Frequently Asked Questions
        </div>
        <FAQQuestion
          question="How do I create a new task?"
          answer="You can create a new task by clicking the 'Create Task' button on the top right of the screen."
        />
        <FAQQuestion
          question="Can I prioritize my tasks?"
          answer="Yes, you can prioritize your tasks by dragging and dropping them in the order you want."
        />
        <FAQQuestion
          question="How can I track my progress?"
          answer="You can track your progress by clicking on the 'Progress' tab on the left side of the screen."
        />
      </div>
      <div className="bg-[#E4E4E4] mt-24 py-14 px-5 w-full flex flex-col items-center justify-center">
        <div className="uppercase font-bangers text-2xl">
          Simplify your life.
        </div>
        <div className="mt-5 text-center text-sm font-normal">
          Never worry again about forgetting a task or goal. Task Wizard is
          incredibly easy to use and has AI generation to make
          <span className="ml-3"></span>managing your projects easier
        </div>

        <Button className="bg-white border-2 border-black rounded-md font-medium py-2 px-8 mt-5 text-sm">
          Get Started
        </Button>
      </div>

      <div className="mt-28 mb-7 px-7 flex flex-row justify-between w-full text-sm">
        <div>
          <div className="font-bold">Task Wizard</div>
          <div className="font-light">Copyright @ 2023</div>
        </div>
        <div className="text-right">
          <div className="underline">Terms of Service</div>
          <div className="underline">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

function FAQQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      <div
        className="py-2 w-full border-t border-black text-base flex flex-row justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <div>{question}</div>
        <img src="/icons/caret.svg" className={cn(expanded && "rotate-180")} />
      </div>
      {expanded && (
        <div className="text-sm font-light pb-4 text-[#313131]">{answer}</div>
      )}
    </div>
  );
}
