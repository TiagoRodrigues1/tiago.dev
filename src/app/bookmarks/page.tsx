import { ListItem } from "@/components/list-item";
import { getBookmarks } from "@/lib/raindrop";
import { BookmarkCollection } from "@/lib/types";
import { sortByProperty } from "@/lib/utils";

async function fetchData() {
  const bookmarks: BookmarkCollection[] = await getBookmarks();
  const sortedBookmakrs = sortByProperty(bookmarks, "title");
  return { bookmarks: sortedBookmakrs };
}

export default async function Bookmarks() {
  const { bookmarks } = await fetchData();
  return (
    <div className="flex flex-col gap-2 text-sm mt-12">
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
  );
}
