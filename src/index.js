import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ScotchInfoBar from "./ScotchInfoBar";
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
            // const authors = book.authors.join(', ');

            return (
              <div className="contact" key={index}>
                <h3>Team {index + 1}</h3>
                <h2>{contact.teamName}</h2>

                <div className="details">
                  <p>🆘: {contact.helpDescription}</p>
                  <p>📞: {contact.phone}</p>
                  <p>📧: {contact.email}</p>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
