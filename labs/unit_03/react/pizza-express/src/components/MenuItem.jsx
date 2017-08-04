import React, { Component } from 'react';

class MenuItem extends Component{
  render(){
    return (
      <div className="menu-item">
        <img src={this.props.data.image}/>
        <div className='menu-description'>
          <div className="menu-item-name">{this.props.data.name}</div>
          <p>price:{this.props.data.price}</p>
          <p>{this.props.data.description}</p>
        </div>
        </div>
    );
  }
}
export default MenuItem;