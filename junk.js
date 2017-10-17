
let img = document.querySelectorAll("img");
let model = document.querySelector(".model");
let modelImage = document.querySelector(".model-image");
let close = document.querySelector("span");
let text = document.querySelector(".alt-text");

for(let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    model.style.display = "block";
    modelImage.src = this.src;
    text.innerHTML = this.alt;
  })
}

close.addEventListener("click", function() {
  model.style.display = "none";
})

