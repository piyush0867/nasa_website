document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to NASA website!');
    
    // Example function to fetch latest news
    function fetchLatestNews() {
        // Fetch news from an API (placeholder URL)
        fetch('https://api.nasa.gov/news')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Process and display news data
            })
            .catch(error => console.error('Error fetching news:', error));
    }

    fetchLatestNews();
});