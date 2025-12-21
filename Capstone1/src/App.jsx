import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import NavMenu from './components/NavMenu.jsx'
import Drop from './components/Drop.jsx'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ReturnBook from './pages/ReturnBook.jsx'
import Settings from './pages/Settings.jsx'
import AddBook from './pages/AddBook.jsx'

function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar open1={open1} setOpen1={setOpen1} open2={open2} setOpen2={setOpen2}/>
        {open1 && <NavMenu setOpen1={setOpen1}/>}
        {open2 && <Drop setOpen2={setOpen2}/>} 
          
        
        <div className="div">
        <Routes>
          <Route path='' element={<Home/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          
          <Route path='/returnBook' element={<ReturnBook/>}></Route>
          <Route path='/addBook' element={<AddBook/>}></Route>
          
          <Route path='/settings' element={<Settings/>}></Route>

        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
