import React from 'react'
import styles from './Servicos.module.css'
import card1 from '../Assets/card1.png'
import Head from './Helper/Head'
import Button from '../components/Forms/Button'
import card2 from '../Assets/card2.png'
import card3 from '../Assets/card3.png'


const Servicos = () => {
  return (
    <section className={`${styles.servicos}`}>

<Head title='Home'/>
     <div className='container'> 
      <div>
        <h2 className={`${styles.title} title`}>Servicos</h2>
        <p className={styles.textParagrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum placeat quis dignissimos, odit unde corporis recusandae ipsum provident perferendis deleniti, rem harum repudiandae explicabo consectetur iste obcaecati fugit eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>


      <div className={styles.cards}>
    
        <div className={styles.card1}>
        <img src={card1} alt='Carrecagando'/>

        <div className={styles.cardFooter}>
        <h3>Corte de Cabelo</h3>
        <Button className={styles.button}>1000,00</Button>
        </div>
        
        </div>

        <div className={styles.card2}>
        <img src={card2} alt='Carrecagando'/>

        <div className={styles.cardFooter}>
        <h3>Corte Completo</h3>
        <Button>2000,00</Button>
        </div>
        </div>

        <div className={styles.card3}>
          
        <img src={card3} alt='Carrecagando'/>

        <div className={styles.cardFooter}>
        <h3>Cabelo & Barba</h3>
        <Button>3000,00</Button>
        </div>
        </div>

      </div>

      </div>
    </section>
  )
}

export default Servicos
