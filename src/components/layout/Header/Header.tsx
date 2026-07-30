import HeaderTitle from "./HeaderTitle";
import HeaderActions from "./HeaderActions";

type HeaderProps = Readonly<{
  title?: string;
  description?: string;
}>;

export default function Header({
  title = "DevBoard",
  description = "Welcome back!",
}: HeaderProps) {
  return (
    <div className="flex h-16 w-full items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur-xs">
      <HeaderTitle title={title} description={description} />
      <HeaderActions />
    </div>
  );
}
