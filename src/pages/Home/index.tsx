import { Todo } from "./Todo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12">
      <Todo />
    </main>
  );
}
