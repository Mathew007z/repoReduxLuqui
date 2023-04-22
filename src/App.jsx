
import './App.css'
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    //configuramos el envio de provider nativo de react redux, hacia los hijos.
    <Provider store={store}>
        <Counter/>
    </Provider>
  )
}

export default App
