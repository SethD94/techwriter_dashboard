import React, {useEffect, useState} from 'react';

export default function ReportTable(props) {
  const {tableData}=props;
  let data = {};
      Object.assign(data, tableData);
      return (
          <>
            <table>
              <tr key={"header"}>
                {Object.keys(tableData[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>
              {tableData.map((item) => (
                <tr key={item.id}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
            </table>
          </>
        )
}