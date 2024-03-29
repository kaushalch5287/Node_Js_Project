import React, { useState } from 'react';
import './App.css';

const App= () => {
  const [rawMaterialName, setRawMaterialName] = useState('');
  const [materialInBy, setMaterialInBy] = useState('');
  const [approvedBy, setApprovedBy] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    console.log(`Saving: ${rawMaterialName}, ${materialInBy}, ${approvedBy}, ${date}`);
   
    setRawMaterialName('');
    setMaterialInBy('');
    setApprovedBy('');
    setDate('');
  };

  const handleClear = () => {
  
    setRawMaterialName('');
    setMaterialInBy('');
    setApprovedBy('');
    setDate('');
  };
  
  return (
    <div className="container">
      <div className="header">
        <img src="data:image/jpeg;base64,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" alt="Slack logo" className="logo" />
        <h1>Raw Material Data</h1>
      </div>

      <div className="table-container">
        <table>
          <tr>
            <th>Raw Material Name</th>
            <th>Quantity</th>
            <th>Approved By</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="rawMaterialName"
                value={rawMaterialName}
                onChange={(e) => setRawMaterialName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="materialInBy"
                value={materialInBy}
                onChange={(e) => setMaterialInBy(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="approvedBy"
                value={approvedBy}
                onChange={(e) => setApprovedBy(e.target.value)}
              />
            </td>
            <td>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>
          </tr>
        </table>
      </div>

      <div className="buttons">
        <button onClick={handleSave}>Save All</button>
        <button onClick={handleClear}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
