import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useTasks } from "../../hooks/useTasks";
import { toast } from "@/hooks/use-toast";

export function Todo() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask("");
    } else {
      toast({
        title: "Please enter the task",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 sm:px-20 bg-white rounded-lg shadow-xl sm:min-w-[600px]">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="flex mb-4 w-full">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-grow mr-2"
        />
        <Button type="submit">Add Task</Button>
      </form>
      <ul className="space-y-2">
        {tasks.length === 0 && (
          <li className="text-center mt-10 text-gray-800">No tasks left</li>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 bg-gray-100 rounded"
          >
            <div className="flex items-center">
              <Checkbox
                checked={task.completed}
                onCheckedChange={(checked) => toggleTask(task.id, !!checked)}
                className="mr-2"
              />
              <span
                className={task.completed ? "line-through text-gray-500" : ""}
              >
                {task.description}
              </span>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
