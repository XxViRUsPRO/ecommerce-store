"use client";

import React from "react";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import { ProductImage } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ProductImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image, i) => (
            <GalleryTab key={i} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image, i) => (
          <Tab.Panel key={i}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
