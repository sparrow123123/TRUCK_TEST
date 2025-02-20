import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider,Routes,BrowserRouter,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function App() {
  
  
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/"  element={<Login></Login>}></Route>
  <Route path="/signup"  element={<Signup></Signup>}></Route>

 </Routes>
 </BrowserRouter>
  )
}

export default App
