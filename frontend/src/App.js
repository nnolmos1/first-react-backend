import './App.css';
import React from 'react';
import axios from 'axios';

function App() {

  React.useEffect(() => {                           //Runs after the React page loads
    axios.get("http://localhost:5000/api/message")  //Sends a GET request to Flask backend server
      .then(response => {                          
        console.log(response.data);                 //Logs the returned data (if request successful)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);                                           //Empty dependency array = only run once when the page loads

  return (
    <div>
      <h1> Frontend </h1>
    </div>
  );
}

export default App;
