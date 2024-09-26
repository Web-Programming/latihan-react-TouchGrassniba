import React from "react";

function Hello(props){
    const{nama,pesan} = props;
    return <h1>Halo bro {nama},{pesan}</h1>;
}

Hello.defaultProps={
    nama:"Disini Barangnya",
    pesan:"Murah Murah",
}

export default Hello;