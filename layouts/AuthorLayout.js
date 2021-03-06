import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-2">
          <h1 className="text-2xl font-semibold leading-relaxed tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-4xl">
            Hi, I'm Taras Protchenko, I'm a Frontend developer.
          </h1>
          <h2 className="text-2xl font-light leading-relaxed tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-2xl">
            I make the world a better place by making quality software.
          </h2>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt={name}
              width="192px"
              height="192px"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOssXpbDwAFAQIk5PtssAAAAABJRU5ErkJggg=="
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-semibold leading-8 tracking-tight">{name}</h3>
            {/*<div className="text-gray-500 dark:text-gray-400">{occupation}</div>*/}
            {/*<div className="text-gray-500 dark:text-gray-400">{company}</div>*/}
            <div className="flex space-x-3 pt-2">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
