import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Host Info</title>
        <meta name="description" content="Gerenciador de dados de servidores de telefonia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Criado por:&nbsp;
            <code className={styles.code}>Wanderson C. Serra</code>
          </p>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/logo.png"
                alt="WCS Tech Logo"
                className={styles.vercelLogo}
                width={300}
                height={150}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
