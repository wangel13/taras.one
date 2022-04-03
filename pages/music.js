import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Soundcloud from '@/components/embeddings/Soundcloud'

const tracks = ['1243533106', '1172495164', '1243543321', '1243544074']

export default function Projects() {
  return (
    <>
      <PageSEO title={`Music - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Music
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Writing music is my hobby. In the music world i known as{' '}
            <span className="font-semibold text-red-600">Ramen-Ya</span>. You can listen to my
            tracks on streaming services or on this page.
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap gap-8">
            {tracks.map((trackId, index) => (
              <Soundcloud trackId={trackId} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
