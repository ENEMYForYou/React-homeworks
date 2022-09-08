import React, { Component } from "react";

import Layout from "./Layout/Layout";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
// import Toggler from "./Toggler/Toggler";
import ThemeContext from "../contexts/ThemeContext";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const checkOnExist = this.state.contacts.find(
      (contact) => contact.name === name
    );

    const checkLength = (string) => string.length < 1;

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (checkLength(`${name}`) || checkLength(`${number}`)) {
      alert("Please, fill in all required entry fields");
      return;
    }

    if (checkOnExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };
  changeFilter = (filter) => {
    this.setState({ filter });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <ThemeContext>
        <Layout>
          <ThemeSelector toggleTheme={this.toggleTheme} />
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          {contacts.length >= 2 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}

          <ContactList
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          />

          {/* <Toggler
          render={({ isOpen, toggle }) => (
            <ContactList
              contacts={filteredContacts}
              onRemoveContact={this.removeContact}
            />
          )}
        /> */}
          {/* <Toggler>
            {({ isOpen, onToggle }) => (
              <>
                <button type="button" onClick={onToggle}>
                  {isOpen ? "Hide" : "Show"}
                </button>
                {isOpen && (
                  <ContactList
                    contacts={filteredContacts}
                    onRemoveContact={this.removeContact}
                  />
                )}
              </>
            )}
          </Toggler>

          <Toggler>
            {({ isOpen, onToggle }) => (
              <>
                <label>
                  <input type="checkbox" checked={isOpen} onChange={onToggle} />
                  {isOpen ? "Hide" : "Show"}
                </label>
                {isOpen && (
                  <ContactList
                    contacts={filteredContacts}
                    onRemoveContact={this.removeContact}
                  />
                )}
              </>
            )}
          </Toggler> */}
        </Layout>
      </ThemeContext>
    );
  }
}
