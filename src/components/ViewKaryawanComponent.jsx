import React, { Component } from 'react'
import KaryawanService from '../services/KaryawanService';

class ViewKaryawanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            karyawan: {}
        }
    }

    componentDidMount(){
        KaryawanService.getKaryawanById(this.state.id).then( res => {
            this.setState({karyawan: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detail Karyawan</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.karyawan.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.karyawan.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID: </label>
                            <div> { this.state.karyawan.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewKaryawanComponent
