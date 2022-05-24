import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiId}
        src={`https://${siteMetadata.analytics.umamiHost}/umami.js`}
      />
    </>
  )
}

export default UmamiScript
