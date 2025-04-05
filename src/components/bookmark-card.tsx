import { Bookmark } from "@/lib/types";
import { Link2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { TWEETS_COLLECTION_ID } from "@/lib/constants";
import { TweetCard } from "./tweets/tweet-card";

type BookmarkCardProps = {
  readonly bookmark: Bookmark;
  readonly order: number;
};

export default function BookmarkCard(props: BookmarkCardProps) {
  const { link, title, excerpt, cover, domain, note, collectionId } =
    props.bookmark;
  const { order } = props;
  
  if (link && collectionId === TWEETS_COLLECTION_ID) {
    const match = /\/status\/(\d+)/.exec(link) ?? [];
    console.log(match);
    const tweetId = match[1];

    return <TweetCard id={tweetId} />;
  }

  return (
    <motion.a
      href={`${link}?ref=tiago.dev`}
      target="_blank"
      rel="noopener noreferrer"
      data-bookmark-order={order}
      className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-2 overflow-hidden rounded-xl bg-sidebar p-4 transition-colors duration-300 hover:bg-[var(--sidebar-accent)]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <span className="aspect-video overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={title}
          width={1200}
          height={630}
          loading={order < 2 ? "eager" : "lazy"}
          data-pin-nopin="true"
          className="animate-reveal h-full w-full object-cover"
        />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="line-clamp-4 text-lg leading-snug">{title}</h2>
        <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
          <Link2Icon size={16} />
          {domain}
        </span>
        <span className="line-clamp-6 text-sm text-white">
          {excerpt || note}
        </span>
      </div>
    </motion.a>
  );
}
