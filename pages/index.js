import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import router from 'next/router';
import NavigationBar from 'C:\\Users\\seth.delpachitra\\Project 01\\techwriter_dashboard\\components\\navbar.js';
import CardBodyExample from 'C:\\Users\\seth.delpachitra\\Project 01\\techwriter_dashboard\\components\\overviewCards.js';
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
        <CardBodyExample />
        </div>
    )
}