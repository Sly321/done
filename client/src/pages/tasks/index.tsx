import React from 'react'

export interface Props {
    userId: string
}

export default function Tasks({ userId }: Props) {
    return <div>{userId}</div>
}
