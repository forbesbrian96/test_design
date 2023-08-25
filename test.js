$(document).ready(function() {
    // Initialize variables
    var currentIndex = 0;
    var images = $(".carousel-images img");
    var totalImages = images.length;

    // Show the first image and hide the rest
    images.eq(currentIndex).show();

    // Function to show the next image
    function showNextImage() {
        images.eq(currentIndex).hide();
        currentIndex = (currentIndex + 1) % totalImages;
        images.eq(currentIndex).show();
    }

    // Function to show the previous image
    function showPreviousImage() {
        images.eq(currentIndex).hide();
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images.eq(currentIndex).show();
    }

    // Add click handlers for next and previous buttons
    $(".carousel-button-next").click(showNextImage);
    $(".carousel-button-previous").click(showPreviousImage);
});