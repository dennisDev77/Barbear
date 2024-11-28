import React from 'react'
import styles from './LoginForm.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Head from '../Helper/Head'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'

const LoginForm = () => {
const email=useForm('email')
const senha=useForm('senha')

    function handleSubmit(event){
        event.preventDefault()
    } 
  return (
    <div className={styles.body}>
      <Head title='Entrar'/>
    <section className={`${styles.wrapper} animeLeft`}>

         <div className={styles.title}>
        <h2 className='title'>Ligin</h2>
         </div>
       
       <form onSubmit={handleSubmit} className={styles.form}>

        <Input placeholder='Digite o email' type='email' {...email}/>

        <Input placeholder='Digite a sua senha' type='password' className={styles.input} {...senha}/>
       
        <div className={styles.button}>
        <Button>Entrar</Button>
        </div>
       </form>

       <p className={styles.linkCriar}> <Link to='criarConta/'>Criar Conta</Link></p>

    </section>
    </div>
  )
}

export default LoginForm
