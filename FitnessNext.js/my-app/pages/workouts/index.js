import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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

      <Form>
      <div class="form-group">
    <label for="exampleFormControlSelect1">How many pushups?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </Form>
    </div>
  )
}
