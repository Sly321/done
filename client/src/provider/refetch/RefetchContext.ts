import { createContext } from 'react'
import { Refetch } from '../../components/queryWrapper'

export interface RefetchContext {
    refetch(): void
    addRefetch(id: string, refetch: Refetch<any, any>): void
}

const defaultRefetchContent: RefetchContext = {
    refetch(): void {
        throw new Error('Use RefetchProvider or gtfo')
    },
    addRefetch(): void {
        throw new Error('Use RefetchProvider or gtfo')
    },
}

export const Context = createContext(defaultRefetchContent)
