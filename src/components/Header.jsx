// src/components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProfileMenu from "./ProfileMenu.jsx";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    {/* Logo Placeholder */}
                    {/* <Box component="img" src="/logo.png" alt="Logo" sx={{ height: 40, mr: 2 }} /> */}

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        Flashcard PDF Generator
                    </Typography>
                    {/* Future: Profile/Menu can be added here */}
                    <ProfileMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;