import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div className="bg-green-200 h-screen">
      <Head>
        <title>About Conor McAfee | Senior Front-End Developer</title>
        <meta name="description" content="About Conor McAfee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        <h1>
          Conor McAfee
        </h1>

        <p>About</p>

        <Link href="/" passHref>
          <a className="font-bold">Back home!</a>
        </Link>

      </main>
    </div>
  )
}

export default About