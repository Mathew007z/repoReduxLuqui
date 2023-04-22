import { INCREMENT, DECREMENT, RESET } from "../types";


// necesitamos un estado inicial para el reducer.

const initialState = 0;


//creamos el reducer = recibe por parametro dos cosas, el state, y action.
export default function counterReducer(state = initialState ,action){

    // empezamos a desarrolar la logica de reducer. con switch.
    // el switch por parametro necesita el tipo de action.
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return initialState
        default: return state
    }

}