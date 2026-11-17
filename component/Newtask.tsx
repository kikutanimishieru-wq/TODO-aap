import React from 'react'
import { Task } from "@/types";

type TasklistProps = {
  tasks: Task[];
}
export const Newtask = () => {
  return (
    <ul className='divide-y divide-[#edf1ee] px-3 py-2 sm:px-5'
        {tasks}
    </ul>
  );
}
