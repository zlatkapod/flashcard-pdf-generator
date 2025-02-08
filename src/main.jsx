// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// Select the root DOM node
const container = document.getElementById('root');

// Ensure the container exists to prevent errors
if (!container) {
    throw new Error("Failed to find the root element. Ensure there is an element with id 'root' in your HTML.");
}

// Create a root.
const root = createRoot(container);

// Initial render
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);