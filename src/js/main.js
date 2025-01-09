const quoteContainer = document.getElementById('quote-container');
const generateButton = document.getElementById('generate-quote');

generateButton.addEventListener('click', async () => {
    quoteContainer.innerHTML = '<p>Loading...</p>'; // Show a loading message while fetching the quote

    try {
        const response = await fetch('https://inspirobot.me/api?generate=true');
        const quoteImageUrl = await response.text();

        quoteContainer.innerHTML = `<img src="${quoteImageUrl}" alt="Inspirational Quote">`; // Displays generated quote
    } catch (error) {
        quoteContainer.innerHTML = '<p>Failed to load quote. Please try again!</p>';
        console.error('Error fetching quote:', error);
    }
});