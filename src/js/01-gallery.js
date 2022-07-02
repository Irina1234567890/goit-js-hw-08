// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');


const imgList = galleryItems.map(({preview,description,original})=> `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /> </a> `).join('');
  galleryWrapper.insertAdjacentHTML('beforeend',imgList);

  galleryWrapper.addEventListener('click' , bigImgGallery);

  let gallery = new SimpleLightbox('.gallery a',{
    captionsData:`alt`,
    captionDelay:250 
  });

  function bigImgGallery (event) {
    if (event.target.nodeName !== "IMG") {
        return;
      }
}




// import { galleryItems } from './gallery-items';
// // Change code below this line
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);

// const gallery = document.querySelector('.gallery');

// function onCreateItem(galleryItems) {
//   return galleryItems.map(({ preview, original, description }) => {
//     return `
//     <a class="gallery__item" href='${original}'>
//       <img
//         class="gallery__image"
//         src='${preview}'
//         data-source='${original}'
//         alt='${description}'
//         />
//     </a>
    
//     `}).join('');
//   }

// const item = onCreateItem(galleryItems);
// gallery.insertAdjacentHTML('beforeend', item);

// const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',
// captionDelay: 250 });

// SimpleLightbox.addEventListener('click', onImageClick);

// function onImageClick(evt) {
//   evt.preventDefault();
//   const instance = lightbox.create(`
//     <img src="${evt.target.dataset.source}" width="800" height="600">`)

//     instance.show();
// }

// function onCloseModal() {
//   window.removeEventListener("keydown", onEscKeyModal);
//   document.body.classList.close(".basicLightbox--visible");
// }

// function onEscKeyModal(event) {
//   if (event.code === "Escape") {
//     onCloseModal();
//   }
// }

