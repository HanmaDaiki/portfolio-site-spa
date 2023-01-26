import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';

import App from './components/App/App';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading... </div>}>  
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


