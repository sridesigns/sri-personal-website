import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Archives from "../../components/Work/Archives";
import HorizontalLine from "../../components/HorizontalLine";
import Recents from "../../components/Work/Recents";
import { GetWork } from "../../graphql/data/Work";
import { motion } from "framer-motion";


interface Props {
  work: string
}

export async function getStaticProps() {
  const work = await GetWork()


  return {
    //This data is slightly dynamic, so we'll update it every hour.
    revalidate: 60 * 60,
    props: {
      work
    },
  }
}

export default function Work({work}: Props) {
  console.log(work);

  return (
    <Layout>
      <Head>
        <title>Work &middot; Sri</title>
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
          <header className="space-y-4 pb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 pb-4 tracking-tighter">Work &middot; Professional Highlights</h1>
            <div className="columns-1 md:columns-2 lg:columns-3 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">I completed my bachelor's in electronics and instrumentation engineering in May 2011 and was recruited 
              as a Software engineer at TCS, one of India's biggest IT consulting firms, in Sep 2011.</p>
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">I consulted for Nielsen Holdings, a global leader in data and analytics as an engineer for two years. We developed robust reporting and analytics software 
              that processed information from 700k+ households across North America and helped shape the future of media and advertisements.</p>
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">At the end of 2013, I sought out a new challenge. Within TCS, I had an opportunity to work as a user analyst with 
              another NA financial org., Citibank. Along with a design agency, we designed and developed Citibank's consumer mobile app. I worked closely with the design firm to bridge 
              business and user needs. I facilitated multiple discovery workshops and user research sessions and helped successfully launch different features across Latin America.</p>
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">My career as an &quot;official&quot; designer started in 2014. I moved to the Labs team and consulted for GE as a product designer. I
              worked on multiple PoCs across the manufacturing industry and designed for users with different needs and non-traditional media like large-scale screens and instrument clusters.</p>
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">Come 2016, I joined Fresco, a niche product team within TCS, working closely with Ashok Krish, Balachandar and several other inspiring people 
              to develop products for TCS and global clients. I led the design of revamping the appraisal platform for TCS. This product was shipped in 2018 and used by 500k+ employees 
              across TCS. I also designed a suite of enterprise productivity tools for the org.</p>
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">After that, Fresco was rebranded as a &quot;Digital Workplace&quot; unit and we helped diverse businesses worldwide reinvent their workplace
              for the ever-changing needs of the modern employee.</p>
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">TCS partnered with Microsoft, and I helped design and launch an automated, gamified migration process that enabled TCS to onboard more than 170,000 
              employees to MS Suite in less than 180 days. This initiative helped us reduce costs and human hours, increase productivity and seamlessly enable the transition to remote work when the pandemic occurred.</p>
              <p className="text-sm text-slate-700 leading-relaxed font-writer tracking-tight">In 2022, After an incredible decade with TCS, I joined Zalando and relocated to Berlin. I'm working with an amazing team, shaping the future 
              of e-commerce for consumers and partners.</p>
            </div>
          </header>

          {/* Recent Work */}

          <div className="pb-20">
              <h2 className="text-2xl font-semibold pb-2">Recent <span className="italic font-extrabold">Work</span></h2>
              <HorizontalLine />
              <Recents work={work}  />
          </div>

          {/* From the Archives */}

          <div>
              <h2 className="text-2xl font-semibold pb-2">From the&nbsp;<span className="italic font-extrabold">Archives</span></h2>
              <HorizontalLine />
              <Archives work={work} />

          </div>

        </motion.div>
      </main>
      <Footer />






    </Layout>
  )
}