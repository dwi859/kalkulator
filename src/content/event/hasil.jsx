  
import React, { Component } from 'react';

class Hasil extends Component {
    render() {
        return (
            <div className="container">
            
            <div className="hasil">
            <p className="hasil">{this.props.results}</p>
        
            </div>
        </div>
               
               
        );
    }
}


export default Hasil;