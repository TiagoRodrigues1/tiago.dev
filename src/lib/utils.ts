import { clsx, type ClassValue } from "clsx";
import { cache } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortByProperty = cache(
  <T extends Record<K, string>, K extends keyof T>(arr: T[], prop: K) => {
    return [...arr].sort((a, b) => {
      const itemA = a[prop].toUpperCase();
      const itemB = b[prop].toUpperCase();

      return itemA.localeCompare(itemB);
    });
  }
);
