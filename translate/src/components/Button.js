import React, { Component } from "react";
import Context from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

export class Button extends Component {
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <Context.Consumer>
          {({language}) => (language === "english" ? "Submit" : "Voorleggen")}
        </Context.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
