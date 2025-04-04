import "server-only";
import { config } from "@/lib/config";
import { BookmarkCollection, BookmarkObject, Bookmarks } from "@/lib/types";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${config.raindrop.accessToken}`,
    "Content-Type": "application/json",
  },
  next: {
    revalidate: 60 * 60 * 24 * 2, // 2 days
  },
  signal: AbortSignal.timeout(200000), // 10 second timeout to prevent hanging requests
};

const RAINDROP_API_URL = "https://api.raindrop.io/rest/v1";

export const getBookmarkItems = async (
  id: number,
  pageIndex: number = 0
): Promise<Bookmarks> => {
  if (!id) throw new Error("Bookmark ID is required!");

  try {
    const response: Response = await fetch(
      `${RAINDROP_API_URL}/raindrops/${id}?` +
        new URLSearchParams({
          page: pageIndex.toString(),
          perpage: "50",
        }),
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Bookmarks = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    throw error;
  }
};

export const getBookmarks = async (): Promise<BookmarkCollection[]> => {
  try {
    const response: Response = await fetch(
      `${RAINDROP_API_URL}/collections`,
      options
    );

    if (!response.ok)
      throw new Error(`HTTP error! status:  ${response.status}`);

    const data: BookmarkObject = await response.json();

    return data.items;
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    throw error;
  }
};
