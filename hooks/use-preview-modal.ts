import { create } from "zustand";
import { Product } from "@/types";

type PreviewModalState = {
  product: Product | null;
  isOpen: boolean;
  open: (product: Product) => void;
  close: () => void;
};

const usePreviewModal = create<PreviewModalState>((set) => ({
  product: null,
  isOpen: false,
  open: (product) => set({ product, isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default usePreviewModal;
