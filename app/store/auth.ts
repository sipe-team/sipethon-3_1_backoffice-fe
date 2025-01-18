import { create } from 'zustand';
import { User } from '~/types/user';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  // TODO - 세션 임의 정의한 내용 수정
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any | null;
  isAuthenticated: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: (user: User, session: any) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      session: null,
      isAuthenticated: false,

      login: (user, session) =>
        set({
          user,
          session: {
            session,
          },
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          session: null,
          isAuthenticated: false,
        }),

      updateUser: (updatedUser) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedUser } : null,
        })),
    }),
    {
      name: 'auth',
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
