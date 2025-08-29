const bookContentContainer = document.getElementById("book-content-container")
const bookContentButton = document.getElementById("book-content-button")

bookContentButton.addEventListener("click", () => {
    if (bookContentContainer.style.display === 'block') {
        bookContentContainer.style.display = 'flex'
        return
    }

    bookContentContainer.style.display = 'block'
})

const bookTitle = document.getElementById("main-title")
const bookTitleButton = document.getElementById("book-title-button")

bookTitleButton.addEventListener("click", () => {
    const newTitle = prompt("Escriba el nuevo título del libro: ");

    if (newTitle && newTitle.trim() !== "") {
        bookTitle.innerText = newTitle;
    }
});

const mainSectionTitle = document.getElementById("main-section-title")
const mainSection = document.getElementById("main-section")
const mainSectionButton = document.getElementById("main-section-button")

const originalColor = getComputedStyle(mainSectionTitle).color;
const originalFont = getComputedStyle(mainSection).fontFamily;

let isChanged = false;

const updateButtonLabel = () => {
    mainSectionButton.textContent = isChanged
      ? "Revertir color y fuente"
      : "Cambiar color y fuente";
};

updateButtonLabel();

mainSectionButton.addEventListener("click", () => {
  if (!isChanged) {
    mainSectionTitle.style.color = 'green';
    mainSection.style.fontFamily = 'Helvetica, sans-serif';
    isChanged = true;
  } else {
    mainSectionTitle.style.color = originalColor;
    mainSection.style.fontFamily = originalFont;
    isChanged = false;
  }
  updateButtonLabel();
});

const imageLink = "https://miro.medium.com/v2/1*l4xICbIIYlz1OTymWCoUTw.jpeg"
const bookImageButton = document.getElementById("book-image-button")
const bookImageContainer = document.getElementById("book-image-container")

bookImageButton.addEventListener("click", () => {

    if (bookImageContainer.querySelector('img')) {
        return;
    }

    const imageElement = new Image();
    imageElement.src = imageLink;
    imageElement.alt = "Portada del libro";
    imageElement.loading = "lazy";


    imageElement.style.maxWidth = '100%';
    imageElement.style.height = 'auto';
    imageElement.style.display = 'block';
    imageElement.style.marginTop = '1em';

    bookImageContainer.appendChild(imageElement);

    // Esto deshabilita el botón luego de insertar la imagen//
    bookImageButton.disabled = true;
    bookImageButton.textContent = "Imagen agregada";
});  