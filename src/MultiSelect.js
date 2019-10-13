import React, { Component } from "react";
import "./MultiSelect.scss";

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      id: this.props.itemId,
      value: this.props.itemValue,
      selected: !this.props.selected ? [] : this.props.selected,
      selectedOptions: [],
      inputValue: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState, snapshot) {
    if (
      nextProps.selected &&
      nextProps.selected.length === 0 &&
      prevState.inputValue === ""
    ) {
      return {
        selectedOptions: [],
        inputValue: ""
      };
    }

    return null;
  }

  onChange = e => {
    if (e.target.value.trim() !== "") {
      let newOptions = this.props.options.filter(item =>
        item[this.state.value]
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      this.setState({
        options: newOptions,
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({
        options: this.props.options,
        [e.target.name]: e.target.value
      });
    }
  };

  onOptionSelect = (e, option) => {
    let selectedOptions;
    if (e.target.checked) {
      selectedOptions = this.state.selectedOptions;
      selectedOptions.push(option);
    } else {
      selectedOptions = this.state.selectedOptions.filter(
        item => item[this.state.id] !== option[this.state.id]
      );
    }

    this.props.onSelectionChange(selectedOptions);
    this.setState({ selectedOptions: selectedOptions });
  };

  removeOption = (e, option) => {
    let selectedOptions = this.state.selectedOptions.filter(
      item => item[this.state.id] !== option[this.state.id]
    );

    this.props.onSelectionChange(selectedOptions);
    this.setState({ selectedOptions: selectedOptions });
  };

  returnOptionList = () => {
    if (this.state.options && this.state.options.length > 0) {
      return this.state.options.map(item => {
        return (
          <div key={item[this.state.id]} className="options">
            <label>
              <input
                type="checkbox"
                checked={
                  this.state.selectedOptions.filter(
                    selected => selected[this.state.id] === item[this.state.id]
                  ).length > 0
                    ? true
                    : false
                }
                value={item[this.state.id]}
                onChange={e => this.onOptionSelect(e, item)}
              />
              {item[this.state.value]}
            </label>
          </div>
        );
      });
    }
  };

  returnSelected = () => {
    return this.state.selectedOptions.map(item => (
      <div className="pill" key={item[this.state.id]}>
        {item[this.state.value]}
        <a className="pill-remove" onClick={e => this.removeOption(e, item)}>
          x
        </a>
      </div>
    ));
  };

  render() {
    return (
      <div className="multi-select">
        <div className="pill-container">{this.returnSelected()}</div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          name="inputValue"
          value={this.state.inputValue}
          onChange={this.onChange}
          className="search-input"
        />
        <div className="option-list">{this.returnOptionList()}</div>
      </div>
    );
  }
}

export default MultiSelect;
