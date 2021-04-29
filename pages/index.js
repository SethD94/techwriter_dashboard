import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import router from 'next/router';
import SidebarNav from '../components/Sidebar/SidebarNav.js';

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
          <SidebarNav />
        </div>
    )
}