
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
		
		// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dynamic Story Loading Effect
window.addEventListener("DOMContentLoaded", () => {
    const storyText = document.getElementById("story-text");
    const fullStory = "How did I end up in tech? Well, I can confidently say that no matter how many times I deviated, the path always led me back. Here’s my story.

My first real interaction with a computer was in high school, during my computer studies class. Sounds great, right? Well, it didn’t last long—I soon found myself in serious trouble. Why? Because instead of revising for CAT exams, I was busy racing through Need for Speed: Most Wanted. Now, that’s not the actual problem—the real issue was my terrible tab-switching reflexes. Before I could hit Alt + Tab, my computer teacher was already standing behind me. Busted.

As a result, I was given lab cleaning duty as punishment. Naturally, I asked if there was an alternative sentence—and that’s how I suddenly found myself taking Business Studies instead. Why did I pick switching subjects over cleaning labs? To this day, I have no idea.

Fast forward to university, and once again, I was at a crossroads. I had to choose between Actuarial Science (backed by my Business Studies grade) and Computer Science (backed by my Physics grade). This time, at least, the choice wasn’t based on avoiding lab cleaning. I decided to rekindle my long-lost love for tech and went for Computer Science.

Like every other computer scientist who has ever existed (except maybe Charles Babbage and Alan Turing), my first program was a simple one:

print("Hello, World!")
And that little moment of magic changed everything.

From then on, I was hooked. My journey in tech, AI, and data science has been nothing short of exhilarating, and I’ve never looked back.

So, join me on this adventure—don’t worry, I won’t make you clean any labs. 😆";
    let index = 0;

    function typeWriter() {
        if (index < fullStory.length) {
            storyText.innerHTML += fullStory.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    storyText.innerHTML = "";
    typeWriter();
});