import { ListItem } from "@/components/list-item";
import { getBookmarks } from "@/lib/raindrop";
import { BookmarkCollection } from "@/lib/types";
import { sortByProperty } from "@/lib/utils";
import { SideMenuMob } from "@/components/side-menu-mob";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";

async function fetchData() {
  const bookmarks: BookmarkCollection[] = await getBookmarks();
  const sortedBookmakrs = sortByProperty(bookmarks, "title");
  return { bookmarks: sortedBookmakrs };
}

export default async function Bookmarks() {
  const { bookmarks } = await fetchData();

  return (
    <SideMenuMob bookmarks={bookmarks} title="Bookmarks">
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
    </SideMenuMob>
  );
}

export async function generateMetadata() {
  const title = "Bookmarks";
  const siteUrl = "/bookmarks";

  return {
    title,
    openGraph: {
      title,
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}
