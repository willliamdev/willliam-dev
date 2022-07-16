import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Willliam.dev</title>
        <meta name="description" content="William dev's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I am Willliam Dev
        </h1>

        <p className={styles.description}>
          Just a boy who is powered by coffee, podcasts and music. Linux and open source enthusiast.
        </p>
      </main>

      <footer className={styles.footer}>
        <span>Made with &#10084; and &#9749; by &nbsp;
          <a
            href="https://github.com/willliamdev"
          >
            <strong>willliam.dev</strong>
          </a>
        </span>
      </footer>
    </div>
  )
}
