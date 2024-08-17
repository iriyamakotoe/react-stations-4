import * as React from 'react'
import {hydrateRoot} from 'react-dom/client'
import CountUp from './CountUp'

const container = document.getElementById('root')
hydrateRoot(container, <CountUp />)
