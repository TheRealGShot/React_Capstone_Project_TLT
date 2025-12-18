import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="div">
        <Routes>
          <Route path='' element={<Home/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
