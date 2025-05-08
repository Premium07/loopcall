import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("loopcall-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("loopcall-theme", theme);
    set({ theme });
  },
}));
