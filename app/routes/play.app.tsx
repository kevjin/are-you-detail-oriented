import { Todo } from "~/components/todo";
import { TodoWizardNavbarLoggedIn } from "~/components/todo-wizard-navbar";
import { Button } from "~/components/ui/button";

export default function Component() {
  return (
    <div className="w-full h-full bg-[#E6E6E6] flex flex-col items-center justify-start">
      <TodoWizardNavbarLoggedIn />
      <div className="flex flex-row items-center justify-between w-full mt-10 px-5">
        <div className="text-xl font-bold">My Todo List</div>
        <div className="text-base">2 Todos</div>
      </div>
      <div className="px-5 text-sm font-light">
        Write down your daily todos. Check them off when they get done. Get
        disciplined.
      </div>
      <div className="mt-10 px-5 w-full">
        <Todo
          title="Welcome, this is your todo list!"
          className="text-sm py-2"
        />
        <Todo
          title="You can re-arrange todos by dragging"
          className="mt-1 text-sm py-2"
        />
        <Todo
          title="You can re-arrange todos by dragging"
          className="mt-1 text-sm py-2"
          completed
        />
        <Button className="w-full bg-black rounded-full font-medium text-white py-3 px-4 mt-3 text-base">
          Create
        </Button>
      </div>
      <div className="mt-14 px-5 w-full text-sm font-light leading-4">
        Our <span className="font-semibold">Inspire ✨ AI-generation</span>{" "}
        feature is coming soon. Set up a call with our team so we can learn
        about your use-case.
      </div>
    </div>
  );
}
