import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Da Fitness APP 😏</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4>Da Fitness APP 😏</h4>
      <Button className={styles.button}>
        <Link href="/workouts" activeClassName="active-link" exact>
          Add a workout 😎
        </Link>
      </Button>
    </div>
  )
}
