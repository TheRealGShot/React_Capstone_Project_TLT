import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

import { ThemeContext } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import NavMenu from './components/NavMenu.jsx'
import Drop from './components/Drop.jsx'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ReturnBook from './pages/ReturnBook.jsx'
import Settings from './pages/Settings.jsx'
import AddBook from './pages/AddBook.jsx'
import Browse from './pages/Browse.jsx'
import Preview from './pages/Preview.jsx'
import Borrow from './pages/Borrow.jsx'

function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <>
      <BrowserRouter>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <Navbar open1={open1} setOpen1={setOpen1} open2={open2} setOpen2={setOpen2} />
          {open1 && <NavMenu setOpen1={setOpen1} />}
          {open2 && <Drop setOpen2={setOpen2} setOpen1={setOpen1} />}
          <div className="div">
            <Routes>
              <Route path='' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/returnBook' element={<ReturnBook />}></Route>
              <Route path='/addBook' element={<AddBook />}></Route>
              <Route path='/browse' element={<Browse />}></Route>
              <Route path='/preview/:id' element={<Preview />}></Route>
              <Route path='/borrow/:id' element={<Borrow />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
