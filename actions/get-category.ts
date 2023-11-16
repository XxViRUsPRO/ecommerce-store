import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/categories`;

const getCategory = async (categoryId: string): Promise<Category> => {
  const res = await fetch(`${URL}/${categoryId}`);
  return res.json();
};

export default getCategory;
