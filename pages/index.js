import React from 'react';
import Head from 'next/head';
import NavigationBar from '../components/Navbar/NavigationBar.js';
import ReportCard from '../components/ReportCards/ReportCards.js';
import fetch from 'isomorphic-unfetch';

export default function Home({ userdata }) {

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
  const sequelize = new Sequelize('nzteam', 'mike.treadgold', 'mtnz99', {
    dialect: 'mysql',
    dialectOptions: {
      host: 'rekall'
      // Your mysql2 options here
    }
  })

  const users = await sequelize.query("SELECT kp.firstname, GROUP_CONCAT(te.name ORDER BY te.name SEPARATOR ', ') AS 'Teams' FROM nzteam.techwriterassignment tw INNER JOIN kall.person kp ON kp.id=tw.techwriterID INNER JOIN nzteam.teams te ON te.id = tw.teamId WHERE te.isActive GROUP BY kp.id ORDER BY kp.firstname;");
  console.log(users);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // Fetch data from external API
  const res = await fetch ('http://localhost:5000/techwriters')
  const userdata = await res.json()
  for (let i = 0; i < userdata.length; i++) { 
    console.log(userdata[i].first_name);
  }
  // Pass data to the page via props
  return { props: { userdata } }
}