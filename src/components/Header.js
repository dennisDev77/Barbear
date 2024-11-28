import React from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import Button from './Forms/Button'
import Barbe from '../Assets/Barbe.png'
import useMedia from '../Hooks/useMedia'
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import Agenda from './Modal/Agenda'
import {setClose} from './Helper/BtbClose'

const Header = () => {
  const [mobileMenu, setMobileMenu]=React.useState(false)
  const [agendar, setAgendar]=React.useState(false)
  const {pathname}=useLocation()

  React.useEffect(()=>{
  setMobileMenu(false)
  },[pathname])

const mobile=useMedia('(max-width:49rem)')
 function handleClick(){
  setAgendar(!agendar)
  console.log(agendar)
 }
  return (
    <>
    <nav className={styles.navBar}>
      
      
      <Link className={styles.logo} to='/'>
       <img src={Barbe} alt='Carregando logo'/>
       <span>BarBear</span>
      </Link>

      <div className={ `${ mobile ? styles.menuMobile: styles.menus} ${mobileMenu && styles.btnMobileActive}`}>

        <div className={styles.body}>
      <Link className={styles.menuItem} to='/'> Home </Link>
      <Link className={styles.menuItem} to='servico'> Servicos</Link>
      <Link className={styles.menuItem} to='sobre'> Sobre </Link>
      <Link className={styles.menuItem} to='login'> Minha Conta</Link>

      </div>
    </div>
      
     {mobile?

      <div className={styles.btnMobile}>
      <button className=
      {`${styles.btn} ${mobileMenu&& styles.btnMobileActive}`}
      
      onClick={()=>setMobileMenu(!mobileMenu)}
      > 
      </button>
      </div>
      :    
     <div className={styles.btnAgendar} style={{display:'flex', justifyContent:'center', alignItems:'center' ,gap:'.5rem'}}>
     <Link to='login' className={styles.decoration}> <Icon path={mdiAccount} size={2} /></Link>
     <Button onClick={()=>setClose(true)}>Agendar</Button>
     </div> 
    
    }

{/*Chamando o modal */}
    {agendar &&
      <Agenda/> 
      } 
    </nav>
  
    </>
  )
}

export default Header
