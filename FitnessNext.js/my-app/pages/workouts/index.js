import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button>
        <Link href="/" activeClassName="active-link" exact>
          Home
        </Link>
      </Button>
    </div>
  )
}
