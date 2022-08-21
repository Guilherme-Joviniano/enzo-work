const inputIcon = document.querySelector('.search')
const input = document.querySelector('input');
inputIcon.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.style.display == 'block') input.style.display = 'none'
    else input.style.display = 'block'
})