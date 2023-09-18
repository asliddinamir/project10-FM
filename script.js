const items = document.querySelectorAll('.accordion_item')
const toggler = document.querySelector('.accordion_header')

items.forEach(item => {
    toggler.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})

