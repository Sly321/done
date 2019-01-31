import { createContext } from 'react'

export interface AuthContext {
    userId: string
}

const defaultAuthContent: AuthContext = {
    get userId(): string {
        throw new Error('Use AuthProvider or gtfo')
    },
}

export const Context = createContext(defaultAuthContent)
