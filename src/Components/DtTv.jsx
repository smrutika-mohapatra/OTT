import React from 'react'

import Home from './Home/Home'
import Register from './Register/Register'
import { Route, Routes } from 'react-router-dom'
import Movie from './Movies/Movies'
import Live from './Live/Live'
import Channel from './Channels/Channel'
import Shows from './Shows/Shows'
const DtTv = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/live' element={<Live/>}/>
            <Route path='/channel' element={<Channel/>}/>
            <Route path='/show' element={<Shows/>}/>
        </Routes>
    </div>
  )
}

export default DtTv