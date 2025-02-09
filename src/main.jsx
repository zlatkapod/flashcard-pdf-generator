import React from 'react';
import {createRoot} from 'react-dom/client'; // Correct import for createRoot
import App from './App';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';

const container = document.getElementById('root');

if (!container) {
    throw new Error("Failed to find the root element. Ensure there is an element with id 'root' in your HTML.");
}

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);