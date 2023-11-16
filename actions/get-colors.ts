import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getColors;
