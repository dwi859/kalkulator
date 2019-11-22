
import '../../style/style.css'

import React, { Component } from 'react';

class Tombol extends Component {

    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    };
    
    render() {
        return (
           
            <div className="wraperform">
                <from onSubmit={this.onSubmitHandler}>
                    
                    <div className="clear">
                    <button name="clear" class="button_clear" onClick={this.buttonPressed}>CLEAR</button>
                    </div>
                    <div className="tombol">
                      
                    
                    <button name="7" class="button_angka" value="7" onClick={this.buttonPressed}>7</button>
                    <button name="8" value="8" class="button_angka" onClick={this.buttonPressed}>8</button>
                    <button name="9" class="button_angka" onClick={this.buttonPressed} >9</button>
                    <button name="/" class="button_simbol" onClick={this.buttonPressed}>/</button>
                    <button name="4" class="button_angka" onClick={this.buttonPressed}>4</button>
                    <button name="5" class="button_angka" onClick={this.buttonPressed}>5</button>
                    <button name="6" class="button_angka" onClick={this.buttonPressed}>6</button>
                    <button name="*" class="button_simbol" onClick={this.buttonPressed}>x</button>
                    <button name="1" class="button_angka" onClick={this.buttonPressed}>1</button>
                    <button name="2" class="button_angka" onClick={this.buttonPressed}>2</button>
                    <button name="3" class="button_angka" onClick={this.buttonPressed}>3</button>
                    <button name="-" class="button_simbol" onClick={this.buttonPressed}>-</button>
                    <button name="0" class="zero" onClick={this.buttonPressed}>0</button>
                    <button name="=" class="button_simbol" onClick={this.buttonPressed}>=</button>
                    <button name="+" class="button_simbol" onClick={this.buttonPressed}>+</button>


                    </div>
                    
                </from>
            </div>
                
        );
    }
}

export default Tombol;