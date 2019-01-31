import React, { ReactNode } from 'react'

export interface Props {
    children: ReactNode
}

export default function Subject({ children }: Props) {
    return <div className="task-subject">{children}</div>
}
