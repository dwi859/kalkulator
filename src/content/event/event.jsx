import React,{Component} from 'react';
import '../../style/style.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isi1   : '',
            alamat : '',
            hobi   : '',
            umur: null
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let umur = this.state.umur;
        if (!Number(umur)) {
            alert("silahkan isi usia anda terlebih dahulu");
        }
    }

    onChangeHandler = (event) => {
        let isi1   = event.target.isi1;
        let alamat = event.target.alamat;
        let hobi   = event.target.hobi;
        let val = event.target.value;
        this.setState({
            [isi1]  : val,
            [alamat]:val,
            [hobi]: ''
        });
    }
    render() {
        return (
           
            <div className="wraperform">
                <from onSubmit={this.onSubmitHandler}>
                    <div className="container">
                        <div className="isi">
                            {this.state.isi1}
                        </div>
                        <div className="hasil">
                            {this.state.hasil}
                    
                        </div>
                    </div>
                    <div className="clear">
                    <button name="clear" class="button_clear">CLEAR</button>
                    </div>
                    <div className="tombol">
                      
                    
                    <button name="isi1" class="button_angka" value="7" onClick={this.onChangeHandler}>7</button>
                    <button name="8" class="button_angka" >8</button>
                    <button name="9" class="button_angka" >9</button>
                    <button name="/" class="button_simbol">/</button>
                    <button name="4" class="button_angka" >4</button>
                    <button name="5" class="button_angka" >5</button>
                    <button name="6" class="button_angka">6</button>
                    <button name="x" class="button_simbol">x</button>
                    <button name="1" class="button_angka">1</button>
                    <button name="2" class="button_angka">2</button>
                    <button name="3" class="button_angka">3</button>
                    <button name="-" class="button_simbol">-</button>
                    <button name="0" class="zero">0</button>
                    <button name="+" class="button_simbol">+</button>


                    </div>
                    
                </from>
            </div>
                
        );
    }
}

export default Form;