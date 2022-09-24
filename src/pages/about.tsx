import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profilePic from "../assets/sri.jpg"


export default function About() {

  return (
    <Layout>
      <Head>
        <title>About Sri</title>
        <link rel="icon" href="/favicons/smileyface.png" />
      </Head>
      <Header />
      <main className="max-w-screen md:max-w-screen-md mx-6 md:mx-auto">
        <header className="py-24">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <Image
                    src={profilePic}
                    alt="This is Meee!"
                    width={360}
                    height={480}
                    objectFit="cover"
                    className="rounded-lg saturate-50"
                    />
                </div>
                <div className="col-span-2 space-y-4">
                    <p className="text-lg text-left">I am Sri, a product designer creating experiences and services for fun and exciting shopping and marketing at
                        <Link href="https://en.zalando.de/?_rfl=de">
                            <a className= "font-semibold text-slate-900 hover:bg-yellow-200 px-1 " target="_blank" rel="noopener noreferrer">Zalando SE in Berlin.</a>
                        </Link>
                    </p>
                    <p className="text-lg text-left">Before this, I was creating seamless, delightful employee experiences and productivity tools for diverse clientele of
                        <Link href="https://www.tcs.com/">
                            <a className= "font-semibold text-slate-900 hover:bg-yellow-200 px-1 " target="_blank" rel="noopener noreferrer">Tata Consultancy Services &#40;TCS&#41;</a>
                        </Link>across the globe.
                    </p> 
                </div>
            </div>
        </header>
        <div className=" grid grid-cols-7 gap-4 pb-6">
            <div className="col-span-2 space-y-4">
                <h4 className="text-2xl font-extrabold">Education</h4>
                <div className="space-y-2">
                    <h6 className="text-sm font-semibold text-slate-900">RMK Engineering College, Chennai</h6>
                    <p className="text-sm text-slate-700">2007 - 2011 &middot; B.Engg in Electronics and Instrumentation Engineering</p>
                </div>
                <div className="space-y-2">
                    <h6 className="text-sm font-semibold text-slate-900">St.John's Mat. Hr. Sec. School</h6>
                    <p className="text-sm text-slate-700">2005 - 2007 &middot; Higher Secondary in Science</p>
                </div>
            </div>
            <div className="col-span-2">
                <h4 className=" text-2xl font-extrabold">Experience</h4>
            </div>
            <div className="col-span-3">
                <h4 className=" text-2xl font-extrabold">Interests</h4>
            </div>

        </div>
      </main>
      <Footer />
    </Layout>
  )
}