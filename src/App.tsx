import { Provider } from 'react-redux';
import Home from './pages/Home';
import { store } from './redux';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
