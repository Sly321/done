import * as React from 'react'
import { AuthContext, Context } from './AuthContext'

export const WithAuth = Context.Consumer

export function withAuth<P>(Component: React.ComponentType<P & AuthContext>): React.ComponentType<P> {
    return props => <WithAuth>{context => <Component {...context} {...props} />}</WithAuth>
}
