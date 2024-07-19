import { useState } from 'react'

import './App.css'

import Home from './components/home/home'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './components/About/about'
import ExampleNavbarOne from '../src/components/navigation/navigation'
import FooterTwo from './components/footer/footer'
import CardPage from './components/cardPages/cardPages'
import Men from './components/category/men'
import Woomen from './components/category/woomen'
import Jewelery from './components/category/jewelery'
import Electronics from './components/category/electronics'
import SignIn from './components/SignIn/signIn'
import SignUp from './components/signUp/signUp'
function App() {
  

  return (
    <>
     <Router>
      <ExampleNavbarOne />
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/about' element={<About/>} />
        <Route path ='/card/:name' element={<CardPage/>} />
        <Route path ='/men' element={<Men/>} />
        <Route path ='/woomen' element={<Woomen/>} />
        <Route path ='/jewelery' element={<Jewelery/>} />
        <Route path ='/electronics' element={<Electronics/>} />
        <Route path ='/signin' element={<SignIn/>} />
        <Route path ='/signup' element={<SignUp/>} />
      </Routes>
      <FooterTwo />
    </Router>
    
    </>
  )
}

export default App
