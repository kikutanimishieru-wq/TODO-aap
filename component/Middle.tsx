import { Plus, CornerDownLeft } from "lucide-react";
import { ChangeEvent, useState, SubmitEvent } from "react";

type TaskFormProps = {
  onCreateTask: (title: string) => void;
};

export const Middle = ({ onCreateTask }: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateTask(taskTitle)
    setTaskTitle("")
  };

  return (
    <div className="px-6 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-2xl border border-[#dce9e2] bg-[#f4f8f5] p-1"
      >
        <input
          type="text"
          onChange={handleChange}
          value={taskTitle}
          aria-label="New task"
          placeholder="Add a new task..."
          className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-3.5 text-sm text-[#213d35] placeholder:text-[#75867e] focus:bg-white focus:outline-none sm:px-4 sm:text-base"
        />

        <button
          type="submit"
          className="flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#236b53] px-4 text-sm font-semibold text-white hover:bg-[#18523e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23735a]"
        >
          <Plus size={20} aria-hidden="true" />
          Add Task
        </button>
      </form>

      <p className="mt-2 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881]">
        <CornerDownLeft size={12} aria-hidden="true" />
        Enter to add a task
      </p>
    </div>
  );
};
