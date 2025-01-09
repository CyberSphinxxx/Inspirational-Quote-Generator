const quoteContainer = document.getElementById('quote-container');
const generateButton = document.getElementById('generate-quote');

generateButton.addEventListener('click', async () => {
    // Show a loading message while fetching the quote
    quoteContainer.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch('https://inspirobot.me/api?generate=true');
        const quoteImageUrl = await response.text();

        // Display the generated quote
        quoteContainer.innerHTML = `<img src="${quoteImageUrl}" alt="Inspirational Quote">`;
    } catch (error) {
        // Handle errors gracefully
        quoteContainer.innerHTML = '<p>Failed to load quote. Please try again!</p>';
        console.error('Error fetching quote:', error);
    }
});