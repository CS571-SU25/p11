import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import '/styles/Global.css'; // Import global styles

ReactDOM.createRoot(document.getElementById('root')).render(
	<HashRouter>
		<App />
	</HashRouter>
);
