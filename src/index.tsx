import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './Hello';


import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';

const store = createStore<IStoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
