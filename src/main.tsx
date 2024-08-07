import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './scss/reset.scss';
import './scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
);
