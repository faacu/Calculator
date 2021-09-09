import React from "react";
import Item from "./Item";

const Listado = (props) =>{
    return(
        <>
            <ul>
                {
                    props.lista.map((item, index)=>{
                        return <Item key={index} item={item} index={index}/>
                    })
                }
            </ul>
        </>
    );
}

export default Listado;