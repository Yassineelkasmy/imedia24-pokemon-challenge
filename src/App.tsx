import { Provider } from 'react-redux';
import PokemonsGrid from './components/PokemonsGrid';
import store from './redux/store';


function App() {


  return (
    <Provider store={store}>
      <div className='bg-slate-200 h-full min-h-screen py-32'>
        <p className='text-4xl mb-10 text-center'>imedia24 Pokemon Coding Challenge</p>
        <PokemonsGrid />
      </div >
    </Provider>
  );
}



export default App;
