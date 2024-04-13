import { TodoWizardNavbarLoggedIn } from "~/components/todo-wizard-navbar";

export default function Component() {
  return (
    <div className="w-full h-full bg-[#E6E6E6] flex flex-col items-center justify-center">
      <TodoWizardNavbarLoggedIn />
      <div className="flex flex-row items-center justify-between w-full mt-16 px-5">
        <div className="text-lg">My Todo List</div>
        <div className="text-sm">2 Todos</div>
      </div>
      <div className="px-5">
        Write down your daily todos. Check them off when they get done. Get
        disciplined.
      </div>
      <div className="mt-10 px-5 w-full">
        <div className="w-full border rounded-sm border-black pl-3 py-3">
          Go to the gym
        </div>
        <div className="w-full border rounded-sm border-black pl-3 py-3 mt-3">
          Buy groceries this weekend
        </div>
        <button className="bg-black rounded-full font-medium text-white py-3 px-4 mt-5">
          Create
        </button>
      </div>

      <div className="mt-32 px-5 w-full">
        Our Inspire ✨ AI-generation feature is coming soon. Set up a call with
        our team so we can learn about your use-case.
      </div>
    </div>
  );
}
