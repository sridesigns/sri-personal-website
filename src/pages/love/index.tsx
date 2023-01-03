import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GetBlogPosts } from "../../graphql/data/Posts/blogposts";


export async function getStaticProps() {
  const blogs = await GetBlogPosts()

  return {
    //This data is slightly dynamic, so we'll update it every hour.
    revalidate: 60 * 60,
    props: {
      blogs
    },
  }
}

export default function Love({ blogs }) {
  console.log(blogs);
  return (
    <Layout>
      <Head>
        <title>Sri Loves</title>
        <link rel="icon" href="/favicons/alien.png" />
      </Head>
      <Header />
      <main className="max-w-screen md:max-w-screen-md mx-6 md:mx-auto ">
        <header className=" py-16 space-y-2">
          <h1 className="text-4xl font-extrabold text-slate-900 text-center">Love</h1>
          <p className="text-sm text-slate-700 text-center">Curation of my thoughts and life experiences</p>
        </header>
        <div className="space-y-10 pb-20">
          {blogs?.blogPosts?.map((blog) => (
            <div key={blog.slug}>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium pb-2">{new Date(blog.publishedAt).toDateString()}</p>
              <Link href={`/love/${blog.slug}`}>
                <a>
                  <h4 className="text-xl font-bold text-slate-900 hover:text-indigo-500 leading-relaxed">{blog.title}</h4>
                </a>
              </Link>
              <p className="text-sm text-slate-700 leading-relaxed py-1">{blog.excerpt}</p>
            </div>
          ))}

        </div>
      </main>
      <Footer />






    </Layout>
  )
}