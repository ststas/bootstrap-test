const modalImg =  document.querySelector('.modal-img')

document.addEventListener('click', (event) => {
	if(event.target.classList.contains('projects-image')) {
		const src = event.target.getAttribute('src');
		const alt = event.target.getAttribute('alt');
		modalImg.src = src;
		modalImg.alt = alt;
	}
})