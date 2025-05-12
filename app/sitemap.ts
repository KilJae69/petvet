import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.veterinar-bihac.ba',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.veterinar-bihac.ba/en',
          de: 'https://www.veterinar-bihac.ba/de',
          bs: 'https://www.veterinar-bihac.ba/bs'
        },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/about',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/about',
            de: 'https://www.veterinar-bihac.ba/de/about',
            bs: 'https://www.veterinar-bihac.ba/bs/about'
          },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/contact',
            de: 'https://www.veterinar-bihac.ba/de/contact',
            bs: 'https://www.veterinar-bihac.ba/bs/contact'
          },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/services',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/services',
            de: 'https://www.veterinar-bihac.ba/de/services',
            bs: 'https://www.veterinar-bihac.ba/bs/services'
          },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/services/general-care-and-treatment',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/services/general-care-and-treatment',
            de: 'https://www.veterinar-bihac.ba/de/services/general-care-and-treatment',
           bs: 'https://www.veterinar-bihac.ba/bs/services/general-care-and-treatment'
          },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/services/laboratory-diagnostics',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/services/laboratory-diagnostics',
            de: 'https://www.veterinar-bihac.ba/de/services/laboratory-diagnostics',
            bs: 'https://www.veterinar-bihac.ba/bs/services/laboratory-diagnostics'
          },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/services/surgery',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/services/surgery',
            de: 'https://www.veterinar-bihac.ba/de/services/surgery',
            bs: 'https://www.veterinar-bihac.ba/bs/services/surgery'
          },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/services/reproduction-and-obstetrics',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/services/reproduction-and-obstetrics',
            de: 'https://www.veterinar-bihac.ba/de/services/reproduction-and-obstetrics',
            bs: 'https://www.veterinar-bihac.ba/bs/services/reproduction-and-obstetrics'
          },
      },
    },
    {
      url: 'https://www.veterinar-bihac.ba/services/other-services',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.veterinar-bihac.ba/en/services/other-services',
            de: 'https://www.veterinar-bihac.ba/de/services/other-services',
            bs: 'https://www.veterinar-bihac.ba/bs/services/other-services'
          },
      },
    },
  ]
}