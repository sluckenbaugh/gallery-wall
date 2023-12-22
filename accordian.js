// variables
let contentContainer = (document.querySelectorAll('.content__container'));

for (let content of contentContainer)
    content.addEventListener('click', function() {
        this.classList.toggle('active');
}) 