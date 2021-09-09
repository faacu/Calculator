import React from 'react';

const Item = (props) =>{
    return <li key={props.index}>{props.item}</li>;
}

export default Item;