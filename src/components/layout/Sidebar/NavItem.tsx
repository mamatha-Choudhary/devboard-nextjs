import Link from "next/link";

type NavItemProps = Readonly<{
  href: string;
  title: string;
  isActive: boolean;
}>;

export default function NavItem({ href, title, isActive }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "bg-neutral-900 text-white"
            : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
        }`}
      >
        {title}
      </Link>
    </li>
  );
}
