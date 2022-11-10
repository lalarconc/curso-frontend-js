const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIconenu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

console.log("esta es la clase card containers", cardsContainer);

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIconenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
console.log("aside 1", aside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
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

  // Quita la clase inactiva del carrito
  aside.classList.toggle("inactive");
  console.log("aside", aside);
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

// for para crear los productos en el HTML
//iteracción por cada uno de los productos

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product ={name, price, image}
    const productImg = document.createElement("img");
    const image = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);
    //productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.append(productInfoDiv, productInfoFigure);
    //productInfo.appendChild(productInfoFigure);

    productCard.append(productImg, productInfo);
    //productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    // appendChild() inserta un nuevo nodo dentro de la estructura DOM y append() sirve para varios elementos
  }
}

renderProducts(productList);
