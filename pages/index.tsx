import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { PrimaryLayout } from '@/components/layout'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Conor McAfee | Senior Front-End Developer</title>
        <meta name="description" content="Conor McAfee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryLayout>
        <Fragment>
          <h1>Conor McAfee</h1>
          <p>Senior Front-End Developer</p>
          <p>Read about <Link href="/about" passHref><a className="font-bold">Click here for more</a></Link></p>
        </Fragment>
      </PrimaryLayout>
    </Fragment>
  )
}

export default Home
