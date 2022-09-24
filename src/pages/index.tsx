import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'
import HomeWork from '../components/Home/Projects'
import {GetHome} from '../graphql/data/Home'

interface Props {
  home: string,
}

export async function getStaticProps() {
  const home = await GetHome()

  return {
    props: {
      revalidate: 60 * 60,
      home
    },
  };
}

export default function Home({ home }: Props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Sriram Venugopal</title>
          <meta name="description" content="My Personal Site" />
          <link rel="icon" href="/favicons/memoji.png" />
        </Head>

        <Header />
        <main>
          <header className=" max-w-screen-md min-h-screen py-32 mx-auto justify-center">
            <h1 className="text-8xl font-extrabold tracking-tighter"> Inquistive designer, artist, storyteller.</h1>
          </header>


          {/* Case Studies Section */}
          <div className="mb-12 lg:mb-24" id="casestudies">
            <HomeWork home={home} />
          </div>
        </main>
      </Layout>

    </div >
  )
}
