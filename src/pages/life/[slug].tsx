import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { GetPost, GetPostSlug } from "../../graphql/data/Posts/post";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Footer from "../../components/Footer";
import ArrowLeft from "../../assets/arrow-left";


export async function getStaticPaths() {
  const data = await GetPostSlug()
  const slugs = data.blogPosts

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await GetPost(params.slug)

  return {
    revalidate: 60,
    props: {
      blog: post.blogPosts[0],
      content: await serialize(post.blogPosts[0].body.markdown,{
        mdxOptions: { development: false },
      })
    },
  }
}

export default function PostView({ blog, content }) {
  console.log(blog);

  return (
    <Layout>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="" />
      </Head>

      <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto">
        <Link href="/life">
          <a>
            <button className="inline-flex space-x-2 my-10 items-center">
              <ArrowLeft />
              <p className="text-slate-900 pb-1 hover:text-blue-600 hover:font-semibold">Back</p>
            </button>
          </a>
        </Link>
        <main>
          <header className="flex-col mt-12 mb-10 space-y-4 justify-left">
            <h2 className="text-4xl text-slate-900 font-extrabold tracking-tight">{blog.title}</h2>
            <p className="text-base text-slate-700">{blog.excerpt}</p>
            <div className="flex space-x-2 align-middle">
              <p className="text-slate-500 text-sm">{new Date(blog.publishedAt).toDateString()}</p>
            </div>
          </header>

          <div className="prose prose-lg text-slate-900 my-10 mx-auto">
            <MDXRemote {...content} />
          </div>

        </main>

      </div>
      <Footer />


    </Layout>

  )
}