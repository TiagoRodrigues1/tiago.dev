import { LucideIcon } from "lucide-react";

export type SidebarMenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export type Job = {
  company: string;
  startDate: string;
  endDate: string | undefined;
  role: string;
  achievments: string[];
  technologies: string[];
};

export type StackItem = {
  title: string;
  url: string;
  description: string;
};

export type YearLog = {
  year: number;
  logs: Log[];
};

export type Log = {
  title: string;
  description: string;
  image?: ImageType;
};

export type ImageType = {
  width: number;
  height: number;
  url: string;
  title?: string;
  description?: string;
};

export type JourneyCardItem = {
  title: string;
  description: string;
  image?: ImageType;
  index: number;
  priority?: boolean;
};

export type BookmarkCollection = {
  items: [];
  _id: number;
  title: string;
};
