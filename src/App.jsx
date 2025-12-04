import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Basket from './pages/basket/Basket'

import AppContext from './conntext'

const App = () => {
  const [userStar, setStar] = useState([])
	return (
		<AppContext.Provider value={{userStar, setStar}}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/basket' element={<Basket />} />
			</Routes>
		</AppContext.Provider>
	)
}

export default App
