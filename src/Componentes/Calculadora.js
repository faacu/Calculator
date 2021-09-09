import React,{useState} from 'react';
import Boton from './Boton';
import Listado from './Listado';
import "bootstrap/dist/css/bootstrap.min.css";

//VARIABLES GLOBALES
let numero1=null,numero2=null,operador='';
const historia = [];

//FUNCION PRINCIPAL
const Calculadora = () =>{
    //ESTADO
    const [resultado,setResultado] = useState('0');
    const [operacion,setOperacion] = useState('');

    //FUNCIONES POR NUMERO
    const Numero1 = (props) =>{
        setResultado('');
        setResultado(`${resultado}${props}`);
        if(props === '+' ||props === '-'||props === '/'||props === '*')
        {
            operador = props;
            setOperacion(`${numero1} ${operador}`);
            setResultado('');
        }
        else if(numero1 != null)
        {
            numero1 = numero1+props;
        }
        else numero1 = props;
    }
    const Numero2 = (props) =>{
        setOperacion(`${operacion}${props}`);
        if(props === '=')
        {
            setOperacion(`${operacion} ${props}`);
        }
        else if(numero2 != null)
        {
            numero2 = numero2+props;
        }
        else numero2 = props;
    }

    //FUNCION DE ASIGANCION DE NUMEROS
    const actualizarResultado =(props)=>{
        if(operacion === '')
        {
            Numero1(props);
        }
        else 
        {
            Numero2(props);
            if(props ==='=')
            {
                calcular();
            }
        }
    }

    //LIMPIAR DISPLAY
    const limpiarDisplay = ()=>{
        if(operacion !== '')
        {
            iniciarHistoria();
        }
        setResultado('0');
        setOperacion('');
        numero1=null;
        numero2=null;
        operador='';
    }

    //HISTORIA
    const iniciarHistoria =()=>{
        historia.push(operacion);
    }
    const limpiarHistoria = () =>{
        historia.splice(0,historia.length);
    }

    //CALCULAR EL RESULTADO
    const calcular =()=>{
        let r;
        switch(operador){
            case '+':
                r = Number(numero1) + Number(numero2);
                setOperacion(`${operacion} = ${String(r)}`);
                break;
            case '-':
                r = Number(numero1) - Number(numero2);
                setOperacion(`${operacion} = ${String(r)}`);
                break;
            case '*':
                r = Number(numero1) * Number(numero2);
                setOperacion(`${operacion} = ${String(r)}`);
                break;
            case '/':
                r = Number(numero1) / Number(numero2);
                setOperacion(`${operacion} = ${String(r)}`);
                break;
            default:
                setOperacion(`$error`);
                break;
        }
    }

    return(
        <div className='container d-flex justify-content-center'>
            <div className='col-4'>
                <div id='visor' className='d-flex justify-content-end'>
                    <h3 id='operacion'>{operacion}</h3>
                    <h3 id='operacion'>{resultado}</h3>
                </div>
                <div className='d-flex justify-content-center'>
                    <Boton actualizar={actualizarResultado} limpiar={limpiarDisplay}/>
                </div>
            </div>
            <div id='historia' className='col-2'>
                <div> 
                    <h4 className='d-flex justify-content-center'>Historial</h4>
                    <hr/>
                </div>
                <div className='historiaListado'> 
                    <Listado lista={historia}/>
                </div>
                <button className='btn btn-warning btn-sm' onClick={()=>{limpiarHistoria()}}>Limpiar Historia</button>
            </div>
        </div>
    );
}

export default Calculadora;