
// ACTION NECESITA LOS NOMBRES DE TYPES PARA ENTENDER COMO SE LLAMARA LA ACCION A EJECUTAR
// ACTION = FUNCTION
import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT } from "../types"; 

// funciones / acciones
export const incrementCount = () => ({type:INCREMENT_COUNT});
export const decrementCount = () => ({type:DECREMENT_COUNT});
export const resetCount = () => ({type:RESET_COUNT});