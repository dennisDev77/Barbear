import React from 'react'
import styles from './Select.module.css'

const Select = ({value, handleChange, onBlur, label, ...props}) => {
  return (
    <>
    <label style={{paddingTop:'1rem', paddingBottom:'.5rem'}}>{label}</label>
    <select value={value} onChange={handleChange} onBlur={onBlur} {...props} className={styles.select}>

    <option disabled value=''>Selecione</option>
    <option value='Cacuaco'>Cacuaco - Luanda</option>
    <option value='Viana - Luanda'>Viana - Luanda</option>
    <option value='Chipipa - Huambo'>Chipipa - Huambo</option>
</select>
</>
  )
}

export default Select
