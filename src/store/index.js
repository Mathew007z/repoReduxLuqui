// este index.js en la carpeta store, va a ser el encargado de almacenar TODO nuestro estado global.

// provider.

// creamos el estado global de redux
import { createStore } from "redux";

// importamos el que combina todos los reducers
import rootReducer from "../reducers";

const store = createStore(rootReducer);



export default store;