interface UserMenuAvatarProps {
  name: string;
  avatarUrl?: string;
  className?: string;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export default function UserMenuAvatar({
  name,
  avatarUrl,
  className = "h-8 w-8 text-xs",
}: UserMenuAvatarProps) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className={`rounded-full object-cover border border-border ${className}`}
      />
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-xs select-none ${className}`}
    >
      {getInitials(name)}
    </div>
  );
}
