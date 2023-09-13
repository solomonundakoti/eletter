// DataDisplay.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of your Spring Boot endpoint
    const apiUrl = 'http://localhost:8080/api/your-endpoint';

    // Make a GET request to the Spring Boot API
    axios.get(apiUrl)
      .then(response => {
        // Handle the response data here
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        // Handle any errors here
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Data Display</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataDisplay;
