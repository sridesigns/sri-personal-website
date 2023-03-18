import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { GetArchive, GetArchiveSlug } from "../../graphql/data/Projects/archive"
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../components/Layout";
import Head from "next/head";
import Footer from "../../components/Footer";

interface Props {
  slug: string
  archive,

  source: MDXRemoteSerializeResult
}

export async function getStaticPaths() {
  const slugRes = await GetArchiveSlug()
  const slugs = slugRes.archive

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const work = await GetArchive(params.slug)

  return {
    revalidate: 60 * 60,
    props: {
      archive: work.archives[0],
      source: await serialize(work.archives[0].content.markdown, {
        mdxOptions: { development: false },
      })
    },
  }
}

export default function ArchiveView({ archive, source }: Props) {
  return (
    <Layout>
      <Head>
        <title>{archive.title}</title>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <main className="mt-20 lg:mt-28">
        <header className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto space-y-4 py-10">
          <h2 className="text-4xl text-gray-900 dark:text-gray-50 font-bold text-center">{archive.title}</h2>
          <p className="text-lg font-medium text-center text-gray-700 dark:text-gray-400">{archive.summary}</p>
        </header>
        <div className="max-w-screen md:max-w-screen-md mx-auto my-5 text-center">
          <Image
            src={archive.bannerImage.url}
            alt={archive.title}
            width={800}
            height={480}
            objectFit="cover"
          />
        </div>
        <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto md:grid grid-cols-3 gap-4">
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold pb-2">Activities</h3>
            {archive.role.map((activity: string) => (
              <ul key={activity}>
                <li className="text-base py-1 list-disc list-inside font-medium">
                  {activity}
                </li>
              </ul>
            ))}
          </div>
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold pb-2">Tech Stack</h3>
            {archive.techStack.map((stack: string) => (
              <ul key={stack}>
                <li className="text-base py-1 list-disc list-inside font-medium">
                  {stack}
                </li>
              </ul>
            ))}
          </div>
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold pb-2">Duration</h3>
            <p className="text-base font-medium">{archive.duration}</p>
          </div>
        </div>


        <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto prose prose-lg text-slate-900 my-10">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />

    </Layout>
  )
}