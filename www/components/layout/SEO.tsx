import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface SEOProps {
  pageTitle?: string;
}

const SEO: React.FC<SEOProps> = ({ pageTitle }) => {
  const router = useRouter();

  return (
    <Head>
      {pageTitle ? (
        <title>{pageTitle} &middot; Pinjollist</title>
      ) : (
        <title>Pinjollist &middot; Database Jasa P2P Lending yang Berizin OJK</title>
      )}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Database jasa P2P Lending yang berizin OJK." />
      <meta property="og:site_name" content="Pinjollist" />
      <meta property="og:title" content={pageTitle || 'Pinjollist'} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://pinjollist.now.sh${router ? router.pathname : '/'}`}
      />
      <meta property="og:description" content="Database jasa P2P Lending yang berizin OJK." />
      <meta
        property="og:image"
        content="https://pinjollist.now.sh/static/images/pinjollist-og.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={`https://pinjollist.now.sh${router ? router.pathname : '/'}`} />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
