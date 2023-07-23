import React from 'react'
import styles from './NavMenu.module.css'
import Image from 'next/image'

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Image
        src="/logo.svg"
        width={216}
        height={30}
        alt='MyNextSpace Logo'
      />
    </nav>
  )
}

export default NavMenu