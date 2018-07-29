import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class OneDayLook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <div className="card" style={{width: '12rem'}}>
                        <i className="fas fa-sun" style={{fontSize: '80px'}}></i>
                        <div className="card-body">
                            <h5 className="card-title">27.07</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p>Max Temp: 36</p>
                                </div>
                                <div className="col-6">
                                    <p>Min Temp: 36</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary">Hour</a>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card" style={{width: '12rem'}}>
                        <i className="fas fa-sun" style={{fontSize: '80px'}}></i>
                        <div className="card-body">
                            <h5 className="card-title">27.07</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p>Max Temp: 36</p>
                                </div>
                                <div className="col-6">
                                    <p>Min Temp: 36</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary">Hour</a>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card" style={{width: '12rem'}}>
                        <i className="fas fa-sun" style={{fontSize: '80px'}}></i>
                        <div className="card-body">
                            <h5 className="card-title">27.07</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p>Max Temp: 36</p>
                                </div>
                                <div className="col-6">
                                    <p>Min Temp: 36</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary">Hour</a>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card" style={{width: '12rem'}}>
                        <i className="fas fa-sun" style={{fontSize: '80px'}}></i>
                        <div className="card-body">
                            <h5 className="card-title">27.07</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p>Max Temp: 36</p>
                                </div>
                                <div className="col-6">
                                    <p>Min Temp: 36</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary">Hour</a>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card" style={{width: '12rem'}}>
                        <i className="fas fa-sun" style={{fontSize: '80px'}}></i>
                        <div className="card-body">
                            <h5 className="card-title">27.07</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p>Max Temp: 36</p>
                                </div>
                                <div className="col-6">
                                    <p>Min Temp: 36</p>
                                </div>
                            </div>
                            {/* <Link to="/hourforecast" className="btn btn-primary">Hour</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}