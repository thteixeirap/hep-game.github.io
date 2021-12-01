import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

// Containers (pages of the app)
import Menu from './containers/menu';
import Decks from './containers/decks';
import Tutorial from './containers/tutorial';
import Sobre from './containers/sobre';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Menu />} />
          <Route path="decks" element={<Decks />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
