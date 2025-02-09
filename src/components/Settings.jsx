import {Box, FormControl, InputLabel, MenuItem, Select} from '@mui/material';

const Settings = ({ settings, setSettings }) => {
    const handleChange = (event) => {
        setSettings({
            ...settings,
            cardsPerPage: event.target.value,
        });
    };

    return (
        <Box sx={{ my: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="cards-per-page-label">Cards Per Page</InputLabel>
                <Select
                    labelId="cards-per-page-label"
                    value={settings.cardsPerPage}
                    label="Cards Per Page"
                    onChange={handleChange}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default Settings;