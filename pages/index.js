import React, {useState} from 'react';
import Head from 'next/head';
import NavigationBar from '../components/Navbar/NavigationBar.js';
import ReportCard from '../components/ReportCards/ReportCards.js';
import fetch from 'isomorphic-unfetch';

export default function Home({ userdata }) {
  console.log({userdata});

   return (
      <div>
        <Head>
          <title>Working Tile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <NavigationBar Users= {userdata} />
          <ReportCard />         
      </div>
    )
}

/*Home.getInitialProps = async () => {
  const res = await fetch ('http://localhost:5000/techwriters')
  const json = await res.json()
  for (let i = 0; i < json.length; i++) { 
    console.log(json[i].first_name);
  }
  return {userdata: json}
}*/

export async function getServerSideProps() {
  const res = await fetch ('http://localhost:5000/techwriters')
  const userdata = await res.json()

  return { props: { userdata } }
}

