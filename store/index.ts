import { create } from 'zustand'

interface User {
    id?: string,
    name: string,
    email: string,
    createdAt?: Date,
    role?: string,
    active: boolean
}

interface State {
    searchUserInput: string
}

type Action = {
    setsearchUserInput: (item: string) => void
}

export const useStore = create<State & Action>()(
    (set) => ({
        searchUserInput: "",
        setsearchUserInput: (item) => set((state) => ({
            searchUserInput: item
        }))
    }))