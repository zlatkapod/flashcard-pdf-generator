import {useState} from 'react';
import Header from './components/Header';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import Settings from './components/Settings';
import GeneratePDFButton from './components/GeneratePDFButton';
import ImportCSVButton from './components/ImportCSVButton';
import {Box, Button, Container, Grid} from '@mui/material';
import { Analytics } from "@vercel/analytics/react"

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
                    <Grid item xs={12} md={8}>
                        <WordInput addWord={addWord} />
                        <Box sx={{ mt: 2 }}>
                            <WordList words={words} removeWord={removeWord} editWord={editWord} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'sticky', top: 100 }}>
                            <Settings settings={settings} setSettings={setSettings} />
                            <Box sx={{ mt: 2 }}>
                                <GeneratePDFButton words={words} settings={settings} />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Button variant="outlined" fullWidth>
                                    Preview
                                </Button>
                                <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
                                    Save
                                </Button>
                                <ImportCSVButton setWords={setWords} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Analytics />
        </>
    );
};

export default App;