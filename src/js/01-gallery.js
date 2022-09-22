// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
     
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery__link', {
  captionsData: `alt`,
  captionDelay: 250,
});
