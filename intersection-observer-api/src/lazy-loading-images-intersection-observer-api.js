"use strict"

const cuteCatImages = document.querySelectorAll("img[data-img-url]")

/**
 * @type {IntersectionObserverInit}
 */
const intersectionObserverOptions = {
  threshold: 0.4
}

const catsIntersectionObserver = new IntersectionObserver(
    (intersectedEntry, observer) => {
      intersectedEntry.forEach(ie => {
        console.log('Intersection Triggered for: '+ ie.target.getAttribute('alt'))

        if (ie.isIntersecting) {
          const catImg = ie.target;
          catImg.setAttribute('src', catImg.dataset.imgUrl)
          catImg.removeAttribute('data-img-url')
          catImg.classList.add('image-loaded')

          observer.unobserve(ie.target)
        }
      })
    },
    intersectionObserverOptions
)

cuteCatImages.forEach(catImg => catsIntersectionObserver.observe(catImg))
