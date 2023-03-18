import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GetBlogPosts } from "../../graphql/data/Posts/blogposts";
import { motion } from "framer-motion";


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
        <title>Love &middot; Sri</title>
        <link rel="icon" href="/favicons/alien.png" />
      </Head>
      <main className="lg:max-w-screen-xl mx-auto grid grid-cols-6 gap-6">
        <div className=" col-span-2">
          <Header />
        </div>
        <motion.div
           initial={{ opacity: 0, y: 500 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4 }}
           className="col-span-4 my-20">
          <header className="pb-16 space-y-2">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tighter">Love</h1>
            <p className="text-sm text-gray-700 font-writer tracking-tight font-medium">Curation of my thoughts and life experiences</p>
          </header>
          <div className="space-y-10 pb-20">
            {blogs?.blogPosts?.map((blog) => (
              <div key={blog.slug}>
                <Link href={`/love/${blog.slug}`}>
                  <a>
                    <h4 className="text-lg font-bold text-gray-900 hover:text-blue-700 leading-relaxed tracking-tight">{blog.title}</h4>
                  </a>
                </Link>
                <p className="text-sm text-gray-700 leading-relaxed py-1 font-writer tracking-tight">{blog.excerpt}</p>
                <p className="text-xs text-gray-500 tracking-tight font-writer py-1">{new Date(blog.publishedAt).toDateString()}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />






    </Layout>
  )
}