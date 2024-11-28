import React from 'react'
import styles from './Sobre.module.css'
import useMedia from '../Hooks/useMedia'
import sobre1 from '../Assets/sobre1.jpg'
import sobre2 from '../Assets/sobre2.jpg'
import sobre3 from '../Assets/bg3.jpg'
import Head from './Helper/Head'

const Sobre = () => {
  const mobile=useMedia('(max-width:49rem)')

  return (
    <section className='container'>
        <Head title='Home'/>

      <div className={styles.wrapper}>
        <div className={styles.wrapperText}>
        <h2 className='title'>Sobre</h2>
        <p className={styles.textParagrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat aut sint accusamus. Eius ex architecto sunt, sapiente magnam ea iure eum neque harum nulla minus. Eveniet repudiandae sequi saepe.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat aut sint accusamus. Eius ex architecto sunt, sapiente magnam ea iure eum neque harum nulla minus. Eveniet repudiandae sequi saepe.
        </p>
        <p className={styles.textParagrafo}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat aut sint accusamus. Eius ex architecto sunt, sapiente magnam ea iure eum neque harum nulla minus. Eveniet repudiandae sequi saepe.</p>
        </div>

        <div className={styles.wrapperPic}>  

          {mobile&&<img src={sobre1} alt='Carregando foto' className={styles.imgSobre1}/>}

            <img src={sobre1} alt='Carregando foto' className={styles.imgSobre1}/> 
            <img src={sobre3} alt='Carregando foto' className={styles.imgSobre3}/> 
            <img src={sobre2} alt='Carregando foto' className={styles.imgSobre2}/>  
        </div>

      
      </div>
    </section>
  )
}

export default Sobre
