function $(dom) {
  return document.querySelector(dom);
}
function $$(dom) {
  return document.querySelectorAll(dom);
}

function magnify(dom) {
  var evt = new Event(),
    m = new Magnifier(evt);
  m.attach({
    thumb: "#main-display-img",
    large: dom,
    mode: "inside",
    zoom: 3,
    zoomable: true,
    largeWrapper: "preview"
  });
}

function changeImage(e) {
  var grabMainImg = $("#main-display-img");
  grabMainImg.src = e.src;
  magnify(e.src);
}

function closeModal() {
  var imgModal, imgContainer, imgContainerImg;
  imgModal = $("#img-modal");
  imgContainer = $("#img-container");
  imgContainerImg = $("#img-container img");
  imgModal.classList.add("d-none");
  imgContainer.classList.add("d-none");
  imgContainerImg.src = "";
}
function openModal(e) {
  var imgModal, imgContainer, imgContainerImg;
  imgModal = $("#img-modal");
  imgContainer = $("#img-container");
  imgContainerImg = $("#img-container img");
  imgContainerImg.src = e.src;
  imgModal.classList.remove("d-none");
  imgContainer.classList.remove("d-none");
}

function addNumber() {
  let productDom = document.querySelector(".product-count");
  let productCount = parseInt(productDom.value);
  productCount = productCount + 1;
  productDom.value = productCount;
}

function subNumber() {
  let productDom = document.querySelector(".product-count");
  let productCount = parseInt(productDom.value);
  if (productCount > 0) {
    productCount = productCount - 1;
  } else {
    productCount = productCount;
  }
  productDom.value = productCount;
}

function heroSlider() {
  heroSlider = new Glide("#hero-slider", {
    type: "carousel",
    autoplay: 4000,
    focusAt: "center",
    startAt: 0,
    perView: 1,
    gap: 0,
  });
  heroSlider.mount();
}

function featureProductSlider() {
  featureProductSlider = new Glide("#feature-product-slider", {
    type: "carousel",
    perView: 6,
    gap: 5,
    startAt: 0,
    autoplay: 6000,
    breakpoints: {
      1200: {
        perView: 5,
      },
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 2,
      },
      420: {
        perView: 1,
      },
    },
  });
  featureProductSlider.mount();
}

function newProductSlider() {
  newProductSlider = new Glide("#new-product-slider", {
    type: "carousel",
    perView: 6,
    gap: 5,
    startAt: 0,
    autoplay: 6000,
    breakpoints: {
      1200: {
        perView: 5,
      },
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 2,
      },
      420: {
        perView: 1,
      },
    },
  });
  newProductSlider.mount();
}

if ($("#main-display-img") !== null) {
    magnify($("#main-display-img").src);
}
heroSlider();
featureProductSlider();
newProductSlider();
