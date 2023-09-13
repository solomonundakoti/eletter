
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUpload from './FileUpload';
import ViewData from './ViewData';
import DataDisplay from './DataDisplay'; // Import the DataDisplay component


function App() {
  const [csvData, setCsvData] = useState(null);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>CSV File Upload</h1>
        </header>
        <Routes>
          <Route path="/view-data" element={<ViewData csvData={csvData} />} />
          <Route path="/" element={<FileUpload setCsvData={setCsvData} />} />
          <Route path="/data-display" element={<DataDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

// import FileUpload from './FileUpload';
// import ViewData from './ViewData';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>CSV File Upload</h1>
//         </header>
//         <Routes>
//           <Route path="/view-data" element={<ViewData />} />
//           <Route path="/" element={<FileUpload />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

