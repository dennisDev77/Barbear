import React from 'react'
import styles from './Unidade.module.css'
import { Link } from 'react-router-dom'
const Unidade = () => {
  return (
    <div className={styles.wrapper}>
    <section className={`${styles.container} container`}>
      <div className={styles.title}>
        <h2 className={`${styles.title} title`}>Nossa Unidade</h2>
      </div>

    <div className={styles.unidades}>
      <div className={styles.unidade1}>

          <div className={styles.overlay}>
         <h2> Luanda </h2>
         <p> Belas, Camama rua 123 
         </p>
         <span> <Link className={styles.overlayLink}> Saber Mais...</Link></span>
          </div>
        <div className={styles.text}>
            
        </div>
      </div>

      <div className={styles.unidade2}>
      <div className={styles.overlay}>
            <h2>Luanda</h2>
            <p>Cacuaco, Rua 123</p>
            <span> <Link className={styles.overlayLink}> Saber Mais...</Link></span>
          </div>

      </div>

      <div className={styles.unidade3}>

      <div className={styles.overlay}>
            <h2>Huambo</h2>
            <p>Chipipa, Rua 321</p>
            <span> <Link className={styles.overlayLink}> Saber Mais...</Link></span>
          </div>

     
        </div>

        </div>  
    </section>
    </div>
  )
}

export default Unidade
