import { BookmarkList } from "@/components/bookmark-list";
import { LoadingSpinner } from "@/components/loading-spinner";
import { getBookmarkItems, getBookmarks } from "@/lib/raindrop";
import { BookmarkCollection } from "@/lib/types";
import { ScrollArea } from "@radix-ui/react-scroll-area";

import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const bookmarks: BookmarkCollection[] = await getBookmarks();
  return bookmarks.map((bookmark: BookmarkCollection) => ({
    slug: bookmark.slug,
  }));
}

async function fetchData(slug: string) {
  const bookmarks: BookmarkCollection[] = await getBookmarks();

  const currentBookmark = bookmarks.find((bookmark) => bookmark.slug === slug);
  if (!currentBookmark) notFound();

  const bookmarkItems = await getBookmarkItems(currentBookmark._id);
  return { bookmarkItems, currentBookmark };
}

type CollectionPageProps = {
  readonly params: Promise<{ slug: string }>;
};

export default async function CollectionPage(props: CollectionPageProps) {
  const params = await props.params;
  const { slug } = params;

  const { bookmarkItems, currentBookmark } = await fetchData(slug);

  return (
    <ScrollArea className="bg-grid h-full">
      <div className="flex pt-20 pb-16 w-full h-full px-8">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-[24px] font-bold mb-6">
            {currentBookmark.title}
          </h1>

          <Suspense fallback={<LoadingSpinner />}>
            <BookmarkList
              id={currentBookmark._id}
              initialData={bookmarkItems}
            />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const bookmarks = await getBookmarks();
  const currentBookmark = bookmarks.find((bookmark) => bookmark.slug === slug);

  if (!currentBookmark) return null;

  const title = `${currentBookmark.title} | Bookmarks`;
  const siteUrl = `/bookmarks/${slug}`;

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
