import React, { Component } from 'react';
import Location from './Location';
import locationData from '../locationData.js';

class LocationList extends Component {
    render() {
        return (
             <div id='locations'>
                <h1 id='locations'>LOCATIONS:</h1>
                <div className='locations'>
                    {locationData.map((item,i)=>{
                        return <Location key={i} data={item}/>
                    })};
                </div>
            </div>
        );
    }
}
export default LocationList;