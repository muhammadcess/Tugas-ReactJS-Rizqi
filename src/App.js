import React from "react";
import "./App.css";
import Tugas6 from "./Tugas6/tugas6";
import Tugas7 from "./Tugas7/tugas7";
import Tugas8 from "./Tugas8/tugas8";

function App() {
  return (
    <div className="App">
      <Tugas6 name="Rizqi" />
      
      <Tugas7
        namaLengkap="Muhammad Rizqi"
        email="muh52464@smk.belajar.id"
        kelas="XII Sija"/>
      <Tugas8 />
    </div>
  );
}

export default App;