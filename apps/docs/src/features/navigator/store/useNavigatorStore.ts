import { create } from "zustand";

interface NavigatorStore {
  isNavigatorVisible: boolean;
  toggleNavigator: () => void;
}

const toggleState = (s: boolean): boolean => (s ? false : true);

export const useNavigatorStore = create<NavigatorStore>((set) => ({
  isNavigatorVisible: false,
  toggleNavigator: () =>
    set((s) => ({ isNavigatorVisible: toggleState(s.isNavigatorVisible) })),
}));
