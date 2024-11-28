import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import styles from './Login.module.css'
import CriarConta from './CriarConta'

const Login = () => {
  return (
    <div className={styles.bgLogin}>
    <section className={`${styles.container} container`}>
      <div className={styles.forms}>
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='criarConta' element={<CriarConta/>}/>
        </Routes>
        </div>
    </section>
    </div>
  )
}

export default Login
