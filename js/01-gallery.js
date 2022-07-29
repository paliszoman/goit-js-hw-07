import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImg = galleryItems.map(item=>`<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`).join(" ")
gallery.innerHTML = galleryImg

gallery.addEventListener('click', (event) => {
    if (event.target.className !== "gallery__image") { 
        return
    }
    event.preventDefault()
    const instance = basicLightbox.create(`
    <img src=${event.target.getAttribute('data-source')} alt=${event.target.alt}>`);
    instance.show()
});


