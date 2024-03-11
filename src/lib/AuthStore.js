import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  auth: false,
  accessToken: '1hdjkashduqwd8',
  logIn: () => set((state) => ({auth: true})),
  logOut: () => set((state) => ({auth: false})),
  updateAccessToken: (updatedToken) => set(() => ({ accessToken: updatedToken })),
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
}))