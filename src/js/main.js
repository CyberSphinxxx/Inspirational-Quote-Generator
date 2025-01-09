const quoteContainer = document.getElementById('quote-container');
const quoteImage = document.getElementById('quote-image');
const generateButton = document.getElementById('generate');
const saveButton = document.getElementById('save-btn');
const savedQuotes = document.getElementById('saved-quotes');
const savedList = document.getElementById('saved-list');
const themeToggle = document.getElementById('theme-toggle');

let currentQuoteUrl = '';

async function generateQuote() {
    try {
        quoteContainer.innerHTML = 'Loading...';
        const response = await fetch('https://inspirobot.me/api?generate=true');
        currentQuoteUrl = await response.text();
        
        quoteImage.src = currentQuoteUrl;
        quoteImage.style.display = 'block';
        quoteContainer.innerHTML = '';
        quoteContainer.appendChild(quoteImage);
        quoteContainer.classList.add('fade-in');
        
        setTimeout(() => {
            quoteContainer.classList.remove('fade-in');
        }, 500);
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteContainer.textContent = 'Oops! Something went wrong. Please try again.';
    }
}

function saveQuote() {
    if (currentQuoteUrl) {
        const savedQuote = document.createElement('li');
        savedQuote.innerHTML = `
            <img src="${currentQuoteUrl}" alt="Saved Quote">
            <button class="remove-btn">Remove</button>
        `;
        savedList.appendChild(savedQuote);
        savedQuotes.style.display = 'block';

        savedQuote.querySelector('.remove-btn').addEventListener('click', () => {
            savedList.removeChild(savedQuote);
            if (savedList.children.length === 0) {
                savedQuotes.style.display = 'none';
            }
        });
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

generateButton.addEventListener('click', generateQuote);
saveButton.addEventListener('click', saveQuote);
themeToggle.addEventListener('click', toggleTheme);

// Generate initial quote
generateQuote();