import { Filter } from "@/types";
import { create } from "zustand";

interface CatiegoriesStore {
  categories: Filter[];
  setCategories: (categories: Filter[]) => void;
}

export const useCategoriesStore = create<CatiegoriesStore>((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
}));
