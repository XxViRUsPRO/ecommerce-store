import React from "react";

import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

type Props = {
  data: Product;
};

const Info = ({ data }: Props) => {
  return (
    <div className="text-neutral-950">
      <h3 className="text-4xl font-bold">{data.name}</h3>
      <div className="mt-3 flex justify-between items-end">
        <div className="text-2xl">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4 border-gray-200" />
      <div className="flex flex-col gap-y-3 text-xl">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Size:</h3>
          <p>
            {data.size.name} - {data.size.value}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-neutral-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10">
        <Button className="flex items-center gap-x-2">
          Add to cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
