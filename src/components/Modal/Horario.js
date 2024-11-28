import React from 'react'
import styles from './Horario.module.css'

const Horario = ({children, ...props}) => {
  return (
    <button {...props} className={styles.horario}>
      {children}
    </button>
  )
}

export default Horario
