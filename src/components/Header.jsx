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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        Flashcard PDF Generator
                    </Typography>
                    <ProfileMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;