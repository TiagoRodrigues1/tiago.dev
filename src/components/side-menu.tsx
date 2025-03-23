"use client";

import { useMemo, ReactNode } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { SubmitBookmarkDialog } from "./submit-bookmark/dialog";
import { BookmarkCollection } from "@/lib/types";
import { usePathname } from "next/navigation";

export type SideMenuProps = {
  bookmarks: BookmarkCollection[];
  children: ReactNode;
  title: string;
};

export function SideMenu(props: SideMenuProps) {
  const pathname = usePathname();
  const isBookmarksPath = pathname.startsWith("/bookmarks");
  const { bookmarks, title, children } = props;

  const currentBookmark = bookmarks.find(
    (bookmark) => `/bookmarks/${bookmark.slug}` === pathname
  );

  const memoized = useMemo(
    () => (
      <div className="flex min-h-screen">
        <div className="flex w-full">
          <ScrollArea className="scrollable-area relative w-full flex-col hidden lg:flex lg:flex-col lg:border-r lg:w-80 xl:w-96">
            <div className="px-5 py-3 border-b border-[">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium leading-none bold">
                  {title}
                </h4>
                {isBookmarksPath && (
                  <SubmitBookmarkDialog
                    bookmarks={bookmarks}
                    currentBookmark={currentBookmark}
                  />
                )}
              </div>
            </div>
            <div className="flex-1 p-3">{children}</div>
          </ScrollArea>
        </div>
      </div>
    ),
    [title, bookmarks, currentBookmark, children, isBookmarksPath]
  );

  return memoized;
}
