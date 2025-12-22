import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

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
  const [theme, setTheme] = useState('light');

  function getUserKey() {
    try {
      const cu = JSON.parse(localStorage.getItem('currentUser')) || null;
      return cu && cu.email ? cu.email : 'guest';
    } catch (e) { return 'guest'; }
  }

  useEffect(() => {
    function applyTheme(t) {
      setTheme(t);
      try { document.documentElement.setAttribute('data-theme', t); } catch (e) {}
    }

    function loadTheme() {
      const userKey = getUserKey();
      const prefs = JSON.parse(localStorage.getItem('themePreferences') || '{}');
      const t = prefs[userKey] || 'light';
      applyTheme(t);
    }

    loadTheme();

    // listen for auth changes (login/logout)
    const onAuth = () => loadTheme();
    window.addEventListener('authChange', onAuth);
    return () => window.removeEventListener('authChange', onAuth);
  }, []);

  function toggleTheme() {
    const userKey = getUserKey();
    const prefs = JSON.parse(localStorage.getItem('themePreferences') || '{}');
    const next = theme === 'dark' ? 'light' : 'dark';
    prefs[userKey] = next;
    localStorage.setItem('themePreferences', JSON.stringify(prefs));
    setTheme(next);
    try { document.documentElement.setAttribute('data-theme', next); } catch (e) {}
  }

  return (
    <>
      <BrowserRouter>
        <Navbar open1={open1} setOpen1={setOpen1} open2={open2} setOpen2={setOpen2} theme={theme} />
        {open1 && <NavMenu setOpen1={setOpen1} theme={theme} />} 
        {open2 && <Drop setOpen2={setOpen2} setOpen1={setOpen1} theme={theme}/>} 
          
        
        <div className="div">
        <Routes>
          <Route path='' element={<Home theme={theme} />}></Route>

          <Route path='/login' element={<Login theme={theme} />}></Route>
          <Route path='/signup' element={<SignUp theme={theme} />}></Route>
          
          <Route path='/returnBook' element={<ReturnBook theme={theme} />}></Route>
          <Route path='/addBook' element={<AddBook theme={theme} />}></Route>
          
          <Route path='/browse' element={<Browse theme={theme} />}></Route>
          <Route path='/preview/:id' element={<Preview theme={theme} />}></Route>
          <Route path='/borrow/:id' element={<Borrow theme={theme} />}></Route>

          <Route path='/settings' element={<Settings theme={theme} toggleTheme={toggleTheme} />}></Route>

        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
