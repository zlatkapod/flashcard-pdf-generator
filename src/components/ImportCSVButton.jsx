import Button from '@mui/material/Button';
import {Box} from '@mui/material';

const ImportCSVButton = ({setWords}) => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            parseCSV(text);
        };
        reader.readAsText(file);
    };

    const parseCSV = (text) => {
        const lines = text.trim().split('\n');
        const parsedWords = lines
            .map((line) => {
                const [word, translation] = line.split(',').map((item) => item.trim());
                // Ensure both word and translation exist
                if (word && translation) {
                    return {word, translation};
                }
                return null;
            })
            .filter((item) => item !== null);
        setWords(parsedWords);
    };

    return (
        <Box>
            <Button variant="outlined" component="label" fullWidth sx={{
                mt: 4, borderColor: 'darkorange',
                color: 'darkorange',
                '&:hover': {
                    borderColor: 'darkorange',
                    backgroundColor: 'rgba(255, 140, 0, 0.1)',
                }
            }}>
                Import CSV
                <input type="file" accept=".csv" hidden onChange={handleFileUpload}/>
            </Button>
        </Box>
    );
};

export default ImportCSVButton;