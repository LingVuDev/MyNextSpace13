'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>...</>;
  } else if (status === 'authenticated') {
    return <Link href={'dashboard'}>
      <Image
        src={session.user?.image ?? 'mememan.webp'}
        width={32}
        height={32}
        alt="Your Name"
      />
    </Link>;
  } else {
    return (
      <button onClick={() => signIn()}>Sign In</button>
    )
  }
}

export default SignInButton