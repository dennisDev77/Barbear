import React from 'react'
import styles from'./Footer.module.css'
import Barbe from '../Assets/Barbe.png'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiFacebook } from '@mdi/js';
import { mdiEmail} from '@mdi/js';


const Footer = () => {

  return (
    <footer className={styles.footer}>
        <div className='container'>
       
       <div className={styles.wrapper}>
        <div  className={styles.logo}> 
        <Link className={styles.logoBarbe} to='/'>
       <img src={Barbe} alt='Carregando logo'/>
       <span>BarBear</span>
      </Link>
      <p>O ferecemos uma variedade de cortes de cabelo para si, com qualidades a 100%, não 
        demore mais para chegar até a nossa sede, estamos prontos para atender você com 
        todo carinho carregamos nas nossas mãos.</p>
        </div>

        <div className={styles.contacto}>
          <h2 className={styles.text}>Suporte</h2>
          <p className={styles.support}>
            <span> (+244) 953 266 443</span>
            <span> (+244) 939 427 649</span>
            <span> (+244) 927 473 649</span>
          </p>
          
          </div>
        <div className={styles.contacto}>

          <h2 className={styles.text}>Locais</h2>
        
          <p className={styles.support}>
          <span>Luanda, Vila de Cacuaco</span>
          <span>Luanda, Rangel Rua 789</span>
          <span>Benguela,  Rua 0001</span>
          </p>
        
          </div>

        </div>
      
        <div className={styles.footerEnd}>

          <p  className={styles.author}>BY: <span>Dennis Camela</span></p>
        <Link to=''><Icon path={mdiFacebook} size={2} className={styles.icon} title='Facebook' /></Link>
        <Link to=''><Icon path={mdiEmail} size={2} className={styles.icon} title='Email'/></Link>     
           <p className={styles.text}> &copy; 2024 BarBear. Todos os Directos Reservados</p>
        </div>

        </div>
    </footer>
  )
}

export default Footer
