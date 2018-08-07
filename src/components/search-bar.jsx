import React, {Component} from 'react';

class SearchBar extends Component{

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  updateState = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render(){
    return (
      <input type="text" class= "form-input form-search"
      onChange={this.updateState}
      />
    )
  }
}


export default SearchBar
