import Link from "next/link";
import Image from "next/image";


export default function HomeWork({ home }) {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto">
      <div className="lg:grid grid-cols-2 gap-6">
        {home?.caseStudies?.map((project) => (
          <div key={project.slug}>
            <div className="py-4 overflow-hidden">
              <Link href={`/projects/${project.slug}`}>
                <a>
                  <Image
                    src={project.bannerImage.url}
                    alt={project.title}
                    width={project.bannerImage.width}
                    height={project.bannerImage.height}
                    objectFit="cover"
                    className="transition-all duration-500 ease-in-out transform hover:scale-125 rounded-lg"
                  />
                </a>
              </Link>
            </div>
            <Link href={`/projects/${project.slug}`}>
              <a>
                <h4 className="text-lg font-extrabold text-slate-900 pb-2">{project.title}</h4>
              </a>
            </Link>
            <Link href={`/projects/${project.slug}`}>
              <a>
                <p className="text-sm text-slate-700 pb-4 leading-relaxed">{project.summary}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}