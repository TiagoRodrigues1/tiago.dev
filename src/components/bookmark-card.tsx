import { Bookmark } from "@/lib/types";
import { Link2Icon } from "lucide-react";

type BookmarkCardProps = {
  bookmark: Bookmark;
  order: number;
};

export default function BookmarkCard(props: BookmarkCardProps) {
  const { link, title, excerpt, cover, domain, note } = props.bookmark;
  const { order } = props;

  return (
    <a
      href={`${link}?ref=tiago.dev`}
      target="_blank"
      rel="noopener noreferrer"
      data-bookmark-order={order}
      className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-sidebar p-4 transition-colors duration-300 hover:bg-[var(--sidebar-accent)]"
    >
      <span className="aspect-1200/630 overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={title}
          width={1200}
          height={630}
          loading={order < 2 ? "eager" : "lazy"}
          data-pin-nopin="true"
          className="animate-reveal"
        />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="line-clamp-4 text-lg leading-snug">{title}</h2>
        <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
          <Link2Icon size={16} />
          {domain}
        </span>
        <span className="line-clamp-6 text-sm text-white">{excerpt || note}</span>
      </div>
    </a>
  );
}
