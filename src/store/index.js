// provider que une todo. 
// el archivo mas importante. => App. 


// importamos la funcion que crea el estado global.
import { createStore } from "redux";
import rootReducer from "../reducers";

// crear el estado

export const store = createStore(rootReducer)





