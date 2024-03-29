import React from 'react'
import styles from './Button.module.css'
const Button = ({text,onClick}) => {
  return (
       <button onClick={onClick} className={styles.btn}>
            <span>{text}</span>
            <img className={styles.arw} src="/images/arrow-forward.png" alt="" />
       </button>
  )
}

export default Button
