import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

// Top navbar
export default function Navbar () {
  const { user, username } = useContext(UserContext)

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/' passHref>
            <button className='btn-logo'>HELLO</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {user && username && (
          <>
            <li className='push-left'>
              <Link href='/admin' passHref>
                <button className='btn-blue'>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <Image src={user?.photoURL} width={50} height={50} alt='user-photo' />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href='/enter' passHref>
              <button className='btn-blue'>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
