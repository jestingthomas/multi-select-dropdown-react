import React, { Component } from "react";
import "./App.scss";

import MultiSelect from "./MultiSelect";

class App extends Component {
  state = {
    countries: [
      { CountryID: "1", CountryName: "Afghanistan" },
      { CountryID: "2", CountryName: "Albania" },
      { CountryID: "3", CountryName: "Algeria" },
      { CountryID: "4", CountryName: "Andorra" },
      { CountryID: "5", CountryName: "Angola" },
      { CountryID: "6", CountryName: "Antigua and Barbuda" },
      { CountryID: "7", CountryName: "Argentina" },
      { CountryID: "8", CountryName: "Armenia" },
      { CountryID: "9", CountryName: "Australia" },
      { CountryID: "10", CountryName: "Austria" },
      { CountryID: "11", CountryName: "Azerbaijan" },
      { CountryID: "12", CountryName: "Bahamas" }
    ],
    selectedCountries: []
  };

  onCountrySelection = selection => {
    this.setState({ selectedCountries: selection });
  };

  render() {
    return (
      <>
        <div style={{ width: "100%" }}>
          <h1
            style={{ margin: "0px auto", width: "35%", padding: "4rem 0 0 0" }}
          >
            Multi Select Dropdown for ReactJS
          </h1>
        </div>
        <div className="App">
          <MultiSelect
            placeholder="Country"
            itemId="CountryID"
            itemValue="CountryName"
            selected={this.state.selectedCountries}
            onSelectionChange={this.onCountrySelection}
            options={this.state.countries}
          />
        </div>
      </>
    );
  }
}

export default App;
