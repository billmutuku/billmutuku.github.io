
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
    const apiKey = 'e9895e3b02204c63b5d014b9b7e220ab';
    const newsContainer = document.getElementById('news-feed');

    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`);
        const data = await response.json();

        console.log("API Response:", data); // Debugging step

        if (data.status !== "ok") {
            throw new Error(data.message || "Error fetching news");
        }

        newsContainer.innerHTML = ''; // Clear previous content
        data.articles.slice(0, 6).forEach(article => {
            newsContainer.innerHTML += `
                <div class="news-card">
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank" class="read-more">Read More →</a>
                </div>`;
        });

    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = `<p>Failed to load news. Error: ${error.message}</p>`;
    }
}

window.addEventListener('DOMContentLoaded', fetchTechNews);