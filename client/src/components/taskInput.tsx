import React, { KeyboardEvent, createRef, useEffect, useState, useRef } from 'react'
import Important from './important'
import clsx from 'clsx'

import './scss/taskInput.scss'

export interface Props {
    action(arg: { subject: string; ownerId: string; important: boolean }): void
    userId: string
}

const inputKeyArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

export default function TaskInput({ action, userId }: Props) {
    const ref = useRef<HTMLInputElement>(null)
    const [important, setImportant] = useState(false)
    const [focus, setFocus] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', event => {
            console.debug(`FOCUS`, ref.current, inputKeyArray.includes(event.key.toLowerCase()))
            if (ref.current && inputKeyArray.includes(event.key.toLowerCase())) {
                console.debug(`FOCUS`)
                if (ref.current !== document.activeElement) {
                    ref.current.focus()
                    setFocus(true)
                    console.debug(`FOCUS`)
                }
            }
        })
    }, [])

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        const { key, target } = event
        if (key === 'Enter') {
            action({ subject: (target as any).value, ownerId: userId, important })
            setImportant(false)
            if (ref.current) {
                ref.current.value = ''
            }
        }

        if (key === 'Escape') {
            ref.current!.blur()
        }

        if (key === 'i' && event.getModifierState('Control')) {
            setImportant(!important)
        }
    }

    return (
        <div className={clsx(`animated faster`, focus ? 'fadeInUp' : 'fadeOutUp')}>
            <div className={clsx(`task-input-wrapper`)}>
                <Important important={important} id={'input-important'} />
                <input
                    ref={ref}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                />
            </div>
            <small className="task-input-caption">
                <code>Ctrl + i</code> for important
            </small>
        </div>
    )
}
