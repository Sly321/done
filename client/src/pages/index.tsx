import React from 'react'
import { withAuth } from '../provider/auth/AuthConsumer'
import { AuthContext } from '../provider/auth/AuthContext'
import Login from './login'
import Tasks from './tasks'

export interface Props {}

export default withAuth(({ userId }: Props & AuthContext) => {
    if (userId) {
        return <Tasks userId={userId} />
    }
    return <Login />
})
