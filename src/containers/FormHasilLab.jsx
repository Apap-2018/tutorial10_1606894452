import React from 'react';

export const FormHasilLab = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Form Hasil Lab</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}></span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Tanggal Pemeriksaan Lab</label>
                <input type="date" className="form-control" name="tanggalRujukan" defaultValue={!props.pasien.tanggalRujukan ? "" : props.pasien.tanggalRujukan}/>
            </div>
            <div className="form-group">
                <label>Jenis</label>
                <input type="text" name="poliRujukan.id" ></input>
                
            </div>
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}></span></label>
                <input type="text" name="statusPasien.id" required></input>
            </div>
            <button className="btn btn-success" value="submit">Submit</button>
        </form>
    )
}