import { BadgePreview } from "./components/BadgePreview";
import { ButtonPreview } from "./components/ButtonPreview";
import { CardPreview } from "./components/CardPreview";
import { DropdownMenuPreview } from "./components/DropdownMenuPreview";
import { InputPreview } from "./components/InputPreview";
import { PreviewSection } from "./components/PreviewSection";
import { ThemeToggle } from "./components/ThemeToggle";

export default function UIPreviewPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Design System
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            UI Preview
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            A simple showcase of the shared UI primitives used across the application.
          </p>
        </div>
        <ThemeToggle />
      </header>

      <div className="space-y-10">
        <PreviewSection
          title="Buttons"
          description="Primary actions and supporting controls with a consistent SaaS look."
        >
          <ButtonPreview />
        </PreviewSection>

        <PreviewSection
          title="Cards"
          description="Flexible surfaces for content grouping and layout composition."
        >
          <CardPreview />
        </PreviewSection>

        <PreviewSection
          title="Dropdown Menus"
          description="Accessible popover menus for actions, navigation, and settings."
        >
          <DropdownMenuPreview />
        </PreviewSection>

        <PreviewSection
          title="Inputs"
          description="Reusable text and search field examples for forms and filters."
        >
          <InputPreview />
        </PreviewSection>

        <PreviewSection
          title="Badges"
          description="Compact status and metadata indicators for lists and summaries."
        >
          <BadgePreview />
        </PreviewSection>
      </div>
    </main>
  );
}
