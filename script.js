
        // Show the scroll-up button when user scrolls down
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scrollUpBtn").style.display = "block";
            } else {
                document.getElementById("scrollUpBtn").style.display = "none";
            }
        }

        // Scroll to the top of the page when button is clicked
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }



async function fetchTechNews() {
    const newsContainer = document.getElementById('news-feed');
    newsContainer.innerHTML = '<p>Loading news...</p>';

    try {
        const response = await fetch('https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&format=json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("GDELT API Response:", data); // Debugging: Log response in console

        if (!data.documents || data.documents.length === 0) {
            throw new Error("No news articles found.");
        }

        newsContainer.innerHTML = ''; // Clear previous content

        data.documents.slice(0, 6).forEach(article => {
            newsContainer.innerHTML += `
                <div class="news-card">
                    <h3>${article.title}</h3>
                    <p>${article.excerpt || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank" class="read-more">Read More →</a>
                </div>`;
        });

    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = `<p>Failed to load news. Error: ${error.message}</p>`;
    }
}

window.addEventListener('DOMContentLoaded', fetchTechNews);