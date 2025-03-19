"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ListItemProps = {
  path: string;
  description: string;
  title: string;
  key: number;
};

export const ListItem = (props: ListItemProps) => {
  const { path, title, description, key } = props;
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      key={key}
      href={path}
      className={cn(
        "flex flex-col gap-1 px-4 py-3 text-sm rounded-md transition-colors duration-300 *:transition-colors *:duration-300",
        isActive
          ? "bg-[var(--color-white)]"
          : "hover:bg-[var(--sidebar-accent)]"
      )}
    >
      <span
        className={cn(
          "font-medium text-[var(--color-white)]",
          isActive && "text-black"
        )}
      >
        {title}
      </span>
      <span className={cn(isActive ? "text-slate-500" : "text-slate-300")}>
        {description}
      </span>
    </Link>
  );
};
