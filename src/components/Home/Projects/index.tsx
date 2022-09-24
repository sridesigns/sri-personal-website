import Link from "next/link";
import Image from "next/image";


export default function HomeWork({ home }) {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto">
      <p className="py-1 px-4 inline-flex mb-4 rounded text-sm font-semibold text-purple-500 dark:text-purple-300 bg-purple-100 dark:bg-purple-400 dark:bg-opacity-20">🤩&nbsp;&nbsp;Select Projects</p>

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
                <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50 hover:text-indigo-600 dark:hover:text-sky-400 pb-2">{project.title}</h4>
              </a>
            </Link>
            <p className="text-base font-medium text-gray-700 dark:text-gray-400 pb-4 leading-relaxed">{project.summary}</p>

            <Link href={`/projects/${project.slug}`}>
              <a>
                <button className="text-base font-semibold text-indigo-600 dark:text-sky-400 hover:text-indigo-800 dark:hover:text-sky-600 hover:underline pb-4">Read Case Study</button>
              </a>
            </Link>

          </div>
        ))}
      </div>

    </div>
  )
}