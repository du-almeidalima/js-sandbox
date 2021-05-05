"use strict"

const sections = document.querySelectorAll('.section')
/**
 * @type IntersectionObserverInit
 */
const options = {
  threshold: 0.5,
  rootMargin: "0px"
}

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(e => {
          console.log(e)

          if (e.isIntersecting) {
            e.target.classList.add('section-intersected')
          } else {
            e.target.classList.remove('section-intersected')
          }

          // To stop observing a Element
          // observer.unobserve(e.target)
        })
    },
    options)

sections.forEach(s => observer.observe(s))

