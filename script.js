
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

// AI-Powered Quote Generator
const quotes = [
    "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim. — Edsger W. Dijkstra",
    "AI is likely to be the best or worst thing to happen to humanity. — Stephen Hawking",
    "The future belongs to those who see possibilities before they become obvious. — John Sculley",
    "Technology is a useful servant but a dangerous master. — Christian Lous Lange",
    "You affect the world by what you browse. — Tim Berners-Lee",
    "It has become appallingly obvious that our technology has exceeded our humanity. — Albert Einstein",
    "AI will be the best or worst thing ever for humanity. We do not yet know which. — Elon Musk",
    "The real problem is not whether machines think but whether men do. — B.F. Skinner",
    "Computers are incredibly fast, accurate, and stupid; humans are incredibly slow, inaccurate, and brilliant; together they are powerful. — Albert Einstein",
    "The only way to discover the limits of the possible is to go beyond them into the impossible. — Arthur C. Clarke",
    "First we build the tools, then they build us. — Marshall McLuhan",
    "What we know is a drop, what we don’t know is an ocean. — Isaac Newton",
    "Technology is best when it brings people together. — Matt Mullenweg",
    "Never trust a computer you can’t throw out a window. — Steve Wozniak",
    "The best way to predict the future is to invent it. — Alan Kay",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. — Bill Gates",
    "Robots are not going to replace humans, they will make their jobs much more humane. — Sabine Hauert",
    "Technology gives the quietest student a voice. — Jerry Blumengarten",
    "The danger of AI is not that it will become evil, but that it will become competent at achieving its goals. — Nick Bostrom",
    "Everything is theoretically impossible, until it is done. — Robert A. Heinlein",
    "We are stuck with technology when what we really want is just stuff that works. — Douglas Adams",
    "AI doesn’t have to be evil to destroy humanity—it could simply be competent. — Elon Musk",
    "If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner. — Omar N. Bradley"
];

document.getElementById("generate-quote").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
});

// Visitor Counter using localStorage
document.addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("visitCount");
    
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    
    localStorage.setItem("visitCount", visitCount);
    document.getElementById("visit-counter").textContent = `Visits: ${visitCount}`;
});