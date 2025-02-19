<script>
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
    </script>