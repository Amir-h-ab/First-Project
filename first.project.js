let cards = document.querySelectorAll('.box-card-img')
const observer =
    new IntersectionObserver(entrise => {
        entrise.forEach(e => {
            e.target.classList
                .toggle("show", e.isIntersecting)
        })
    })
    cards.forEach(box-card-img => {
        observer.observer(box-card-img)
    })