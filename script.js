const button1 = document.getElementById('more_btn')
const modal = document.getElementById('modal')

const closeModal = (event) => {
    event.stopPropagation()
    modal.style.opacity = 0
    modal.style.pointerEvents = 'none'

    document.removeEventListener('click', closeModal)
}

button1.addEventListener('click', (event) => {
    event.stopPropagation()
    modal.style.opacity = 1
    modal.style.pointerEvents = 'all'

    document.addEventListener('click', closeModal)
})