A simple multiselect dropdown.

## Usage

`<MultiSelect
  placeholder="Country"
  itemId="CountryID"
  itemValue="CountryName"
  selected={this.state.selectedCountries}
  onSelectionChange={this.onCountrySelection}
  options={this.state.countries}
/>`
