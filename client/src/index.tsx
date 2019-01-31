import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './pages'

import * as serviceWorker from './serviceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSquare, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { AuthProvider } from './provider/auth/AuthProvider'

library.add(faCheckSquare, faSquare, faExclamation)

ReactDOM.render(
    <AuthProvider>
        <Root />
    </AuthProvider>,
    document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
