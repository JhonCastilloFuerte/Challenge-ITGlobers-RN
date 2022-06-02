import Main from '@views/Main';
import React from 'react';
import { store } from '@store/index'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default App;
