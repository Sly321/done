import React, { ReactNode, KeyboardEvent } from 'react'

export interface Props {
    children: ReactNode
}

export default function Task({ children }: Props) {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'i') {
        }
    }

    return (
        <div className="task" tabIndex={0} onKeyDown={handleKeyDown}>
            {children}
        </div>
    )
}
