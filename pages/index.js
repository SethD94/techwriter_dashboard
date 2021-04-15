import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import router from 'next/router';
import NavigationBar from './components';

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
        return <NavigationBar/>;
      </div>
    )
}