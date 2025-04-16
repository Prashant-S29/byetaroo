import { create } from 'zustand';

interface ExpertiseState {
  activeExpertiseCard: number;
  setExpertise: (index: number) => void;
  showCursor: boolean;
  setShowCursor: (show: boolean) => void;
}

export const useExpertiseStore = create<ExpertiseState>((set) => ({
  activeExpertiseCard: 0,
  setExpertise: (index: number) => set({ activeExpertiseCard: index }),
  showCursor: false,
  setShowCursor: (show: boolean) => set({ showCursor: show }),
}));
