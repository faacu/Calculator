import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const Boton = (props) =>{
    return(       
        <div>
            <div className='col'>
                <button id='borrar' className='btn btn-danger btn-sm' onClick={()=>props.limpiar()}>C</button>
            </div>
            <div> 
                <button className='btn btn-secondary' onClick={()=>props.actualizar('1')}>1</button>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('2')}>2</button>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('3')}>3</button>
                <button className='btn btn-primary' onClick={()=>props.actualizar('+')}>+</button>
            </div>
            <div>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('4')}>4</button>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('5')}>5</button>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('6')}>6</button>
                <button id='resta' className='btn btn-primary' onClick={()=>props.actualizar('-')}>-</button>
            </div>
            <div>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('7')}>7</button>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('8')}>8</button>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('9')}>9</button>
                <button id='dividir' className='btn btn-primary' onClick={()=>props.actualizar('/')}>/</button>
            </div>
            <div>
                <button id='punto' className='btn btn-primary' onClick={()=>props.actualizar('.')}>.</button>
                <button className='btn btn-secondary' onClick={()=>props.actualizar('0')}>0</button>
                <button className='btn btn-outline-success' onClick={()=>props.actualizar('=')}>=</button>
                <button id='multiplicar' className='btn btn-primary' onClick={()=>props.actualizar('*')}>*</button>
            </div>
        </div>
    );
}

export default Boton;