import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import NavMenu from './components/NavMenu.jsx'
import Drop from './components/Drop.jsx'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'

function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar open1={open1} setOpen1={setOpen1} open2={open2} setOpen2={setOpen2}/>
        {open1 && <NavMenu/>}
        {open2 && <Drop/>}
          
        
        <div className="div">
        <Routes>
          <Route path='' element={<Home/>}></Route>

          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
          
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
