const shareButton = document.getElementById('share-button');
const shareMedia = document.getElementById('social-media');
const returnButton = document.getElementById('return-button')
const activeStateClass = 'card-footer-dark--display'

shareButton.addEventListener('click', () => {
	shareMedia.classList.toggle(activeStateClass);
});

returnButton.addEventListener('click', () => {
	if (shareMedia.classList.contains(activeStateClass)) {
		shareMedia.classList.remove(activeStateClass);
	}
});