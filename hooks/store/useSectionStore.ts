"use client";
import { create } from "zustand";

type SectionState = {
  isHeroSectionVisible: boolean;
  isSubHeaderVisible: boolean;
  setHeroSectionVisible: (isVisible: boolean) => void;
  setSubHeaderVisible: (isVisible: boolean) => void;
};

const useSectionStore = create<SectionState>((set) => ({
  isHeroSectionVisible: false,
  isSubHeaderVisible: false,
  setHeroSectionVisible: (isVisible) =>
    set({ isHeroSectionVisible: isVisible }),
  setSubHeaderVisible: (isVisible) => set({ isSubHeaderVisible: isVisible }),
}));

export default useSectionStore;
