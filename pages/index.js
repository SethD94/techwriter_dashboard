import React from 'react';
import Head from 'next/head';
import router from 'next/router';
import NavigationBar from '../components/Navbar/NavigationBar.js';

export default function Home() {
  
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
        </div>
    )
}