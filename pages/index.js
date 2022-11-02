import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.css"


export default function Home() {
  return (

    <>
<Head>

  <title> Rami | Home</title>
  <meta name="keywords" content='rami'></meta>
</Head>


    <div>

      <h1  className={styles.title}> home page </h1>
      <p className={styles.text}> hello i m jawadi rami in the home page  </p>
      <p className={styles.text}> hello i m jawadi rami im a web developper   </p>

      <Link className= {styles.btn} href="/ramirez"> see Rami Listing</Link>

    </div>
    </>
  )
}
