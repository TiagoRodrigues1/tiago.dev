import { ScrollArea } from "@/components/ui/scroll-area";
import { getBookmarks } from "@/lib/raindrop";
import { BookmarkCollection } from "@/lib/types";
import { sortByProperty } from "@/lib/utils";

export const metadata = {
  title: "Bookmarks",
};

async function fecthData() {
  const bookmarks = await getBookmarks();
  console.log(bookmarks);

  const sortedBookmakrs = sortByProperty(bookmarks.items, "title");

  return { bookmarks: sortedBookmakrs };
}

export default async function Bookmarks() {
  const { bookmarks } = await fecthData();

  return (
    <ScrollArea className="h-full w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {bookmarks.map((bookmark: BookmarkCollection) => {
          return <p key={bookmark.title}>{bookmark.title}</p>;
        })}
      </div>
    </ScrollArea>
  );
}
