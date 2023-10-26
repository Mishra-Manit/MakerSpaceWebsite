import { BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react'
import Home from './pages/home/Home'
import Poster from './pages/poster/Poster'
import SingleColor from './pages/singleColor/SingleColor'
import NotFound from './pages/notFound/NotFound'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='singlecolor' element={<SingleColor/>} />
        <Route path='poster' element={<Poster/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App