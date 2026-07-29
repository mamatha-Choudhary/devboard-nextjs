import SidebarBrand from "./SidebarBrand";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-56 flex-col justify-between border-r border-border bg-card p-3 select-none">
      <div>
        <SidebarBrand />
        <SidebarNav />
      </div>
      <SidebarFooter />
    </aside>
  );
}
