// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // Set to 'light' for a light theme
        primary: {
            main: '#1976d2', // Customize as needed
        },
        secondary: {
            main: '#dc004e', // Customize as needed
        },
        background: {
            default: '#f5f5f5', // Light grey background
            paper: '#ffffff', // White paper
        },
        text: {
            primary: '#000000', // Black text
            secondary: '#555555', // Dark grey text
        },
    },
    typography: {
        // Customize typography if needed
    },
});

export default theme;