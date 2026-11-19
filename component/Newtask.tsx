import type { Task } from "@/types";
import { Trash } from "lucide-react";
import {Check} from "lucide-react"
type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export const Newtask = ({ tasks, onDelete, onToggle }: TaskListProps) => {
  const handletoggle = (id: string) => () => {
    onToggle(id);
  };

  const handleDelete = (id: string) => () => {
    onDelete(id);
  };

  return (
    <ul className="divide-y divide-[#edf1ee] px-3 py-2 sm:px-5">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-3 py-2">
          <button
            type="button" onClick={handletoggle(task.id)}
            className="h-[22px] w-[22px] shrink-0 cursor-pointer rounded-full
            border border-[#63947b]"
          > <span className="  text-[#3a8366] flex items-center justify-center">
              {task.completed && <Check className="h-3.5 w-3.5" strokeWidth={2.5} />}
              
          </span>

          </button>

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
