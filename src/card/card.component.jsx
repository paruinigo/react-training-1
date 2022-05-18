import React, { Component } from 'react';
import './cardstyle.css';
class Card extends Component {
  
  render()
   {
    const {filteredList} = this.props;
    return (
    <div className='card'>
        {filteredList.map((t1)=>{ 
            return(
                 <div className='card-container'> 
            <img src={`https://robohash.org/${t1.id}?set=set4`} alt = {`user ${t1.name}`}/> 
             <p key ={t1.id}>{t1.name}</p>
            </div>)
    })}
    </div>
    
    )
  };
}

export default Card;
