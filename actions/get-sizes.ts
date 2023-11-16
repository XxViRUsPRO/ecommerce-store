import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getSizes;
