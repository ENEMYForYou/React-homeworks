import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import withTheme from "../../hoc/withTheme";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.addContact({ name, number });

    this.setState({ name: "", number: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label className={styles.contactLabel}>
          Name
          <input
            className={styles.conactInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label className={styles.contactLabel}>
          Number
          <input
            className={styles.conactInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={styles.contactSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

export default withTheme(ContactForm);
