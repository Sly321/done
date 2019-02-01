import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface Props {
    important: boolean
    id: string
}

export default function Important({ important, id }: Props) {
    return (
        <div className="task-important-wrapper">
            <input id={id} className="task-important" type="checkbox" defaultChecked={important} tabIndex={-1} />
            <label htmlFor={id}>{important ? <FontAwesomeIcon icon="exclamation" /> : ''}</label>
        </div>
    )
}
