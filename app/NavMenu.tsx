import React from 'react'
import styles from './NavMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SignInButton from '@/components/SignInButton'
import AuthCheck from '@/components/AuthCheck'
import SignOutButton from '@/components/SignOutButton'

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src="/logo.svg"
          width={216}
          height={30}
          alt='MyNextSpace Logo'
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu