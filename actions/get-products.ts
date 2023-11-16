import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      ...query,
    },
  });

  const res = await fetch(url);
  return res.json();
};

export default getProducts;
