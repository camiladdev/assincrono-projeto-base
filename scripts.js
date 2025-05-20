const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

// quando clicar no botão, ele ative a opção do input

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})