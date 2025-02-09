import {Button} from '@mui/material';
import jsPDF from 'jspdf';

const GeneratePDFButton = ({ words, settings }) => {
    const generatePDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const { cardsPerPage } = settings;

        // Define A4 size
        const pageWidth = 210;
        const pageHeight = 297;

        // Define margins
        const margin = 10;

        // Determine grid layout based on cardsPerPage
        let cols, rows;
        switch (cardsPerPage) {
            case 4:
                cols = 2;
                rows = 2;
                break;
            case 8:
                cols = 2;
                rows = 4;
                break;
            case 10:
                cols = 2;
                rows = 5;
                break;
            case 15:
                cols = 3;
                rows = 5;
                break;
            default:
                cols = 2;
                rows = 2;
        }

        const cardWidth = (pageWidth - margin * 2) / cols;
        const cardHeight = (pageHeight - margin * 2) / rows;

        // Function to split words into chunks
        const chunkArray = (array, size) => {
            const result = [];
            for (let i = 0; i < array.length; i += size) {
                result.push(array.slice(i, i + size));
            }
            return result;
        };

        // Function to reorder translations by swapping pairs
        const reorderTranslations = (translations, cols) => {
            const reordered = [];
            for (let i = 0; i < translations.length; i += 2) {
                if (i + 1 < translations.length) {
                    // Swap the current and next item
                    reordered.push(translations[i + 1]);
                    reordered.push(translations[i]);
                } else {
                    // If odd number, push the last item as is
                    reordered.push(translations[i]);
                }
            }
            return reordered;
        };

        const wordChunks = chunkArray(words, cardsPerPage);

        wordChunks.forEach((chunk, pageIndex) => {
            // Front Side
            if (pageIndex > 0) doc.addPage();

            chunk.forEach((word, index) => {
                const col = index % cols;
                const row = Math.floor(index / cols);

                const x = margin + col * cardWidth;
                const y = margin + row * cardHeight;

                // Light gray background
                doc.setFillColor(254, 254, 254);
                doc.rect(x, y, cardWidth, cardHeight, 'F');

                // Draw border
                doc.setDrawColor(0);
                doc.rect(x, y, cardWidth, cardHeight);

                // Add centered word text
                doc.setFontSize(12);
                const text = word.word;
                const textWidth = doc.getTextWidth(text);
                const textX = x + (cardWidth - textWidth) / 2;
                const textY = y + cardHeight / 2;
                doc.text(text, textX, textY, { baseline: 'middle' });
            });

            // Back Side
            doc.addPage();

            // Extract translations
            const translations = chunk.map((word) => word.translation);

            // Reorder translations by swapping pairs
            const reorderedTranslations = reorderTranslations(translations, cols);

            reorderedTranslations.forEach((translation, index) => {
                const col = index % cols;
                const row = Math.floor(index / cols);

                const x = margin + col * cardWidth;
                const y = margin + row * cardHeight;

                // Light gray background
                doc.setFillColor(254, 254, 254);
                doc.rect(x, y, cardWidth, cardHeight, 'F');

                // Draw border
                doc.setDrawColor(0);
                doc.rect(x, y, cardWidth, cardHeight);

                // Add centered translation text
                doc.setFontSize(12);
                const text = translation;
                const textWidth = doc.getTextWidth(text);
                const textX = x + (cardWidth - textWidth) / 2;
                const textY = y + cardHeight / 2;
                doc.text(text, textX, textY, { baseline: 'middle' });
            });
        });

        doc.save('flashcards.pdf');
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={generatePDF}
            disabled={words.length === 0}
            sx={{ mt: 2 }}
        >
            Generate PDF
        </Button>
    );
};

export default GeneratePDFButton;