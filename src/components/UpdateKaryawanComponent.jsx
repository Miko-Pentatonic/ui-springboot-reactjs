import React, { Component } from 'react'
import KaryawanService from '../services/KaryawanService';

class UpdateKaryawanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateKaryawan = this.updateKaryawan.bind(this);
    }

    componentDidMount(){
        KaryawanService.getKaryawanById(this.state.id).then( (res) =>{
            let karyawan = res.data;
            this.setState({firstName: karyawan.firstName,
                lastName: karyawan.lastName,
                emailId : karyawan.emailId
            });
        });
    }

    updateKaryawan = (e) => {
        e.preventDefault();
        let karyawan = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('karyawan => ' + JSON.stringify(karyawan));
        console.log('id => ' + JSON.stringify(this.state.id));
        KaryawanService.updateKaryawan(karyawan, this.state.id).then( res => {
            this.props.history.push('/karyawans');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/karyawans');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Karyawan</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateKaryawan}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateKaryawanComponent
