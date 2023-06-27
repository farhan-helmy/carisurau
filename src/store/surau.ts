import { create } from "zustand";

interface SurauState {
  imageUploadLoading: boolean;
  state: string;
  district: string;
  filterType: string;
  setFilterType: (value: string) => void;
  setState: (value: string) => void;
  setDistrict: (value: string) => void;
  setImageUploadLoading: (value: boolean) => void;
}

const useSurauStore = create<SurauState>((set) => ({
  imageUploadLoading: false,
  setImageUploadLoading: (value: boolean) => set({ imageUploadLoading: value }),
  state: "",
  district: "",
  filterType: "",
  setFilterType: (value: string) => set({ filterType: value }),
  setState: (value: string) => set({ state: value }),
  setDistrict: (value: string) => set({ district: value }),
}));

export default useSurauStore;