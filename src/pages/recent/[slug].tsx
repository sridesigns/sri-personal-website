import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { GetRecent, GetRecentSlug } from "../../graphql/data/Recents/recent"
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../components/Layout";
import Head from "next/head";
import Footer from "../../components/Footer";
import HorizontalLine from "../../components/HorizontalLine";

interface Props {
  slug: string
  source: MDXRemoteSerializeResult
}

export async function getStaticPaths() {
  const slugRes = await GetRecentSlug()
  const slugs = slugRes.recentWorks

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const work = await GetRecent(params.slug)

  return {
    revalidate: 60 * 60,
    props: {
      recentwork: work.recentWorks[0],
      source: await serialize(work.recentWorks[0].body.markdown)
    },
  }
}

export default function RecentWorkView({ recentwork, source }) {
  return (
    <Layout>
      <Head>
        <title>{recentwork.title}</title>
        <link rel="icon" href="/favicons/manlaptop.png" />
      </Head>
      <Header />
      <main className="mt-20 md:mt-28">
        <header className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto space-y-4 py-10">
          <h2 className="text-4xl text-gray-900 dark:text-gray-50 font-bold text-center">{recentwork.title}</h2>
          <p className="text-lg font-medium text-center text-gray-700 dark:text-gray-400">{recentwork.description}</p>
        </header>
        <HorizontalLine />


        <div className="max-w-screen-sm md:max-w-screen-md prose prose-lg text-gray-900 my-10 mx-6 md:mx-auto">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />

    </Layout>
  )
}