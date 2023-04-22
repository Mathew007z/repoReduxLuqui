

// en este archivo van a ir las accion/ funciones, que vamos a ejecutar en el componente Counter.
// y dichas acciones o funciones van a necesitar el nombre proveniente de TYPES.
import { 
    INCREMENT, 
    DECREMENT, 
    RESET 
} from "../types";

// acciones / funciones con su TIPO correspondiente.
export const incrementCount = () => ({type:INCREMENT});
export const decrementCount = () => ({type:DECREMENT});
export const reset = () => ({type:RESET});