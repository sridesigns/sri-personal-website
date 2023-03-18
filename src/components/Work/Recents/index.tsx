import Link from "next/link";


export default function Recents({ work }) {
  return (
    <div className="mx-auto space-y-4 mt-6">
      {work?.recentWorks?.map((recent) => (
        <div key={recent.slug}>
          <Link href={`/recent/${recent.slug}`}>
            <a>
              <h4 className="text-lg font-bold text-slate-900">{recent.title}</h4>
            </a>
          </Link>
          <p className="text-sm text-slate-700 py-2">{recent.description}</p>
        </div>
      ))}
    </div>

  )
}