import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

type CartState = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useCart = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (product: Product) => {
        const { items } = get();
        const isItemExist = items.find((item) => item.id === product.id);

        if (isItemExist) {
          return toast("Item already exist in cart");
        }

        set({ items: [...items, product] });
        toast.success("Item added to cart");
      },
      removeItem: (id: string) => {
        const { items } = get();
        set({ items: items.filter((item) => item.id !== id) });
        toast.success("Item removed from cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
