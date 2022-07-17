import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>


        <Head>
          <title>Willliam.dev</title>
          <meta name="description" content="William dev's website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.landing}>
          <h1 className={styles.title}>
            Hi, I am Willliam
          </h1>

          <p className={styles.description}>
            Just a boy who is powered by coffee, podcasts and music.
          </p>
        </div>

        <section className={styles.section}>


          i"nfo  - Using experimental wasm build of next-swci"nfo  - Using experimental wasm build of next-swci"nfo  - Using experimental wasm build of next-swci"nfo  - Using experimental wasm build of next-swci"nfo  - Using experimental wasm build of next-swci"nfo  - Using experimental wasm build of next-swci"nfo  - Using experimental wasm build of next-swci"nfo  - Using experimental wasm build of next-swc
        </section>

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
    </div >
  )
}
