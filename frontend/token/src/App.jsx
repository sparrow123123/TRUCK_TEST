import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider,Routes,BrowserRouter,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'

function App() {
  
  
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/"  element={<Login></Login>}></Route>
  <Route path="/signup"  element={<Signup></Signup>}></Route>
  <Route path='/home' element={<ProtectedRoute><Home></Home></ProtectedRoute>}></Route>
{/* <Route path='/home' element={<Home></Home>}></Route> */}
 </Routes>
 </BrowserRouter>
  )
}

export default App
