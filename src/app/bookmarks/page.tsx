import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getBookmarks } from "@/lib/raindrop";
import { BookmarkCollection } from "@/lib/types";
import { sortByProperty } from "@/lib/utils";

import { Suspense } from "react";
import { Send } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Bookmarks",
};

async function fetchData() {
  const bookmarks: BookmarkCollection[] = await getBookmarks();
  const sortedBookmakrs = sortByProperty(bookmarks, "title");
  return { bookmarks: sortedBookmakrs };
}

export default async function Bookmarks() {
  const { bookmarks } = await fetchData();

  return (
    <div>asdn</div> );
}
