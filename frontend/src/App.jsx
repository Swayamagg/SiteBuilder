import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import useGetCurrentUser from './hooks/useGetCurrentUser.jsx'
export const serverUrl="http://localhost:8000"


const App = () => {
  useGetCurrentUser()
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App