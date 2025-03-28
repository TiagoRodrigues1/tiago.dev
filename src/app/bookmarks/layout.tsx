import { BookmarkCollection } from "@/lib/types";
import { getBookmarks } from "@/lib/raindrop";
import { sortByProperty } from "@/lib/utils";
import { LoadingSpinner } from "@/components/loading-spinner";
import { SideMenu } from "@/components/side-menu";
import { Suspense } from "react";
import { ListItem } from "@/components/list-item";

async function fetchData() {
  const bookmarks: BookmarkCollection[] = await getBookmarks();
  const sortedBookmakrs = sortByProperty(bookmarks, "title");
  return { bookmarks: sortedBookmakrs };
}

export default async function BookmarksLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const { bookmarks } = await fetchData();

  return (
    <div className="flex w-full">
      <SideMenu bookmarks={bookmarks} title="Bookmarks">
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-2 text-sm">
            {bookmarks?.map((bookmark: BookmarkCollection) => {
              return (
                <ListItem
                  title={bookmark.title}
                  description={`${bookmark.count} bookmarks`}
                  key={bookmark._id}
                  path={`/bookmarks/${bookmark.slug}`}
                />
              );
            })}
          </div>
        </Suspense>
      </SideMenu>
      <div className="lg:bg-grid flex-1">{children}</div>
    </div>
  );
}
