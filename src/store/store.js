import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user-info")),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export const useProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // addPost:()
}));
