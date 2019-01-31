import React, { ReactNode } from 'react'
import { Context, AuthContext } from './AuthContext'

export interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const value: AuthContext = {
        userId: '', // hier könnte ihre Implementierung Stattfinden
    }
    return <Context.Provider value={value}>{children}</Context.Provider>
}
