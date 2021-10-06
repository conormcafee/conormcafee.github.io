import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { PrimaryLayout } from "@/components/layout"

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About Conor McAfee | Senior Front-End Developer</title>
        <meta name="description" content="About Conor McAfee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryLayout>
        <Fragment>
          <h1>Conor McAfee</h1>
          <p>About</p>
          <Link href="/" passHref>
            <a className="font-bold">Back home!</a>
          </Link>
        </Fragment>
      </PrimaryLayout>
    </Fragment>
  )
}

export default About