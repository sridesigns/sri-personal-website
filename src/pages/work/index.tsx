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

export default function Life({ blogs }) {
  console.log(blogs);
  return (
    <Layout>
      <Head>
        <title>Work &middot; Sri</title>
        <link rel="icon" href="/favicons/alien.png" />
      </Head>
      <Header />
      <main className="max-w-screen md:max-w-screen-md lg:max-w-screen-lg mx-6 md:mx-auto ">
        <header className="py-16 space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 pb-4">Work &middot; Professional Highlights</h1>
          <div className="columns-1 md:columns-2 lg:columns-3 space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed">I completed my Bachelors in electronics and instrumentation engineering in May, 2011 and I got my first job as a Software engineer 
            at TCS, one of India's biggest IT consulting firms, in Sep 2011.</p>
            <p className="text-sm text-slate-700 leading-relaxed">I consulted for Nielsen Holdings, a global leader in data and analytics, as a software engineer for two years. We developed a robust,
             reporting and analytics software that processed information from 700k+ households across North America and helped shape the future of media and advertisements.</p>
            <p className="text-sm text-slate-700 leading-relaxed">At the end of 2013, I sought out a new challenge. Within TCS, I had opportunity to work as an user analyst with
             another N.A financial org., Citibank. Along with a design agency, we designed and developed the Citibank's consumer mobile app. I worked closely with design firm to bridge
             business and user needs. I facilitated multiple discovery workshops, user research sessions and helped successfully launch multiple features across Latin America.</p>
            <p className="text-sm text-slate-700 leading-relaxed">My career as an &quot;official&quot; designer started in 2014. I moved to the Labs team and consulted for GE as a product designer. I
            worked on multiple PoCs across the manufacturing industry and got the opportunity to design for users with different needs and non traditional media including large-scale screens and
            instrument clusters.</p>
            <p className="text-sm text-slate-700 leading-relaxed">Come 2016, I joined Fresco, a niche product team within TCS, working closely with Ashok Krish, Balachandar and several other inspiring people
            to develop products for TCS and global clients. I led the design of revamping the appraisal platform for TCS. This product was shipped in 2018 and is currently being used by 500k+ employees 
            across TCS. I also helped design a suite of enterprise productivity tools for the org.</p>
            <p className="text-sm text-slate-700 leading-relaxed">After that, Fresco was rebranded as &quot;Digital Workplace&quot; unit and we helped diverse businesses worldwide, reinvent their workplace
            for the ever changing needs of the modern employee.</p>
            <p className="text-sm text-slate-700 leading-relaxed">TCS partnered with Microsoft and I helped design and launch an automated, gamified migration process that enabled TCS to onboard more than 170,000 
            employees to MS Suite in less than 180 days. This initiative helped us reduce costs and human hours, increase productivity and seamlessly enable the transition to remote work when the pandemic occurred.</p>
            <p className="text-sm text-slate-700 leading-relaxed">In 2022, After an incredible decade with TCS, I joined Zalando and relocated to Berlin. I'm presently working with an amazing team shaping the future of
            e-commerce for consumers and partners.</p>
          </div>
        </header>
        <div className="space-y-10 pb-20">
            <h2 className="text-2xl font-semibold pb-4">Recent <span className="italic font-extrabold">Work</span></h2>
          {blogs?.blogPosts?.map((blog) => (
            <div key={blog.slug}>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium pb-2">{new Date(blog.publishedAt).toDateString()}</p>
              <Link href={`/life/${blog.slug}`}>
                <a>
                  <h4 className="text-xl font-bold text-slate-900 hover:text-indigo-500 leading-relaxed">{blog.title}</h4>
                </a>
              </Link>
              <p className="text-sm text-slate-700 leading-relaxed py-1">{blog.excerpt}</p>
            </div>
          ))}
        </div>

        <div>
            <h2 className="text-2xl font-semibold pb-4">From the&nbsp;<span className="italic font-extrabold">Archives</span></h2>

        </div>
      </main>
      <Footer />






    </Layout>
  )
}