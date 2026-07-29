import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className= {styles.header}>
      <h3>LiveforLovedOnes</h3>
      <button className= {styles.loginBtn} >Login</button>
    </div>
  )
}

export default Header