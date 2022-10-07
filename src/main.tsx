import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  MemoryRouter } from 'react-router-dom';
import App from './App';
import RootProvider from './contexts/root';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MemoryRouter basename={import.meta.env.BASE_URL}>
			<RootProvider>
				<App />
			</RootProvider>
		</MemoryRouter>
	</React.StrictMode>
);
