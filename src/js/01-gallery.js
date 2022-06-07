// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallaryInEl = document.querySelector('.gallery');
const imageLib = { ...galleryItems };

addImages(imageLib)
function addImages() {
    const items = [];
    for (let i = 0; i < galleryItems.length; i += 1) {
        const item = document.createElement("a");
        item.classList.add('.gallery__item');
        item.href = imageLib[i].original;
        const img = document.createElement("img");
        img.classList.add('gallery__image');
        img.src = imageLib[i].preview;
        img.alt = imageLib[i].description;
        item.append(img);
        items.push(item);
    };
    gallaryInEl.append(...items);
};
const lightbox = new SimpleLightbox('.gallery a',
    { captionsData: 'alt', captionDelay: 250 });
// Change code below this line

console.log(galleryItems);