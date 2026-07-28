import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <aside className="w-56 border-r border-neutral-200 p-4">
      <h2 className="mb-4 text-lg font-semibold">DevBoard</h2>
      <Navigation />
    </aside>
  );
}
