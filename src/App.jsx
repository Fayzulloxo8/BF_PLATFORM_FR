import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import Nav from './components/nav/nav'



const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

const AppContext = () => {
  return (
    <>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </>
  )
}
export default AppContext