
// importamos las acciones que luego utilizaremos como disparador el dispatch para ejecutarlas.
import { incrementCount, decrementCount, reset } from '../actions/index';
// necesitamos un dispatch
import { useDispatch, useSelector } from 'react-redux';
// obtener el estado o initialState del counter.

const Counter = () => {
// obtener primero el estado.
  const counter = useSelector((state) => state.counter) 

  const dispatch = useDispatch();


  return(
    <div>
      {counter}
      <button onClick={() => dispatch(incrementCount())}> + </button>
      <button onClick={() => dispatch(decrementCount())}> - </button>
      <button onClick={()=> dispatch(reset())}> reset </button>
    </div>
  )
}

export default Counter;



