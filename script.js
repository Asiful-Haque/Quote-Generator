const btn = document.querySelector(".btn-animated");
const content = document.querySelector(".quote-text");
const author = document.querySelector(".quote-author");

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data.content);
        content.innerText = `"${data.content}"`;
        author.innerText = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

btn.addEventListener("click", function() {
    getQuote(api_url);
});

// Initial call to get a quote when page loads 
document.addEventListener('DOMContentLoaded', function() {
    getQuote(api_url);
});
