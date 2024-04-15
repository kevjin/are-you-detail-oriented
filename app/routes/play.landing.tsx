import { Link } from "@remix-run/react";
import { useState } from "react";
import { BugWrapper } from "~/components/bug-wrapper";
import { Todo } from "~/components/todo";
import { TodoWizardNavbarLoggedOut } from "~/components/todo-wizard-navbar";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Component() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <TodoWizardNavbarLoggedOut />

      <div className="md:mt-20 flex flex-col w-full md:flex-row items-center md:justify-between md:max-w-[60rem]">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl md:text-3xl md:font-normal text-center font-medium mt-7 md:text-start">
            Track your{" "}
            <BugWrapper
              id="3uthg3i2onfqoifngq3"
              reason="it's a typo!"
              className="inline"
            >
              personel
            </BugWrapper>{" "}
            tasks and
            <br />
            goals with{" "}
            <span className="font-bangers text-2xl">Todo Wizard</span>
          </div>
          <BugWrapper id="219rh32" reason="Button text is cut-off">
            <Button className="mt-3 bg-black justify-start rounded-full font-medium text-white py-2 px-4 text-sm max-w-[8rem] overflow-hidden">
              Get Started for Free
            </Button>
          </BugWrapper>
        </div>

        <div className="mt-10 flex flex-col gap-1">
          <Todo className="max-w-[15rem]" title="Go to the gym" />
          <BugWrapper id="i4gn2io4g2" reason="Todo text is cut-off">
            <Todo
              className="max-w-[15rem] whitespace-nowrap"
              title="Buy groceries this weekend"
            />
          </BugWrapper>
          <Todo className="max-w-[15rem]" title="Pay bills at end of month" />
        </div>
      </div>

      <div className="mt-16 md:mt-32 text-xs md:text-sm text-center">
        10s of people trust Todo Wizard to manage their todo lists
      </div>

      <div className="flex flex-row items-start justify-center gap-10 md:gap-20">
        <img className="mt-5 h-6 md:h-9 w-auto" src="/images/google.png" />
        <img className="mt-5 h-5 md:h-8 w-auto" src="/images/reddit.png" />
        <BugWrapper
          id="4i3hgn2oi23r"
          reason="'facebook' is not vertically aligned"
        >
          <img
            className="mt-5 h-11 md:h-16 w-auto"
            src="/images/facebook.png"
          />
        </BugWrapper>
      </div>

      <div className="mt-5 w-full bg-[#E4E4E4] pb-16 px-7 flex flex-col items-center justify-start">
        <div className="flex flex-col items-center md:max-w-[30rem]">
          <BugWrapper id="2oq3pgjn32nio2n" reason="Missing top margin">
            <div className="-mt-1 text-lg md:text-xl font-medium text-center">
              Use our unique GPT-wrapper features to generate goals for you
            </div>
          </BugWrapper>
          <div className="w-full mt-6 flex flex-row justify-between items-center h-10 bg-white rounded-md border-2 border-black p-[2px]">
            <div className="text-sm pl-2">give me some exercise goals</div>
            <Button className="bg-[#c3c3c3] rounded-sm h-full text-xs px-3">
              Inspire ✨
            </Button>
          </div>

          <Todo title="Go on a walk" className="mt-5 py-2" />
          <Todo title="Go hiking" className="py-2 mt-1" />
          <Todo title="Go to the gym" className="py-2 mt-1" />
          <BugWrapper
            id="i4tn234r2oi3r"
            reason="This is a duplicate todo"
            className="w-full"
          >
            <Todo title="Go to the gym" className="py-2 mt-1" />
          </BugWrapper>
        </div>
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
        <BugWrapper
          id="34iong34gn23i3"
          reason="This FAQ question is not filled out"
        >
          <FAQQuestion
            question="Can I share my tasks with others?"
            answer="TODO this question"
          />
        </BugWrapper>
        <FAQQuestion
          question="How can I track my progress?"
          answer="You can track your progress by clicking on the 'Progress' tab on the left side of the screen."
        />
      </div>
      <div className="bg-[#E4E4E4] mt-24 py-14 px-5 w-full flex flex-col items-center justify-center">
        <div className="uppercase font-bangers text-2xl">
          Simplify your life.
        </div>
        <div className="mt-5 text-center text-sm md:text-lg font-normal md:max-w-[32rem]">
          Never worry again about forgetting a task or goal. Task Wizard is
          incredibly easy to use and has AI generation to make
          <BugWrapper
            className="inline-block"
            id="ign223oqintqgo3i"
            reason="Unnecessary extra spacing"
          >
            <span className="ml-3" />
          </BugWrapper>
          managing your projects easier
        </div>

        <Link to="/play/signup">
          <Button className="bg-white border-2 border-black rounded-md font-medium py-2 px-8 md:px-12 mt-5 text-sm">
            Get Started
          </Button>
        </Link>
      </div>

      <div className="mt-28 mb-7 px-7 flex flex-row justify-between w-full text-sm">
        <div>
          <div className="font-bold">Task Wizard</div>
          <BugWrapper
            id="43iotn34g"
            reason="The copyright is not the correct year"
          >
            <div className="font-light">Copyright @ 2023</div>
          </BugWrapper>
        </div>
        <BugWrapper id="igo43ngi4o32ed" reason="These links do not work">
          <div className="text-right font-light">
            <div className="underline">Terms of Service</div>
            <div className="underline">Privacy Policy</div>
          </div>
        </BugWrapper>
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
