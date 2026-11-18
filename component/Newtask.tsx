import type { Task } from "@/types";
import { Trash } from "lucide-react";

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
};

export const Newtask = ({ tasks, onDelete }: TaskListProps) => {
  const handleDelete = (id:string) => () => {
    onDelete(id);
  };

  return (
    <ul classNa`me="divide-y divide-[#edf1ee] px-3 py-2 sm:px-5">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center gap-3 py-2"
        >
          <button
            type="button"
            className="h-[22px] w-[22px] shrink-0 cursor-pointer rounded-full border border-[#63947b]"
          />

          <p className="min-w-0 flex-1 break-words text-sm text-[#30483c]">
            {task.title}
          </p>

          <button
            type="button"
            onClick={handleDelete(task.id)}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center"
          >
            <Trash size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
};
