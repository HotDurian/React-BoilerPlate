import React from 'react'
import text from './titles.json'

import '../sass/goodbye.scss'
import '../sass/hello.css'

export const hello = (
    <h1 id='title'
        className='hello'>
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
        className='goodbye'>
        {text.goodbye}
    </h1>
)