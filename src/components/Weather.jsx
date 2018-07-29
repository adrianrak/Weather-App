import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import OneDayLook from './OneDayLook';

export default class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: [],
            mainWeather: [],
            tempMax: []
        }
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Warsaw&APPID=75883e1e36c82d2615632b909385e893`)
            .then(response => response.json())
            .then(data => {
                console.log(data.list[0]);
                let forecast = data;
                console.log(forecast);

                let mainWeather = data.list[0].main;
                console.log(mainWeather);
                let tempMax = Math.round((data.list[0].main.temp_max)-273.15);
                console.log(data.list[0].main.temp);
                console.log(tempMax);

                this.setState({forecast: forecast});
                this.setState({tempMax: tempMax});
            })
            .catch(error => console.log('error', error))
    }
  
    onChangeHandle(event) {
        this.setState({cityName: event.target.value})
    }

    // onSubmit(event) {
    //     event.preventDefault();
    //     const {cityName} = this.state;
    //     // const url = 'api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=75883e1e36c82d2615632b909385e893';
    //     const url = 'http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=75883e1e36c82d2615632b909385e893';
    //     fetch(url) 
    //         .then(response => response.json())
    //         .then(responseJson => this.setState({forecast: responseJson.items}));
    // }
    render() {
        return (
            <div>
                <h1>Paris</h1>
                {/* <form onSubmit={event => this.onSubmit(event)}>
                    <label htmlFor="cityName">Search by city</label>
                    <input
                        type="text"
                        id="cityName"
                        onChange={event => this.onChangeHandle(event)}
                        value={this.state.cityName}/>
                </form> */}
                <div className="container">
                    <OneDayLook />
                </div>
                <div>
                    Pogoda jest taka jak widać: {this.state.tempMax}&deg; C;
                </div>
            </div>
        )
    }
}
