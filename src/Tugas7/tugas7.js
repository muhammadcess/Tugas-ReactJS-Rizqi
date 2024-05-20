import React from "react";

function Tugas7(props) {
  return (
    <div className="box">
      <h1 className="title">Data diri peserta kelas ReactJs</h1>
      <hr />
      <ul className="paragraph">
        <li>
          <strong>Nama Lengkap : </strong>
          {props.namaLengkap}
        </li>
        <li>
          <strong>Email : </strong>
          {props.email}
        </li>
        <li>
          <strong>Kelas : </strong>
          {props.kelas}
        </li>
      </ul>
    </div>
  );
}

export default Tugas7;