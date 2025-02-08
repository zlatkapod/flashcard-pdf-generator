// src/components/WordInput.jsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const WordInput = ({ addWord }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word && translation) {
            addWord({ word, translation });
            setWord('');
            setTranslation('');
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
            />
            <TextField
                label="Translation"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                required
                sx={{ mr: 2 }}
            />
            <Button type="submit" variant="contained">
                Add
            </Button>
        </Box>
    );
};

export default WordInput;