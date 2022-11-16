import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsPage from './ProductsPage.js';
import AboutProduct from './AboutProduct.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  /*<React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    	<Routes>
    		<Route path="/" element={<App/>}/>
    		<Route path="/products" element={<ProductsPage />}/>
        <Route path="/page/:id" element={<AboutProduct />}/>
    	</Routes>
    </BrowserRouter>
  </React.StrictMode>,
  */
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

