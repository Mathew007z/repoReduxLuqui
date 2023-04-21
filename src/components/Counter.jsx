import React from 'react'
// redux tiene algo para ejecutar las funciones o acciones que se llama dispatch.
// el dispatch => es un disparador, que lo que hace es disparar justamente esas acciones que indicamos.
import { useDispatch, useSelector } from 'react-redux';
// tambien necesitamos importar un selector, que el selector, agarra el estado del reducer y lo trae al componente.
import { incrementCount, decrementCount, resetCount } from '../actions';



const Counter = () => {
    // el selector obtiene los datos del estado inicial
    const counter = useSelector((state) => state.counter)
    // el dispatch ejecuta o funciona de disparador de las funciones. Sin el dispatch las funciones no se ejecutan.
    const dispatch = useDispatch();

  return (
    <div>
        {counter}
        <button onClick={() => dispatch(incrementCount())}> + </button>
        <button onClick={() => dispatch(decrementCount())}> - </button>
        <button onClick={() => dispatch(resetCount())}> reset </button>
    </div>
  )
}

export default Counter;
