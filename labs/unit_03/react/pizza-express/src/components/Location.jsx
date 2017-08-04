import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
           <div className="location">
          <div>{this.props.data.name}</div>
          <p>{this.props.data.address}</p>
          <p>{this.props.data.phone}</p>
        </div>
        );
    }
}
export default Location;