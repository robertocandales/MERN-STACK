import React from 'react';
import { Provider } from 'react-redux';
import generateStore from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './component/NavBar';
import ShoppingList from './component/ShoppingList';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className='App'>
        <NavBar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
