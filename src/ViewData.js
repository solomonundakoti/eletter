import React from 'react';

const ViewData = ({ csvData }) => {
  const rows = csvData ? csvData.split('\n') : [];

  return (
    <div>
      <h2>CSV Data</h2>
      <table>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.split(',').map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;
