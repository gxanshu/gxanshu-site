const baseUrl = "https://github.com/aianshume/codenanshu";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Ai Anshu. All Rights Reserved.`,
  postPerPage: 9,
  algolia: {
    apiKey: "df1dcc41f7b8e5d68e73dd56d1e19701",
    indexName: "chakra-ui",
    inputSelector: "#algolia-search",
  },
  author: {
    name: "Ai Anshu",
    github: "https://github.com/aianshume",
    twitter: "https://twitter.com/aianshume",
    instagram: "https://instagram.com/aianshu",
    email: "aianshume@yahoo.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  openCollective: {
    url: "https://opencollective.com/chakra-ui",
  },
  discord: {
    url: "https://discord.gg/chakra-ui",
  },
  youtube: "https://youtube.com/c/CodeNanshu",
  seo: {
    title: "CodeNanshu",
    titleTemplate: "%s - CodeNanshu",
    description: "Content based platefrom for developer to learn how to code.",
    siteUrl: "https://codenanshu.in",
    twitter: {
      handle: "@aianshume",
      site: "@aianshume",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://codenanshu.in",
      title: "CodeNanshu",
      description:
        "Content based platefrom for developer to learn how to code.",
      site_name:
        "CodeNanshu: Content based platefrom for developer to learn how to code.",
      images: [
        {
          url: "https://codenanshu.in/og-image.png",
          width: 1240,
          height: 480,
          alt: "CodeNanshu: Content based platefrom for developer to learn how to code.",
        },
        {
          url: "https://codenanshu.in/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "CodeNanshu: Content based platefrom for developer to learn how to code.",
        },
      ],
    },
  },
};

export { baseUrl };
export default siteConfig;
