let currentIndex = 0;

function showNextImage(){
    const imageContainer = document.querySelector ('.images');
    const images = document.querySelectorAll('.image');
    currentIndex = (currentIndex + 1)% images.length;
    const offset = -currentIndex * 100;
    imageContainer.style.transform = `translateX(${offset}%)`
    setInterval(showNextImage,3000);

}

showNextImage();