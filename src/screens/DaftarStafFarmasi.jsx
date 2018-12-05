import React from 'react';
import { DaftarStafFarmasiRow } from '../components/DaftarStafFarmasiRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';
export class DaftarStafFarmasi extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */


	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listFarmasi: []
		}
		Appointment.getAllFarmasi().then(response =>{
			this.setState({
				loading:false,
				listFarmasi:response.result
			})
		})
	}
	

	render() {
		
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Farmasi']}>
                    <DaftarStafFarmasiRow listFarmasi={this.state.listFarmasi}/>
                </TableContainer>
            )
        }
	}
}