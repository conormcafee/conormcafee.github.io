import type { NextPage } from 'next'
import Head from 'next/head'
import { Tabs } from '../components/tabs'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Conor McAfee | Front End Developer</title>
        <meta name='description' content='Conor McAfee, Front End Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='font-rubix font-light bg-slate-900 text-slate-100 h-screen'>
        <section className='grid grid-cols-2 gap-8 p-8 max-w-6xl mx-auto'>
          <article>
            <h1 className='font-medium text-3xl leading-tight max-w-2xl mb-3'>
              Welcome, I'm Conor McAfee. A front end developer from Ireland.
              Currently building products with the team at{' '}
              <a
                href='https://white.space'
                target='_blank'
                rel='noopener noreferrer'
              >
                white.space
              </a>
              .
            </h1>

            <p className='max-w-lg'>
              I have been a front end developer for <em>9</em> years where I
              have tranistioned from building brochure websites with Craft CMS
              for a local studio, to building & leading React JS projects being
              delivered to departments within government.
            </p>
          </article>

          <aside>
            <Tabs />
          </aside>
        </section>
      </main>
    </div>
  )
}

export default Home
