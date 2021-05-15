import React from 'react';
import Head from 'next/head';
import router from 'next/router';
import NavigationBar from '../components/Navbar/NavigationBar.js';
import StargazerCount from '../components/Navbar/TestAPI'
import fetch from 'isomorphic-unfetch';

export default function Home({ stars }) {
  
  const handleRedirectToUser = () => {
    router.push('/users');
  };

   return (
      <div>
        <Head>
          <title>Working Tile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <NavigationBar />
          <div>
              Next.js Stars: { stars }
          </div>
        </div>
    )
}

Home.getInitialProps = async () => {
  const res = await fetch ('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count, }
}