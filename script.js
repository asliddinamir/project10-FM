const items = document.querySelectorAll('.accordion_item')

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})

