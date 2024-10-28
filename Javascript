<!-- Automatic slide script -->
<script>
    var navBar = document.getElementById("navBar");

    function togglebtn(){
        navBar.classList.toggle("hidemenu");
    }

    let currentSlide = 1;
    const totalSlides = 10; // Adjust based on your actual number of slides

    document.querySelector('.next').addEventListener('click', () => {
        currentSlide = (currentSlide % totalSlides) + 1; // Cycle through slides
        document.getElementById(`slide${currentSlide}`).checked = true; // Use template literal for ID
    });

    // Optional: Automatic slide change every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide % totalSlides) + 1;
        document.getElementById(`slide${currentSlide}`).checked = true; // Correct ID here too
    }, 5000);
</script>
