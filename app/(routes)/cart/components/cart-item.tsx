"use client";

import React from "react";
import { Product } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import useCart from "@/hooks/use-cart";

type Props = {
  data: Product;
};

const CartItem = ({ data }: Props) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 sm:h-48 w-24 sm:w-48 rounded-md overflow-hidden">
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <Button
            className="p-2 hover:scale-110 bg-white text-gray-600 shadow-md"
            onClick={onRemove}
          >
            <Trash />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
