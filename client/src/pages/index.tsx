import React from 'react'
import { withAuth } from '../provider/auth/AuthConsumer'
import { AuthContext } from '../provider/auth/AuthContext'
import Login from './login'
import Tasks from './tasks'
import { RefetchProvider } from '../provider/refetch/RefetchProvider'

export interface Props {}

export default withAuth(({ userId }: Props & AuthContext) => {
    if (userId) {
        return (
            <RefetchProvider>
                <Tasks userId={userId} />
            </RefetchProvider>
        )
    }
    return <Login />
})
