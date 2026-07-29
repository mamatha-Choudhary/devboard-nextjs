import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

type AppShellProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar — fixed on the left, full height, scrollable on overflow.
          Hidden on mobile; visible from tablet breakpoint up. */}
      <div className="fixed inset-y-0 left-0 z-30 hidden h-screen w-56 shrink-0 overflow-y-auto bg-background md:block">
        <Sidebar />
      </div>

      {/* Main content area — offset by sidebar width on tablet and up */}
      <div className="flex flex-1 flex-col md:ml-56">
        {/* Header — sticky at the top so it stays visible while scrolling */}
        <header className="sticky top-0 z-20 bg-background">
          <Header />
        </header>

        {/* Main content — scrollable when content exceeds viewport height */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
