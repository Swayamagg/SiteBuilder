import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
import useGetCurrentUser from './hooks/useGetCurrentUser.jsx'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard.jsx'
import Generate from './pages/Generate.jsx'
export const serverUrl="http://localhost:8000"


const App = () => {
  useGetCurrentUser()
  const {userData}=useSelector(state=>state.user)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={userData ?<Dashboard/> : <Home/>}/>
      <Route path='/generate' element={userData ? <Generate/> :<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App