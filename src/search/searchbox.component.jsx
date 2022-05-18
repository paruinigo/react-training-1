
import React, { Component } from 'react';
import './searchbox.css';

class Search extends Component {
  render()
   {
      const {onchangeEvent, className, placeholder, type} = this.props;
    return (
    <div>
    <input 
    className={className} 
    type = {type}
    placeholder ={placeholder}
    onChange={onchangeEvent}/>
    </div>    
    )
  };
}

export default Search;
