import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import NavigationBar from '../components/Navbar/NavigationBar.js';
import ReportCardBlock from '../components/ReportCards/ReportCardBlock.js';
import ReportTable from '../components/ReportTable/ReportTable.js';
import fetch from 'isomorphic-unfetch';

export default function Home({ userdata }) {
  const [currentUser, setCurrentUser] = useState("");
  const [userDropdownData, setUserDropdownData ] = useState(JSON.parse(userdata));
  const [userDropdownStatus, setUserDropdownStatus] = useState(false);
  const showUserDropdownStatus = () => setUserDropdownStatus(!userDropdownStatus)
  const [dataCardStatus, setDataCardStatus]=useState(false); 
  const [reports, setReports] = useState({});
  const [tableStatus, setTableStatus] = useState(false);
  const [tableData , setTableData] = useState([]);
  const getCardData = async (e) => {
        setCurrentUser(e.currentTarget.dataset.user)
        const res = await fetch ('http://localhost:8000/techwriter/' + e.currentTarget.dataset.user)
        const userReportData = await res.json()
        setDataCardStatus(true);
        setReports(userReportData);
  }
  useEffect(()=> {
    setCurrentUser(currentUser);
  },[currentUser]);

  const getTableData = async (e) => {
    const res = await fetch ('http://localhost:8000/' + e.currentTarget.dataset.reporturl + '/' + currentUser);
    const userTableData = await res.json()
    setTableStatus(true);
    setTableData(userTableData);
}

  useEffect(()=> {
    setTableData(tableData);
  },[tableData]);

   return (
      <div>
        <Head>
          <title>Working Tile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <NavigationBar 
          currentUser={currentUser}
          userDropdownStatus={userDropdownStatus}
          userDropdownData={userDropdownData}
          tableStatus={tableStatus}
          tableData={tableData}
          setUserDropdownData={setUserDropdownData}
          showUserDropdownStatus={showUserDropdownStatus}
          dataCardStatus={dataCardStatus}
          getCardData={getCardData}
          /> 
        {dataCardStatus ? <ReportCardBlock reports={reports} getTableData={getTableData}></ReportCardBlock> : null}
        {tableStatus ? <ReportTable tableData={tableData}></ReportTable> : null}         
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
  const res = await fetch ('http://localhost:8000/techwriters')
  const userdata = await res.json()

  return {props:{userdata}}
}

