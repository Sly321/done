import React, { ReactNode } from 'react'
import { Context, RefetchContext } from './RefetchContext'
import { Refetch } from '../../components/queryWrapper'

export interface RefetchProviderProps {
    children: ReactNode
}

export function RefetchProvider({ children }: RefetchProviderProps) {
    const refetchStore: { [key: string]: Refetch<any, any> } = {}

    const value: RefetchContext = {
        addRefetch: (id, refetch) => {
            if (!refetchStore[id]) {
                refetchStore[id] = refetch
            }
        },
        refetch: () => {
            Object.keys(refetchStore).forEach(key => refetchStore[key]())
        },
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}
