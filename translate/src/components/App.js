import React, { Component } from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

export class App extends Component {
  
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
