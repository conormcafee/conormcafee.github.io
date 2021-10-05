import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-green-100 h-screen">
      <Head>
        <title>Conor McAfee | Senior Front-End Developer</title>
        <meta name="description" content="Conor McAfee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        <h1>
          Conor McAfee
        </h1>

        <p>Senior Front-End Developer</p>

        <p>Read about <Link href="/about" passHref><a className="font-bold">Click here for more</a></Link></p>

      </main>
    </div>
  )
}

export default Home
