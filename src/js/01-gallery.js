// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');

galleryWrapper.insertAdjacentHTML('afterbegin', createGallary(galleryItems));

function createGallary(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
