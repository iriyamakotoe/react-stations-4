import * as React from 'react'
import {hydrateRoot} from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')
hydrateRoot(container, <App />)
