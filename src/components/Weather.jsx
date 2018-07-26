import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import OneDayLook from './OneDayLook';

export default class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            forecast: [],
            temperatura: 28
        }
    }
    // componentDidMount() {
	// 	axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=75883e1e36c82d2615632b909385e893`)
	// 	  .then(res => res.data.map(response => this.setState({
	// 		forecast: [...this.state.forecast, response]
	// 	  })));
        
	//   }

	  componentDidUpdate(){
		console.log(this.state.forecast);
	  }
    onChangeHandle(event) {
        this.setState({cityName: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        const {cityName} = this.state;
        // const url = 'api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=75883e1e36c82d2615632b909385e893';
        const url = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=75883e1e36c82d2615632b909385e893';
        fetch(url) 
            .then(response => response.json())
            .then(responseJson => this.setState({forecast: responseJson.items}));
    }
    render() {
        return (
            <div>
                <h1>Paris</h1>
                <form onSubmit={event => this.onSubmit(event)}>
                    <label htmlFor="cityName">Search by city</label>
                    <input
                        type="text"
                        id="cityName"
                        onChange={event => this.onChangeHandle(event)}
                        value={this.state.cityName}/>
                </form>
                <div className="container">
                    <OneDayLook />
                </div>
            </div>
        )
    }
}
