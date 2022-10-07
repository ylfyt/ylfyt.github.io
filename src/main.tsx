import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import RootProvider from './contexts/root';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<RootProvider>
				<App />
			</RootProvider>
		</BrowserRouter>
	</React.StrictMode>
);
