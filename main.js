const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIconenu = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailcontainer = document.querySelector("#productDetail");
const shoppingCarcontainer = document.querySelector("#shoppingCarContainer");
const cardsContainer = document.querySelector(".cards-container");

console.log("esta es la clase card containers", cardsContainer);

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIconenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function closeProductDetailAside() {
  productDetailcontainer.classList.add("inactive");
}

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCarcontainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCarcontainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCarcontainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCarcontainer.classList.add("inactive");
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

//Función para mostrar el menú del carrito
function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  console.log("carrito", isMobileMenuClosed);
  // Si el menú mobile está abierto
  if (!isMobileMenuClosed) {
    console.log("el menú mobile está abierto");
    //agrega la clase inactiva mobile Menu
    mobileMenu.classList.add("inactive");
    console.log("Menú mobile clase", mobileMenu);
    console.log("el menú mobile está cerrado");
    console.log("***************************");
  }
  //Si el Menú desktop está abierto
  if (!isDesktopMenuClosed) {
    console.log("el menú desktop está abierto");
    desktopMenu.classList.add("inactive");
    console.log("Me-nu desktop clase", desktopMenu);
    console.log("el menú desktop está cerrado");
    console.log("***************************");
  }

  const isProductDetailClosed =
    productDetailcontainer.classList.contains("inactive");
  if (!isProductDetailClosed) {
    productDetailcontainer.classList.add("inactive");
  }

  // Quita la clase inactiva del carrito
  shoppingCarcontainer.classList.toggle("inactive");
  console.log("aside", shoppingCarcontainer);
}

function openProductDetailAside() {
  shoppingCarcontainer.classList.add("inactive");
  productDetailcontainer.classList.remove("inactive");
}
//lista de productos
const productList = [];
productList.push({
  name: "Bike",
  price: 50,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "computer",
  price: 600,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "pantalla ",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  // for para crear los productos en el HTML
  //iteracción por cada uno de los productos
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product ={name, price, image}
    const productImg = document.createElement("img");
    const image = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    console.log("se ha creado la clase figure");
    const productImgCard = document.createElement("img");
    console.log(
      "se ha creado la clase figure, con",
      "icons/bt_add_to_cart.svg"
    );
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfoDiv.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    // appendChild() inserta un nuevo nodo dentro de la estructura DOM y append() sirve para varios elementos
  }
}
renderProducts(productList);
console.log("se ha llamado la función rederProducts");
console.log(cardsContainer);
