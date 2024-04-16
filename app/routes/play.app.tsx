import { useState } from "react";
import { BugWrapper } from "~/components/bug-wrapper";
import { Todo } from "~/components/todo";
import { TodoWizardNavbarLoggedIn } from "~/components/todo-wizard-navbar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Component() {
  const [todos, setTodos] = useState([
    { title: "Welcome, this is your todo list!", completed: false },
    {
      title: "You can complete todos by tapping the checkmark",
      completed: false,
    },
    { title: "You can add a new todo by clicking 'Create'", completed: true },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  return (
    <div className="w-full h-full bg-[#E6E6E6] flex flex-col items-center justify-start">
      <TodoWizardNavbarLoggedIn />
      <div className="pb-10 flex flex-col items-center justify-start w-full max-w-[50rem] overflow-y-auto">
        <div className="flex flex-row items-center justify-between w-full mt-10 px-5">
          <div className="text-xl font-bold">My Todo List</div>
          <BugWrapper id="54iohn34iog34" reason="The '3' is a hardcoded value">
            <div className="text-base md:text-lg">3 Todos</div>
          </BugWrapper>
        </div>
        <div className="px-5 text-sm md:text-base font-light text-left w-full">
          Write down your daily todos. Check them off when they get done. Get
          disciplined.
        </div>
        <div className="mt-5 md:mt-10 px-5 w-full">
          {todos.map((todo, i) => (
            <Todo
              key={i}
              title={todo.title}
              completed={todo.completed}
              editable
              className="mt-1 md:mt-2 py-2 md:py-3 text-sm md:text-base"
            />
          ))}

          <div className="flex flex-row w-full mt-1 md:mt-3 justify-between">
            <Input
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              className="w-[calc(75%-0.5rem)] bg-white border-2 border-black rounded-md py-2 h-fit md:py-3 px-4 text-sm md:text-base"
            />
            <Button
              onClick={() => {
                setTodos((prev) => [
                  ...prev,
                  { title: newTodoText, completed: false },
                ]);
                setNewTodoText("");
              }}
              disabled={!newTodoText}
              className="w-1/4 bg-black rounded-md font-medium text-white py-2 md:py-3 px-4 text-sm md:text-base"
            >
              Create
            </Button>
          </div>
        </div>
        <div className="mt-14 px-5 w-full text-sm font-light leading-4">
          Our <span className="font-semibold">Inspire ✨ AI-generation</span>{" "}
          feature is coming soon. Set up a call with our team so we can learn
          about your use-case.
        </div>
      </div>
    </div>
  );
}
