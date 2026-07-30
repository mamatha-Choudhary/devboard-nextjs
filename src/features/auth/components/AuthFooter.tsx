import Link from "next/link";

interface AuthFooterProps {
  promptText: string;
  linkText: string;
  linkHref: string;
}

export const AuthFooter = ({ promptText, linkText, linkHref }: AuthFooterProps) => {
  return (
    <div className="mt-6 text-center text-xs text-muted-foreground">
      <span>{promptText} </span>
      <Link
        href={linkHref}
        className="font-semibold text-primary underline-offset-4 hover:underline transition-colors"
      >
        {linkText}
      </Link>
    </div>
  );
};
