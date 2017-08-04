import React, { Component } from 'react';
import MenuItem from './MenuItem';
import pizzaData from '../pizzaData.js';

class MenuList extends Component{
    render(){
        return(
            <div className='menu'>
                <h1>Menu</h1>
                <div className='menu-container'>
                    {pizzaData.map((item,i)=>{
                        return <MenuItem key={i} data={item}/>
                    })};
                </div>
            </div>
        )
    }
}

export default MenuList;