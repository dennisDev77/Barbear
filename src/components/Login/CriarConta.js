import React from 'react'
import styles from './CriarConta.module.css'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Head from '../Helper/Head'
import {Link} from 'react-router-dom'

const CriarConta = () => {
  const nome=useForm()
  const email=useForm()
  const senha=useForm()

  function handleSubmit(event){
    event.preventDefault()
  }
  return (
    <>
    <Head title='Criar'/>
    <section className={`${styles.wrapper} animeLeft`}>

    <div className={styles.title}>
   <h2 className='title'>Criar Conta</h2>
    </div>
  
  <form onSubmit={handleSubmit} className={styles.form}>

    <Input placeholder='Digite o seu nome' {...nome}/>

   <Input placeholder='Digite o email' type='email' {...email}/>

   <Input placeholder='Digite a senha' type='password' className={styles.input} {...senha}/>
  
   <div className={styles.button}>
   <Button>Entrar</Button>
   </div>
  </form>

  <p className={styles.linkCriar}> <Link to='/login'>Já tenho uma Conta</Link></p>

</section>
</>
  )
}

export default CriarConta
