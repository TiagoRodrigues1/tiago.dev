"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

import { ArrowDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getBookmarkItemsByPageIndex } from "@/app/actions";
import { Bookmarks, Bookmark } from "@/lib/types";
import { cn } from "@/lib/utils";
import BookmarkCard from "./bookmark-card";

type BookmarkListProps = {
  initialData: Bookmarks;
  id: number;
};

export const BookmarkList = (props: BookmarkListProps) => {
  const { initialData, id } = props;
  console.log(initialData);

  const [data, setData] = useState(
    initialData?.result ? initialData?.items : []
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isReachingEnd = data.length >= (initialData?.count ?? 0);

  const loadMore = () => {
    if (!isReachingEnd && !isLoading)
      setPageIndex((prevPageIndex) => prevPageIndex + 1);
  };

  const fetchInfiniteData = useCallback(async () => {
    setIsLoading(true);
    const newData = await getBookmarkItemsByPageIndex(id, pageIndex);

    if (newData.result) setData((prevData) => [...prevData, ...newData.items]);

    setIsLoading(false);
  }, [id, pageIndex]);

  useEffect(() => {
    if (pageIndex > 0) fetchInfiniteData();
  }, [pageIndex, fetchInfiniteData]);

  const memoizedBookmarks = useMemo(
    () => {
      return data.map((bookmark: Bookmark, bookmarkIndex: number) => (
        <div key={`bookmark${bookmarkIndex}`} className={cn("grid gap-4")}>
          <BookmarkCard
            key={bookmark._id}
            bookmark={bookmark}
            order={bookmarkIndex}
          />
        </div>
      ));
    },
    [data] /* add tweets*/
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {memoizedBookmarks}
      </div>

      {data.length > 0 ? (
        <div className="mt-8 flex min-h-16 items-center justify-center text-sm lg:mt-12">
          {!isReachingEnd ? (
            <>
              {isLoading ? (
                <div
                  className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent text-black"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only text-[var(--color-white)]">
                    Loading...
                  </span>
                </div>
              ) : (
                <Button
                  variant="outline"
                  onClick={loadMore}
                  disabled={isLoading}
                  className="w-full justify-center bg-white"
                >
                  Load More
                  <ArrowDownIcon size={16} />
                </Button>
              )}
            </>
          ) : (
            <span className="text-[var(--color-white)]">
              That&apos;s all for now.
            </span>
          )}
        </div>
      ) : (
        <div className="mt-8 flex min-h-16 flex-clo items-center justify-center lg:mt-12 text-[var(--color-white)]">
          <span>No bookmarks found.</span>
        </div>
      )}
    </div>
  );
};
