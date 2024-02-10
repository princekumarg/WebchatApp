import React from 'react'
import styles from './Home.module.css'
import { Link,useNavigate } from 'react-router-dom'
import Cards from '../../components/shared/Card/Cards'
import Button from '../../components/shared/Button/Button'

const Home = () => {
  const signinlink={
    color:'#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px',
  }
  const navigate=useNavigate();
  return (
    <div className={styles.cardwrapper}>
        <Cards title="Welcome to Coderhouse!" icon="logo">
            <p className={styles.text}>
                we're working hard to get Coderhouse ready for everyone! while  
                we wrap up the finishing youches,we,re adding people gradually
                to make sure nothing breaks
            </p>
            <div>
               <Button onClick={()=>navigate('/register')} text="Get Your username"/>
            </div>
            <div className={styles.signin}>
                <span className={styles.txtsign}>Have an invite text?</span>
                <Link style={signinlink} to="/login">Sign In</Link>
            </div>

        </Cards>
    </div>
  )
}

export default Home
