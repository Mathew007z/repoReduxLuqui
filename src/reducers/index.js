// archivo padre index js de reducers, que aca en este archivo se combinaran TODOS los reducers
// que tengas, y una ves combinados, los envias al store.

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
//  otro reducer
// otro reducer



const rootReducer = combineReducers({
    // el primer nombre es eleccion pero tiene que ser descriptivo alusivo a que hace el reducer.
    counter : counterReducer,
    
})


export default rootReducer;


