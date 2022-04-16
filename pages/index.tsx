import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={() => toast.success('hello toast!')}>
          Toast Me
        </button>
        <Loader show />
      </main>
    </div>
  )
}
