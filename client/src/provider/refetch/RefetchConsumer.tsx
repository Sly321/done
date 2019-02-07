import * as React from 'react'
import { RefetchContext, Context } from './RefetchContext'

export const WithRefetch = Context.Consumer

export function withRefetch<P>(Component: React.ComponentType<P & RefetchContext>): React.ComponentType<P> {
    return props => <WithRefetch>{context => <Component {...context} {...props} />}</WithRefetch>
}
