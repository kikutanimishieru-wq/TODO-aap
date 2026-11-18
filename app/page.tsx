"use client";

import { Header, Footer, Middle, Middle2, Newtask } from "@/component";
import { Task } from "@/types";

import { useState } from "react";

export default () => {
  const [tasks, setTasks] = useState<Task[]>([]);


  const deleteTask = (id: string) => {
    setTasks((current)=> current.filter((task)=> task.id !== id))
  }
  

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setTasks((current) => [newTask, ...current]);
  };

  return (
    <main className="min-h-screen bg-[#f0f5f2] px-4 py-8 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_24px_80px_-24px_#174b4530]">
        <Header />
        <Middle onCreateTask={createTask} />
        <Middle2 />
        <Footer />
        <Newtask tasks={tasks}  onDelete={deleteTask} />
      
      </div>
    </main>
  );
};
