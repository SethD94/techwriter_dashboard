import React, {useState} from 'react';
import Image from 'next/image';
import ReportCard from './ReportCard';
import { StyledCardBlock } from './styles';

export default function ReportCardBlock(props) {
 const {reports, getTableData} = props;
 const getReport = (reports) => {
  let reportsArray = [];
   for (let report in reports) {
    reportsArray.push([report, reports[report]]
     );
   }
   return reportsArray.map((report, index) => {
    return(<ReportCard key={index} report={report} getTableData={getTableData}></ReportCard>)
   });
 }
   return (
       <>
          <StyledCardBlock>
            <div className="wrapper">
              {getReport(reports)}
            </div>
          </StyledCardBlock>
      </>
    )
}