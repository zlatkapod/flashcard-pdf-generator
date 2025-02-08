// src/components/WordList.jsx
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WordList = ({ words, removeWord }) => {
    if (words.length === 0) {
        return (
            <Typography variant="h6" color="textSecondary">
                No words added yet. Start adding some!
            </Typography>
        );
    }

    return (
        <Box sx={{ mt: 2 }}>
            <List>
                {words.map((word, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => removeWord(index)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={word.word}
                            secondary={word.translation}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default WordList;