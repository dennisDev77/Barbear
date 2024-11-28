import React from 'react'
import styles from './TextArea.module.css'

const TextArea = ({children, ...props}) => {
  return (
    <textarea {...props} className={styles.textArea}>
      {children}
    </textarea>
  )
}

export default TextArea
