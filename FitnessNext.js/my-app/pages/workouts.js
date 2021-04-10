import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Workout() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Workouts</title>
          <link rel="icon" href="/favicon.ico" />
          <Link href='/' activeClassName="active-link" exact>
            home
          </Link>
        </Head>
      </div>
    )
  }