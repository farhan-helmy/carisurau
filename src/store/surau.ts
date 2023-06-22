import { create } from "zustand";

interface SurauState {
  imageUploadLoading: boolean;
  setImageUploadLoading: (value: boolean) => void;
}

const useSurauStore = create<SurauState>((set) => ({
  imageUploadLoading: false,
  setImageUploadLoading: (value: boolean) => set({ imageUploadLoading: value }),
}));

export default useSurauStore;