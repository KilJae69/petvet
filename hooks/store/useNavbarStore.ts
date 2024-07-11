import { create } from "zustand";

// Define the state interface
type NavbarState = {
  isNavbarOpen: boolean;
};

// Define the actions interface
type NavbarActions = {
  toggleNavbar: () => void;
};

// Create the store with state and actions typed
const useNavbarStore = create<NavbarState & NavbarActions>((set) => ({
  isNavbarOpen: false,
  toggleNavbar: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
}));

export default useNavbarStore;