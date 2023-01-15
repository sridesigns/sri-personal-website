import Link from "next/link";
import Image from "next/image";



export default function Archives({ archives }) {
  return (
    <div className="mx-auto space-y-4 mt-6">
      {archives?.archives?.map((archive) => (
        <div key={archive.slug}>
          <Link href={`/work/${archive.slug}`}>
            <a>
              <h4 className="text-lg font-bold text-slate-900">{archive.title}</h4>
            </a>
          </Link>
          <p className="text-sm text-slate-700 py-2">{archive.summary}</p>
        </div>
      ))}
    </div>

  )
}