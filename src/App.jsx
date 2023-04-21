import Counter from './components/counter'
import './App.css'
import store from './store'
import {Provider} from 'react-redux';



function App() {

  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default App
