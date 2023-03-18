import Link from "next/link";


export default function Archives({ work }) {
  return (
    <div className="mx-auto space-y-4 mt-6">
      {work?.archives?.map((oldProject) => (
        <div key={oldProject.slug}>
          <Link href={`/archive/${oldProject.slug}`}>
            <a>
              <h4 className="text-lg font-bold text-gray-900 tracking-tight">{oldProject.title}</h4>
            </a>
          </Link>
          <p className=" font-writer text-sm text-gray-700 py-2 tracking-tight">{oldProject.summary}</p>
        </div>
      ))}
    </div>

  )
}