import { BookmarkCollection } from "@/lib/types";
import { getBookmarks } from "@/lib/raindrop";
import { sortByProperty } from "@/lib/utils";
import { Suspense } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListItem } from "@/components/list-item";
import { LoadingSpinner } from "@/components/loading-spinner";

async function fetchData() {
  const bookmarks: BookmarkCollection[] = await getBookmarks();
  const sortedBookmakrs = sortByProperty(bookmarks, "title");
  return { bookmarks: sortedBookmakrs };
}

export default async function BookmarksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { bookmarks } = await fetchData();

  return (
    <div className="flex flex-1 min-h-screen">
      <div className="flex w-full">
        <ScrollArea className="scrollable-area relative w-full flex-col hidden lg:flex lg:flex-col lg:border-r lg:w-80 xl:w-96">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-medium leading-none bold">Tags</h4>
              <Button variant="secondary" size={"sm"}>
                <Send /> Submit
              </Button>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
              <div className="flex flex-col gap-1 text-sm">
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
          </div>
        </ScrollArea>
        <div className="lg:bg-grid flex-1">{children}</div>
      </div>
    </div>
  );
}
