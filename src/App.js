import React from 'react'
import './App.css'
import styles from './components/Helper/Whatsapp.module.css'
import whats from './Assets/whatsapp.png'
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Login from './components/Login/Login'


const App = () => {
  return (
    <>
     <BrowserRouter>
     <div className={styles.whats}>
        <Link> <img src={whats} alt='Whatsapp'/></Link> 
      </div>
     <Header/> 
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='servico/' element={<Servicos/>} />
      <Route path='sobre/' element={<Sobre/>} />
      <Route path='login/*' element={<Login/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
