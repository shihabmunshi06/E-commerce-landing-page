var windowWidth = document.documentElement.clientWidth;

if (windowWidth > 960) {
    let tags = document.querySelectorAll("header nav a");
    let leftSLider = document.querySelector(".left .btn-window-wrapper .slider");
    let lightbox = document.querySelector(".lightbox");
    let lightboxClose = document.querySelector(".btn-window-wrapper .close");

    tags.forEach(each => each.style.lineHeight = getComputedStyle(each).getPropertyValue("height"));

    leftSLider.addEventListener("click", () => {
        lightbox.style.setProperty("display", "flex")
    })
    lightboxClose.addEventListener("click", () => {
        lightbox.style.setProperty("display", "none")
    })
}

// mobile menu toggler
let menuIcon = document.querySelector(".menu")
let navDiv = document.querySelector("header .nav-div")
let navClose = document.querySelector("header .nav-div-mobile .close")

menuIcon.addEventListener("click", () => {
    navDiv.classList.add("active");
})
navClose.addEventListener("click", () => {
    navDiv.classList.remove("active");
})

//checkout div toggler
let cartIconDiv = document.querySelector(".cartIcon-div");
let cartIcon = document.querySelector(".cartIcon-svg");
let checkoutDiv = document.querySelector(".checkout-div");

cartIconDiv.addEventListener("click", () => {
    checkoutDiv.classList.toggle("active");
    cartIcon.classList.toggle("active");
});

//card counter 
let input = document.querySelector(".amount")

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")

let numberShow = document.querySelector(".cartIcon-div span")

let productDetails = document.querySelector(".products-details")
let count = document.querySelector(".count")
let total = document.querySelector(".total")

let addButton = document.querySelector(".add-to-cart")

plus.addEventListener("click", () => {
    let currentValue = parseInt(input.value)
    input.value = currentValue + 1;
})
addButton.addEventListener("click", () => {
    let currentValue = parseInt(input.value)
    if (currentValue >= 0) {
        productDetails.classList.add("ordered");
        numberShowing()
    }
})
minus.addEventListener("click", () => {
    let currentValue = parseInt(input.value)
    input.value = currentValue - 1;
    numberShowing()
    if (parseInt(input.value) < 1) {
        remover()
    }
})
document.querySelector(".before-checkout__delete").addEventListener("click", remover)

function numberShowing() {
    numberShow.classList.add("active");
    numberShow.innerHTML = (input.value);
    count.innerHTML = (input.value);
    total.innerHTML = "$" + (125 * input.value)
}
function remover() {
    productDetails.classList.remove("ordered")
    numberShow.classList.remove("active");
    numberShow.innerHTML = null;
    input.value = 0;
}

//navigation path chooser
document.addEventListener("click", e => {
    let moveButton;
    if (e.target.matches(".mover")) {
        moveButton = e.target;
    } else {
        moveButton = e.target.closest(".mover")
    }
    if (moveButton != null) {
        handleMoveButton(moveButton)
    }

    let thumbnail
    if (e.target.matches(".card")) {
        thumbnail = e.target;
    }
    if (thumbnail != null) {
        handleTHumb(thumbnail)
    }
})

//moving images with button
function handleMoveButton(moveButton) {
    let slider = moveButton.closest(".btn-window-wrapper").querySelector(".slider");
    let thumbnails = moveButton.closest(".img-thumb-wrapper").querySelectorAll(".card")
    let index = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
    if (moveButton.classList.contains("next")) {
        if (index < 3) {
            slider.style.setProperty("--slider-index", index + 1);
            hoverEffect("plus")
        }
    }
    if (moveButton.classList.contains("back")) {
        if (index > 0) {
            slider.style.setProperty("--slider-index", index - 1);
            hoverEffect("minus")
        }
    }

    function hoverEffect(receiver) {
        thumbnails.forEach(e => e.classList.remove("active"))
        if (receiver === "plus") {
            return thumbnails[index + 1].classList.add("active")
        }
        if (receiver === "minus") {
            return thumbnails[index - 1].classList.add("active")
        }
    }
}
//movng iumages with thumbnails
function handleTHumb(t) {
    let thumbnailsA = t.closest(".card-wrapper").querySelectorAll(".card")
    let className = t.classList[0];
    let sliderA = t.closest(".img-thumb-wrapper").querySelector(".slider");
    sliderA.style.setProperty("--slider-index", className);
    thumbnailsA.forEach(e => e.classList.remove("active"))
    thumbnailsA[className].classList.add("active")
}

let checkOut = document.querySelector(".products-details .main button");
checkOut.addEventListener("click", doAlert)
function doAlert(){
    alert("learning backend, stay tuned")
}