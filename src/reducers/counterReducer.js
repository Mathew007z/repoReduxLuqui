
import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../types";


// Vamos a crear el reducer.

const initialState = 0;

// crear el reducer
// y el reducer lleva un estado y un action
export default function counterReducer(state = initialState, action){

    // se crean los casos.
    switch(action.type){
        case INCREMENT_COUNT:
            return state + 1;
        
        case DECREMENT_COUNT:
            return state - 1;
        
        case RESET_COUNT:
            return initialState;
        // tiene siempre un caso por default 
        default:
            return state;
    }
}