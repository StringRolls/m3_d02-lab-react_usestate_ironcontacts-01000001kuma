import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import contactsArray from "./contacts.json";

const five = contactsArray.slice(5, 10);

function App() {
  const [contacts, setContacts] = useState(five);

  function addRandomContact() {
    let randomIndex = Math.floor(Math.random() * contactsArray.length);
    const ale = contactsArray[randomIndex];
    if (contacts.includes(ale)) {
      addRandomContact();
    } else {
      setContacts(contacts.concat(ale).reverse());
    }
  }

  const sortName = () => {
    const sortedAgenda = contactsArray.sort((a, b) =>
      a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    );

    setContacts([...sortedAgenda]);
  };

  const sortPopularity = () => {
    const sortedContacts = contacts
      .sort((a, b) => b.popularity - a.popularity)
      .slice();

    setContacts(sortedContacts);
  };

  const deleteContact = (contactId) => {
    const filteredAgenda = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(filteredAgenda);
  };

  return (
    <div className="App">
      <h1>Fucking Lab</h1>

      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortName}>Sort by name</button>
        <button onClick={sortPopularity}>Sort by popularityContact</button>
      </div>

      <table className="table">
        <tbody>
          <tr>
            <th>Picture</th>
            <th>name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contacts.map((contact, i) => {
            return (
              <tr key={i}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt=""
                    className="table-image"
                    style={{ height: "15rem", width: "auto" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}








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

export default App;
