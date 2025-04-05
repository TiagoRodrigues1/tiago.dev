import { Tweet, TweetSkeleton } from "react-tweet";

import { cn } from "@/lib/utils";

import styles from "@/components/tweets/tweet-card.module.css";

type TweetProps = {
  id: string;
  className?: string;
};

export const TweetCard = (props: TweetProps) => {
  const { id, className } = props;

  if (!id) return null;

  return (
    <div
      className={cn(
        "thumbnail-shadow relative w-full min-w-full overflow-hidden rounded-xl dark",
        className, styles.tweetCard
      )} datatype="dark"
    >
      <Tweet
        id={id}
        fallback={
          <div>
            <TweetSkeleton />
          </div>
        }
      />
    </div>
  );
};
