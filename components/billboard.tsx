import { Billboard as BillboardType } from "@/types";
import React from "react";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${data.imgUrl})` }}
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white text-center [text-shadow:0_4px_14px_rgb(0_0_0_/_60%)]">
          {data.label}
        </span>
      </div>
    </div>
  );
};

export default Billboard;
