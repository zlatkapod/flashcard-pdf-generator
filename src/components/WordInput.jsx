import {useRef, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';

const WordInput = ({ addWord }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    // Create a ref for the "Word" input field
    const wordInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word.trim() && translation.trim()) {
            addWord({ word: word.trim(), translation: translation.trim() });
            setWord('');
            setTranslation('');
            // After submitting, focus back on the "Word" input field
            if (wordInputRef.current) {
                wordInputRef.current.focus();
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
            <TextField
                label="Word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                required
                sx={{ mr: 2 }}
                inputRef={wordInputRef} // Attach the ref to the "Word" input
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // Prevent form submission on Enter in "Word" field
                        // Move focus to the "Translation" input
                        const nextSibling = e.target.nextSibling;
                        if (nextSibling) {
                            nextSibling.focus();
                        }
                    }
                }}
            />
            <TextField
                label="Translation"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                required
                sx={{ mr: 2 }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit(e); // Submit the form when Enter is pressed in "Translation" field
                    }
                }}
            />
            <Button type="submit" variant="contained">
                Add
            </Button>
        </Box>
    );
};

export default WordInput;