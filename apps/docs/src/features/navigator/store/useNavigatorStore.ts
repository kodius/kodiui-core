import { toggleState } from "@/helpers";
import { create } from "zustand";

interface NavigatorStore {
  isNavigatorVisible: boolean;
  toggleNavigator: () => void;
}

export const useNavigatorStore = create<NavigatorStore>((set) => ({
  isNavigatorVisible: false,
  toggleNavigator: () =>
    set((s) => ({ isNavigatorVisible: toggleState(s.isNavigatorVisible) })),
}));
