import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import styles from './Agenda.module.css'
import Select from '../Forms/Select'
import Horario from './Horario'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { useLocation } from 'react-router-dom'

const Agenda = () => {
  let parametro=useLocation()

function handleSubmit(event){
  event.preventDefault()
}
function handleClose(){
  console.log(parametro)
}

  return (
    <section className={styles.overlay}>
      
      <div className={styles.wrapper}>

        <div className={styles.header}>
        <button className={styles.btnClose} onClick={handleClose}><Icon path={mdiClose} size={1}/></button>
        <h2 className={`${styles.h2} title`}>Agendar Horario</h2>
        
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
        <Input type='text' placeholder='Seu Nome'/>
        <Input type='date' placeholder='Data de Nascimento'/>       
        <div className={styles.labelSelect}>
        <Select label="Escolha uma Unidade"/>
        
        <span style={{color:'#E6E6E6', paddingTop:'1rem'}}>Angenda o seu Horario</span>
        
        <div className={styles.horario}>
        <Horario>07h:00</Horario>
        <Horario>08h:00</Horario>
        <Horario>10h:00</Horario>
        <Horario>15h:00</Horario>
        </div> 

        </div>   
        <Button>Agendar Agora</Button>
        </form>

      </div>
    </section>
  )
}

export default Agenda
