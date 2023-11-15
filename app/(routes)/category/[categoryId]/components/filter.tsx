"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

type Props = {
  data: (Size | Color)[];
  title: string;
  selectedId: string;
};

const Filter = ({ data = [], title, selectedId }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selected = searchParams.get(selectedId);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [selectedId]: id,
    };

    if (current[selectedId] === id) {
      query[selectedId] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.pathname,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold">{title}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => onClick(filter.id)}
            className={cn(
              "rounded-md text-sm text-neutral-950 p-2 bg-white border border-gray-200",
              selected === filter.id && "bg-neutral-950 text-white"
            )}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
