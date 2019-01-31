import React, { ReactNode } from 'react'
import { Context, AuthContext } from './AuthContext'

export interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    let userId = ''
    const split = location.search.split('=')

    if (split.length === 2) {
        userId = split[1]
    }

    const value: AuthContext = {
        userId,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}
