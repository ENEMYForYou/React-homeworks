import React, { Component, createContext } from "react";

const Context = createContext();

export default class ThemeProvider extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    this.setState({ type: this.state.type === "dark" ? "light" : "dark" });
  };

  state = {
    type: "light",
    themeConfig: {
      light: {
        headerBg: "#F7B30C",
        fontColor: "black",
        bodyBg: "#fff",
      },
      dark: {
        headerBg: "#3c3c3c",
        fontColor: "white",
        bodyBg: "rgb(40, 6, 87, 0.8)",
      },
    },
    toggleTheme: this.toggleTheme,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
