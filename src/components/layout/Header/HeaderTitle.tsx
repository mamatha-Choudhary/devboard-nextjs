type HeaderTitleProps = Readonly<{
  title: string;
  description?: string;
}>;

export default function HeaderTitle({ title, description }: HeaderTitleProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
        {title}
      </h1>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
