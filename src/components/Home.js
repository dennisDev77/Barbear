import React from 'react'
import styles from './Home.module.css'
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';
import { mdiClockTimeFourOutline } from '@mdi/js';
import Button from './Forms/Button'
import Servicos from './Servicos'
import Sobre from './Sobre'
import Equipe from './Equipe'
import Unidade from './Unidade';
import Head from './Helper/Head';

const Home = () => {
  return (
    <>
    
    <section className={styles.section}>
     <div  className={`${styles.divMain} container`}>
     <Head title='Home'/>
     
      <div className={styles.titleMain}>
      <h2 >O estilo é um reflexo da <b className={styles.cursorLine}></b> </h2>
      <span className={styles.span}>Sua Atitude e da sua Mentalidade</span>
      </div>

      <div className={styles.paragrafo}>
      <p>Encontre o melhor corte de cabelo em nosso Salão</p>
      <p>Estamos aberto das  <b>6h:00 - 18h:00</b></p>
        </div>

    <div className={styles.buttons}>
        <Button className={styles.button1}>
         
        <span><Icon path={mdiClockTimeFourOutline} size={1} /> </span>  <span>Agendar Horário</span>
        </Button>

        <button className={styles.button2}>
         <span><Icon path={mdiPhone} size={1} /></span>  <span>+244 953-266-447</span>
         </button>
    </div>

      </div>
    </section>
     
     <Servicos/>
    <Sobre/>
    <Equipe/>
    <Unidade/>
    </>
  )
}

export default Home
