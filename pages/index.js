import React from 'react';
import Head from 'next/head';
import router from 'next/router';
import NavigationBar from '../components/Navbar/NavigationBar.js';
import StargazerCount from '../components/Navbar/TestAPI'
import fetch from 'isomorphic-unfetch';

export default function Home({ userdata }) {

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

Home.getInitialProps = async () => {
  const res = await fetch ('http://localhost:5000/techwriters')
  const json = await res.json()
  for (let i = 0; i < json.length; i++) { 
    console.log(json[i].first_name);
  }
  return { userdata: json }
}