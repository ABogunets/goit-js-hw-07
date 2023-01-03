import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');

//Gallery Items Markup
const galleryItemsMarkup = createGalleryItemsMarkUp(galleryItems);
// console.log("galleryItemsMarkup", galleryItemsMarkup);

galleryRef.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkUp(items) {
  return items.map(({ preview, original, description}) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`).join('');
}

// Click listener
galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  console.log(e.target);
}
