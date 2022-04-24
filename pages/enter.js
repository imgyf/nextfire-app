import Image from 'next/image'
import { auth, googleAuthProvider } from '../lib/firebase'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

export default function EnterPage () {
  const { user, username } = useContext(UserContext)

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      <h1>Enter Page</h1>
      {
        user
          ? !username ? <UsernameForm /> : <SignOutButton />
          : <SignInButton />
      }
    </main>
  )
}

// Sign in with Google button
function SignInButton () {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider)
  }

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <Image src='/google.png' width={30} height={30} alt='google-logo' /> Sign in with Google
    </button>
  )
}

// Sign out button
function SignOutButton () {
  return <button onClick={async () => await auth.signOut()}>Sign Out</button>
}

function UsernameForm () {
  return <h2>Username Form</h2>
}
