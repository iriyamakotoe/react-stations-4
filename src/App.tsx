import React from 'react'
import {StrictMode} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {List} from './pages/List'
import './App.scss'

function App() {
	return (
		<>
			<StrictMode>
				<BrowserRouter basename={import.meta.env.DEV ? '/' : 'react-stations-4'}>
					<Routes>
						<Route path={`/`} element={<Home />} />
						<Route path={`/list`} element={<List />} />
					</Routes>
				</BrowserRouter>
			</StrictMode>
			,
		</>
	)
}

export default App
