import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import { StyledCard} from './styles';

export default function ReportCard(props) {
  const{report, getTableData}=props;
  const [reportTitle, setReportTitle] = useState("");
  const [reportURL, setReportURL] = useState("");
  const [taskNumber, setTaskNumber] = useState(0);
  const formatReport=(report) => {
    const reportName = report[0].replace(/_/g, " ");
    const reportUrl = report[0].replace(/_/g, "");
    const value = report[1];
    setReportTitle(reportName);
    setReportURL(reportUrl);
    setTaskNumber(value);
  };

  const myFunction = () => {
    console.log(reportURL);
  }

  useEffect(()=> {
    formatReport(report);
  },[report]);


   return (
       <>
        <StyledCard>
          <ul className="card-wrapper">
            <li className="card"  data-reporturl={reportURL} onClick={getTableData}>
              <h3>{reportTitle}</h3>
              <p>{taskNumber}</p>
            </li>
          </ul>
        </StyledCard>
      </>
    )
}