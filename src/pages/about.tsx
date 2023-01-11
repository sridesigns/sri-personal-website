import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profilePic from "../assets/sri.png"


export default function About() {

  return (
    <Layout>
      <Head>
        <title>About &middot; Sri</title>
        <link rel="icon" href="/favicons/smileyface.png" />
      </Head>
      <Header />
      <main className="max-w-screen md:max-w-screen-md mx-6 md:mx-auto">
        <header className="pt-20 pb-10">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 space-y-4 text-base my-auto">
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-900 pb-2">✌️ Hello, I am <span className="font-extrabold italic">Sri!</span></h1>
                    <p className="text-left leading-relaxed">My full name is Sriram Venugopal. I'm an Indian <span className="italic">(he/him)</span> living in Berlin, Germany.</p>
                    <p className="text-left leading-relaxed"> I am a product designer, building delightful consumer &amp; partner experiences at
                        <Link href="https://en.zalando.de/?_rfl=de">
                            <a className= "font-bold text-slate-900 hover:bg-yellow-200 px-1 rounded-sm" target="_blank" rel="noopener noreferrer">Zalando SE.</a>
                        </Link>
                    </p>
                    <p className="text-left leading-relaxed">Before this, I was crafting exciting employee experiences and productivity tools at
                        <Link href="https://www.tcs.com/">
                            <a className= "font-bold text-slate-900 hover:bg-yellow-200 px-1 rounded-sm" target="_blank" rel="noopener noreferrer">Tata Consultancy Services &#40;TCS&#41;</a>
                        </Link>for diverse clientele across the globe.
                    </p>
                    <p className="text-left leading-relaxed">I believe design can be the fulcrum of change and when executed properly, we can create a positive and lasting impact on the planet we
                    live in, the environment, the society, and the humans.
                    </p>
                </div>
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
            </div>
        </header>

        <div className="grid grid-cols-4 gap-8 pb-12">
            <div className="col-span-2 space-y-4">
                <h4 className="text-2xl font-extrabold">Education</h4>
                <div className="space-y-1 pb-2">
                    <h6 className="text-base font-semibold text-slate-900">RMK Engineering College, Chennai</h6>
                    <p className="text-sm text-slate-700 leading-relaxed">2007 - 2011 &middot; Bachelor of Engineering in Electronics and Instrumentation</p>
                </div>
                <div className="space-y-1">
                    <h6 className="text-base font-semibold text-slate-900">St.John's Mat. Hr. Sec. School</h6>
                    <p className="text-sm text-slate-700 leading-relaxed">2005 - 2007 &middot; Higher Secondary in Science</p>
                </div>
            </div>
            <div className="col-span-2 space-y-4 text-sm">
                <h4 className=" text-2xl font-extrabold">Experience</h4>
                <div className="space-y-1 pb-2">
                    <p className="text-slate-700"><span className=" text-base font-semibold text-slate-900">Zalando SE</span>&nbsp;&middot; 2022 - Present</p>
                    <p className="text-slate-700 leading-relaxed">Product Design &middot; Zalando Marketing Services &middot; Partner Experiences. </p>
                </div>
                <div className="space-y-1">
                    <p className="text-slate-700"><span className="text-base font-semibold text-slate-900">Tata Consultancy Services</span>&nbsp;&middot; 2011 - 2021</p>
                    <p className="text-slate-700 leading-relaxed">User Experience and Service Design &middot; Global Clients &middot; B2C, B2B, &amp; B2E &middot; 
                    Design Strategy &amp; Design Systems.</p>
                </div>    
            </div>
        </div>

        <div className="col-span-2 space-y-4 text-base pt-4">
            <h4 className="text-2xl font-extrabold">Skills and Interests</h4>
            <div className="space-y-2 pb-2">
                <p className="text-slate-700 leading-relaxed pb-2">Over the years, I have been fortunate to practice design thinking, user research, field studies, 
                storytelling, product and visual design, design systems, data visualisation, illustrations, and facilitate diverse workshops for companies across the globe. <br />I also like to code occasionally. I have been experimenting with Next.js, Tailwind CSS.</p>
                <p className="text-slate-700 bg-sky-50 border border-sky-200 rounded-md p-4 text-sm">😎 Fun fact &rarr; This site is powered using the same stack  along with an headless CMS.</p>
            </div>
            <p className="text-slate-700 leading-relaxed">Outside of work, I'm mostly exploring Berlin and parts of Europe, cooking, reading, sketching, playing video games and 
                <Link href="https://youtube.com">
                    <a className= "font-bold text-slate-900 hover:bg-yellow-200 px-1 " target="_blank" rel="noopener noreferrer">getting lost on this endless rabbit hole.</a>
                </Link></p>
        </div>
      </main>
      <Footer />
    </Layout>
  )
}