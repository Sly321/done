import React, { KeyboardEvent } from 'react'

export interface Props {
    action(arg: { subject: string; ownerId: string }): void
    userId: string
}

export default function TaskInput({ action, userId }: Props) {
    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        const { key, target } = event
        if (key === 'Enter') {
            action({ subject: (target as any).value, ownerId: userId })
        }
    }

    return <input onKeyDown={handleKeyDown} />
}
