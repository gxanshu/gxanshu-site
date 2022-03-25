import Head from "next/head";
import Script from 'next/script'
import { useRouter } from "next/router";

export default function Seo(props) {
  const router = useRouter();

  const defaultMeta = {
    title: "CodeNanshu",
    siteName: "codenanshu",
    description:
      "An online portfolio and blog by Ai Anshu. Showcase of my projects, and some of my thoughts about website development.",
    url: "https://codenanshu.in",
    image: "https://codenanshu.in/favicon/large-og.png",
    type: "website",
    robots: "follow, index",
  };

  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none

  return (
    <>
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content="Ai Anshu" />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#111920" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#111920" />
    </Head>
    <Script
      id="Adsence-id"
      async
      onError={(e) => { console.log("failed to load adsence", e)}}
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6691816550079346"
      crossOrigin="anonymous"
    />
    </>
  );
}

const favicons = [
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicon/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicon/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicon/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicon/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicon/android-icon-192x192.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon-96x96.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
];
