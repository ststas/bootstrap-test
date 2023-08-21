const modalImg = document.querySelector('.modal-img');

function handleImageClick(event) {
    const clickedImage = event.target.closest('.projects-image');
    
    if (clickedImage) {
        const src = clickedImage.getAttribute('src');
        const alt = clickedImage.getAttribute('alt');
        
        modalImg.src = src;
        modalImg.alt = alt;
    }
}

document.addEventListener('click', handleImageClick);