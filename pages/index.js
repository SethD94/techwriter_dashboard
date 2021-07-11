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


  const { Sequelize } = require('sequelize');
  const fs  = require('fs');
  const sequelize = new Sequelize('nzteam', 'mike.treadgold', 'mtnz99', {
    dialect: 'mysql',
    dialectOptions: {
      host: 'rekall',
      multipleStatements: true
      // Your mysql2 options here
    }
  })
   
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  let sql_script = fs.readFileSync('sql_scripts\\GetWriters.sql', 'utf8');
  const users = await sequelize.query(sql_script);
  const userdata = JSON.stringify(users);
  //for (let i = 0; i < users[0].length; i++) { 
   // console.log(users[0][i].firstname );
  //}
  // Fetch data from external API
  //const res = await fetch ('http://localhost:5000/techwriters')
  //const userdata = await res.json()
  for (let i = 0; i < userdata.length; i++) { 
    //console.log(userdata[i].first_name);
  }
  // Pass data to the page via props
  return { props: { userdata } }
}

