import React, { Component } from 'react'
import KaryawanService from '../services/KaryawanService';

class CreateKaryawanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateKaryawan = this.saveOrUpdateKaryawan.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            KaryawanService.getKaryawanById(this.state.id).then( (res) =>{
                let karyawan = res.data;
                this.setState({firstName: karyawan.firstName,
                    lastName: karyawan.lastName,
                    emailId : karyawan.emailId
                });
            });
        }        
    }
    saveOrUpdateKaryawan = (e) => {
        e.preventDefault();
        let karyawan = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('karyawan => ' + JSON.stringify(karyawan));

        // step 5
        if(this.state.id === '_add'){
            KaryawanService.createKaryawan(karyawan).then(res =>{
                this.props.history.push('/karyawans');
            });
        }else{
            KaryawanService.updateKaryawan(karyawan, this.state.id).then( res => {
                this.props.history.push('/karyawans');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Tambah Karyawan</h3>
        }else{
            return <h3 className="text-center">Update Karyawan</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateKaryawan}>Save</button>
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

export default CreateKaryawanComponent
