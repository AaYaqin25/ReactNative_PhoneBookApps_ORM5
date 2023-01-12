import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/app/store';
import User from './src/features/user/User';

function App() {
  return (
    <Provider store={store}>
        <User />
    </Provider>
  )
}


export default App;