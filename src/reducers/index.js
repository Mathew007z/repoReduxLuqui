// este index va a guardar todos los reducers que tengas en la app o carpeta reducers

// UNA VEZ IMPORTADOS , HAY QUE COMBINARLOS.
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";



 const rootReducer = combineReducers({

    counter: counterReducer
})

export default rootReducer;