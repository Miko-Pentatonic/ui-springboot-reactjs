import React, { Component } from 'react'
import KaryawanService from '../services/KaryawanService';

class ListKaryawanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            karyawans: []
        }
        this.addKaryawan = this.addKaryawan.bind(this);
        this.editKaryawan = this.editKaryawan.bind(this);
        this.deleteKaryawan = this.deleteKaryawan.bind(this);
    }

    deleteKaryawan(id){
        KaryawanService.deleteKaryawan(id).then( res => {
            this.setState({karyawans: this.state.karyawans.filter(karyawan => karyawan.id !== id)});
        });
    }
    viewKaryawan(id){
        this.props.history.push(`/view-karyawan/${id}`);
    }
    editKaryawan(id){
        this.props.history.push(`/add-karyawan/${id}`);
    }

    componentDidMount(){
        KaryawanService.getKaryawans().then((res) => {
            this.setState({ karyawans: res.data});
        });
    }

    addKaryawan(){
        this.props.history.push('/add-karyawan/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">List Karyawan</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addKaryawan}>Tambah Karyawan</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.karyawans.map(
                                        karyawan => 
                                        <tr key = {karyawan.id}>
                                             <td> { karyawan.firstName} </td>   
                                             <td> {karyawan.lastName}</td>
                                             <td> {karyawan.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editKaryawan(karyawan.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteKaryawan(karyawan.id)} className="btn btn-danger">Hapus </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewKaryawan(karyawan.id)} className="btn btn-success">Lihat </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListKaryawanComponent
