// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';
import '../css/common.css';
// Change code below this line

// console.log(galleryItems);

const galleryObj = document.querySelector('.gallery');

const imagesLinks = document.querySelector('.gallery__link');

const imagesMarkup = createImageItemMarkup(galleryItems);

galleryObj.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageItemMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
    })
    .join('');
}

// const lightbox = new SimpleLightbox(imagesLinks, {
//   captionsData: "alt",
//   captionDelay: 250,
// });

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
  enableKeyboard: true,
  loop: true,
  docClose: true,
  close: false,
  animationSpeed: 500,
});
