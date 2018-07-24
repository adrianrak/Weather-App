import React from 'react';
import ReactDOM from 'react-dom';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //: '',
            maxTemp: 0,
            minTemp: 0,
            temperatura: 28
        }
    }
    render() {
        return (
            <div>
                
                <h1>Temperatura wynosi: {this.state.temperatura}</h1>
            </div>
        )
    }
}