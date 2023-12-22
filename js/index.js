const toggleButton = document.getElementsByClassName('btn__toggle')[0]
const navLinks = document.getElementsByClassName('link__list')[0]
let contentContainer = (document.querySelectorAll('.content__container'));

for (let content of contentContainer)
    content.addEventListener('click', function() {
        this.classList.toggle('active');
})  

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})