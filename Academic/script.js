// Get the HTML element with the id 'banner'
const banner = document.getElementById('banner');

// List of image URLs for the slider
const bannerList = ['./images/slider-01.jpg', './images/slider-02.jpg', './images/slider-03.jpg', './images/123.jpg','./images/Sports.jpg'];

// Variable to keep track of the current image index
let banneeNo = 0;

// Function to change the photo in the banner
const changePhoto = () => {
    // Set the 'backgroundImage' style property of the banner element to the URL of the current image
    banner.style.backgroundImage = `url(${bannerList[banneeNo]})`;
    
    // Increment the index to move to the next image
    banneeNo++;

    // If the index exceeds the length of the image list, reset it to 0 to start from the beginning
    if (banneeNo > bannerList.length - 1) {
        banneeNo = 0;
    }

    // Output the current index to the console (for debugging)
    console.log(banneeNo);
};

// Call the 'changePhoto' function every 3000 milliseconds (3 seconds)
setInterval(changePhoto, 5000);
