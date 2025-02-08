// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import Settings from './components/Settings';
import GeneratePDFButton from './components/GeneratePDFButton';
import ImportCSVButton from './components/ImportCSVButton';
import { Container, Grid, Box, Button } from '@mui/material';
import ProfileMenu from './components/ProfileMenu';

const App = () => {
    const [words, setWords] = useState([]);
    const [settings, setSettings] = useState({
        cardsPerPage: 4,
        // Add more settings as needed
    });

    const addWord = (word) => {
        setWords([...words, word]);
    };

    const removeWord = (indexToRemove) => {
        setWords(words.filter((_, index) => index !== indexToRemove));
    };

    const editWord = (index, updatedWord) => {
        const updatedWords = words.map((word, i) => (i === index ? updatedWord : word));
        setWords(updatedWords);
    };

    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={2}>
                    {/* Left Side: Word Input and Word List */}
                    <Grid item xs={12} md={8}>
                        <WordInput addWord={addWord} />
                        <Box sx={{ mt: 2 }}>
                            <WordList words={words} removeWord={removeWord} editWord={editWord} />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <ImportCSVButton setWords={setWords} />
                        </Box>
                    </Grid>

                    {/* Right Side: Settings and Generate PDF Button */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'sticky', top: 100 }}>
                            <Settings settings={settings} setSettings={setSettings} />
                            <Box sx={{ mt: 2 }}>
                                <GeneratePDFButton words={words} settings={settings} />
                            </Box>

                            {/* Future Features: Preview, Save Buttons */}
                            <Box sx={{ mt: 2 }}>
                                <Button variant="outlined" fullWidth>
                                    Preview
                                </Button>
                                <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
                                    Save
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default App;