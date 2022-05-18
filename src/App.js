import './App.css';
import React, { Component } from 'react';
import Search from './search/searchbox.component';
import Card from './card/card.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      userNames :[],
      search:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
    .then((users)=>{
      console.log(users);
      this.setState({userNames:users})});

      }


      onchangeEvent=(e)=>{
      console.log(e.target.value);
           this.setState({
        search:e.target.value
      });
      }

  render()
   {
    const filteredList = this.state.userNames.filter((user)=>{
      return user.name.includes(this.state.search);     
      }) 
    const {onchangeEvent} = this;
    return (
    <div className="App">
    <header className="App-header">
   <Search onchangeEvent={onchangeEvent}
   type = 'search' 
   className='search-box' 
   placeholder ='Search Users' />
   <Card filteredList = {filteredList}/>
    </header>
    </div>
    
    )
  };
}

export default App;
