import React from "react";

function Municipio(props){
    return (
        <div>
            <option value={props.codigoIBGE}> {props.nome} </option>
        </div>
    )
}

export default Municipio