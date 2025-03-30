"use client";
import Image from "next/image";
import { memo } from "react";

import { JourneyCardItem } from "@/lib/types";

export const JourneyCard = memo(function JourneyCard(
  cardData: JourneyCardItem
) {
  const { title, description, image} = cardData;
  return (
    <div className="word-break-word flex flex-col">
      <span className="mb-px font-semibold tracking-tight text-[var(--color-white)]">
        {title}
      </span>
      <span className="text-sm text-[var(--color-white)]">{description}</span>
      {image?.url && (
        <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
          <Image
            src={image.url}
            alt={image.title ?? image.description ?? ""}
            width={image.width}
            height={image.height}
            className="animate-reveal w-auto h-auto"
            priority={true}
          />
        </div>
      )}
    </div>
  );
});
