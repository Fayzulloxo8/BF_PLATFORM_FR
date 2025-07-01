import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import Nav from './components/nav/nav'
import FloorAd from './components/floorAd/floorAd';
import FullScreenAd1 from './components/fullScreenAd1/fullScreenAd1';



const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <FloorAd />
      <FullScreenAd1 />
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