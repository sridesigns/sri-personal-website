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
        <title>Life &middot; Sri</title>
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
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tighter">Life // Journal of my thoughts</h1>
          </header>
          <div className="space-y-10 pb-20">
            {blogs?.blogPosts?.map((blog) => (
              <div key={blog.slug}>
                <Link href={`/life/${blog.slug}`}>
                  <a>
                    <h4 className="text-lg font-bold text-gray-900 hover:text-indigo-500 leading-relaxed tracking-tight">{blog.title}</h4>
                  </a>
                </Link>
                <p className="text-sm text-gray-700 leading-relaxed py-1 tracking-tight font-writer">{blog.excerpt}</p>
                <p className="text-xs text-gray-500 font-writer tracking-tight py-1">{new Date(blog.publishedAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />






    </Layout>
  )
}