import React from "react";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import { ProductImage } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ProductImage;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt=""
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-indigo-500" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
