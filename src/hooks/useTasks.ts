import { Task } from "@/types";
import { useState } from "react";
import { toast } from "./use-toast";

const initialState: Task[] = [
  {
    id: 113,
    description: "Attend meeting at 3 PM",
    completed: false,
  },
  {
    id: 125,
    description: "Write blog post",
    completed: true,
  },
  {
    id: 136,
    description: "Review pull requests",
    completed: false,
  },
  {
    id: 148,
    description: "Read a book for 30 minutes",
    completed: true,
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialState);

  const addTask = (description: string) => {
    setTasks([...tasks, { id: Date.now(), description, completed: false }]);
    toast({
      title: "Task added successfully",
    });
  };

  const toggleTask = (id: number, checked: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    if (checked) {
      toast({
        title: "Task marked as completed",
      });
    } else {
      toast({
        title: "Task marked as not completed",
      });
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast({
      title: "Task deleted successfully",
    });
  };

  return { tasks, addTask, toggleTask, deleteTask };
}
