import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
//import { mockServer } from '../src/services/mockserver.js';

/*if (process.env.NODE_ENV === 'development') {
	mockServer({ environment: 'development' });
}*/

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
