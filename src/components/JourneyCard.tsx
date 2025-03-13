import Image from "next/image";
import { memo } from "react";

export type ImageType = {
  width: number;
  height: number;
  url: string;
  title?: string;
  description?: string;
};

type JourneyCard = {
  title: string;
  description: string;
  image?: ImageType;
  index: number;
};

export const JourneyCard = memo(function JourneyCard(cardData: JourneyCard) {
  const { title, description, image, index } = cardData;

  return (
    <div className="word-break-word flex flex-col">
      <span className="mb-px font-semibold tracking-tight">{title}</span>
      <span className="text-sm">{description}</span>
      {image && image.url && (
        <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
          <Image
            src={image.url}
            alt={image.title || image.description || ""}
            width={image.width}
            height={image.height}
            className="animate-reveal"
            loading={index < 1 ? "eager" : "lazy"}
          />
        </div>
      )}
    </div>
  );
});
