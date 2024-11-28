import React from 'react'
import styles from './Input.module.css'

const Input = ({value,handleChange,onBlur,erro, ...props}) => {
  return (
    <>
    <input {...props} 
    value={value}
    onChange={handleChange}
    onBlur={onBlur}
    className={styles.input}
    />
    <p className={styles.erro}> {erro} </p>
    </>
  )
}

export default Input
