import React from 'react'
import styles from './Equipe.module.css'
import equipe1 from '../Assets/equipe1.jpg'
import equipe2 from '../Assets/equipe2.jpg'
import equipe3 from '../Assets/equipe3.jpg'
import Icon from '@mdi/react';
import { mdiTwitter } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { Link } from 'react-router-dom'

const Equipe = () => {
  return (

    <section className={`${styles.container} container`}>
      
      {/* O titulo da seccao */}
      <div className={styles.equipeText}>
            <h2 className={`${styles.title} title`}>Nossa Equipe</h2>
        </div>   

      <div className={styles.nossaEquipe}>

{/* Primeira equipe */}
        <div className={styles.equipe}>
            <div className={styles.img1}></div>
                <img src={equipe1} alt='Carregando'/>
            <div className={styles.text}>
            <h3 className={styles.nome}>Dennis Camela</h3>

            <ul className={styles.sociais}>
                  <li>
                 <Link to='#'><Icon path={mdiFacebook} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiInstagram} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiTwitter} size={1} /></Link> 
                  </li>
                </ul>

            </div>
        </div>

{/* Segunda equipe */}
        <div className={styles.equipe}>
          <div className={styles.img2}>
          <img src={equipe2} alt='Carregando'/>
          </div>

          <div className={styles.text}>
          <h3 className={styles.nome}>Dennis Camela</h3>

          <ul className={styles.sociais}>
                 <li>
                 <Link to='#'><Icon path={mdiFacebook} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiInstagram} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiTwitter} size={1} /></Link> 
                  </li>
                </ul>

          </div>
        </div>

{/* Terceira equipe */}
        <div className={styles.equipe}>
              <div className={styles.img3}>
              <img src={equipe3} alt='Carregando'/>
              </div>

              <div className={styles.text}>
                <h3 className={styles.nome}>Dennis Camela</h3>

                <ul className={styles.sociais}>
                <li>
                 <Link to='#'><Icon path={mdiFacebook} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiInstagram} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiTwitter} size={1} /></Link> 
                  </li>
                </ul>
                </div> 
        </div>

        {/* Qaurta equipe */}
        <div className={styles.equipe}>
              <div className={styles.img3}>
              <img src={equipe3} alt='Carregando'/>
              </div>

              <div className={styles.text}>
                <h3 className={styles.nome}>Dennis Camela</h3>

                <ul className={styles.sociais}>
                <li>
                 <Link to='#'><Icon path={mdiFacebook} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiInstagram} size={1} /></Link> 
                 <Link to='#'><Icon path={mdiTwitter} size={1} /></Link> 
                  </li>
                </ul>
                </div> 
        </div>
        {/* Esta e a ultima equipe */}
   
      </div>
    </section>
  )
}

export default Equipe
