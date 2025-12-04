import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  setToken: (token:string | null) => void;
}


export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,

      get isAuthenticated() {
        return !!this.token;
      },

      login: (token, user) =>
        set(() => ({
          token,
          user,
        })),

      logout: () =>
        set(() => ({
          token: null,
          user: null,
        })),

      setToken: (token) =>
        set((state) => ({
          token,
          user: token ? state.user : null,
        })),
    }),
    {
      name: "auth", // localStorage key
    }
  )
);