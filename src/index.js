import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [contacts, setContacts] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://amrockthesourcefunctions.azurewebsites.net/api/GetContacts?code=/aocucrqwJJyACbVAAjWIEzskPnahJSeHzrYtmqkUAGfs1ekbuSHbA=="
    );

    setContacts(response.data);
  };

  return (
    <div className="App">
      <h1>Amrock Contacts</h1>
      <h2>Fetch a list of Contacts from an API and display them</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="contacts">
        {contacts &&
          contacts.map((contact, index) => {
            
            return (
              <div className="contact" key={index}>
                <h3>Team {index + 1}</h3>
                <h2>{contact.teamName}</h2>

                <div className="details">
                  <p><span role="img" aria-label="Help">🆘</span>: {contact.helpDescription}</p>
                  <p><span role="img" aria-label="Phone">📞</span>: {contact.phone}</p>
                  <p><span role="img" >📧</span>: {contact.email}</p> 
                </div>
              </div>
            );
          })}
      </div>

      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
