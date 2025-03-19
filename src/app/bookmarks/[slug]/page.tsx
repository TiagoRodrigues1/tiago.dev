import { getBookmarks } from "@/lib/raindrop";
import { BookmarkCollection } from "@/lib/types";

export async function generateStaticParams() {
  const bookmarks: BookmarkCollection[] = await getBookmarks();
  return bookmarks.map((bookmark: BookmarkCollection) => ({
    slug: bookmark.slug,
  }));
}

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CollectionPage(props: CollectionPageProps) {
  const params = await props.params;
  const { slug } = params;

  return <div className="text-red"> {slug}</div>;
}
