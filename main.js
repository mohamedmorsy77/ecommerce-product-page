let cart_img = document.querySelector(".cart_img svg");
let cart = document.querySelector(".cart");
let imgs = document.querySelectorAll(".images img");
let baseImg = document.querySelector(".base_image img");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let num_of_products = document.querySelector(".num");
let checkout = document.querySelector(".Checkout");
let nav_list = document.querySelector(".nav_list");
let toggle = document.querySelector(".header_data svg");
let closeNav = document.querySelector(".nav_list svg");

let amountValue = 0;

// Show menu and hide

toggle.addEventListener("click", () => {
  nav_list.classList.add("show_menu");
});
closeNav.addEventListener("click", () => {
  nav_list.classList.remove("show_menu");
});


//  show cart
function showCart() {
  cart.classList.toggle("cart_show");
}
cart_img.addEventListener("click", showCart);

// #######################################################

//  Number of Products

// plus
function plusNum() {
  amountValue++;
  num_of_products.innerHTML = amountValue;
}

plus.addEventListener("click", plusNum);
// minus
function minusNum() {
  if (amountValue > 0) {
    amountValue--;
  }
  num_of_products.innerHTML = amountValue;
}
minus.addEventListener("click", minusNum);

// add number of products in cart

let btnAddCart = document.querySelector(".add_cart");
let relative = document.querySelector(".relative span");
let cart_head = document.querySelector(".cart_head");
let empty = document.querySelector(".empty");

function addNum() {
  let total = parseFloat(125 * amountValue);
  if (num_of_products.innerHTML > 0) {
    let product = document.createElement("div");
    product.classList.add("product_save");
    product.innerHTML += ` 
                      
                        <div class="info">
                            <img class="image_save" src="images/image-product-1.jpg" alt="product1">
                              <div class="data">
                              <p>Fall Limited Edition Sneakers</p>
                              $125.00 x ${amountValue} <span>${total}</span>
                        </div>
                      </div>
                      <svg class="delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
  
                    
                    `;

    cart.insertBefore(product, cart_head.nextSibling);
    relative.innerHTML = +relative.innerHTML + amountValue;
    relative.style.opacity = "1";
    checkout.style.display = "block";
    empty.style.display = "none";

    let dele = document.querySelector(".delete");
    dele.addEventListener("click", () => {
      product.innerHTML = " ";
      empty.style.display = "block";
      checkout.style.display = "none";
    });
    amountValue = 0;
    num_of_products.innerHTML = 0;
  } else {
    empty.style.display = "block";
  }
}
btnAddCart.addEventListener("click", addNum);

console.log(baseImg);

// show lightbox  and remove
let lightbox = document.querySelector(".overlay");
let removeLightbox = document.querySelector(".overlay .close");
baseImg.addEventListener("click", () => {
  lightbox.style.display = "block";
});

removeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// next and prev
let currentImg = 1;
let lightbox_image = document.querySelector(".lightbox_image img");
let next = document.querySelector(".lightbox .next");
let previous = document.querySelector(".lightbox .previous");
let imgsOverlay = document.querySelectorAll(".overlay .images img");

/* =================== next function =========================== */
function nextImg() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }

  lightbox_image.src = `images/image-product-${currentImg}.jpg`;
  activeNext();
}

/* =================== previous function =========================== */
function prevImg() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }

  lightbox_image.src = `images/image-product-${currentImg}.jpg`;
  activeNext();
}

next.addEventListener("click", nextImg);
previous.addEventListener("click", prevImg);

/* =================== activeNext function =========================== */
function activeNext() {
  imgsOverlay.forEach((img) => {
    if (lightbox_image.src == img.src) {
      img.classList.add("active_img");
    } else {
      img.classList.remove("active_img");
    }
  });
}

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.target.classList.add("active_img");
    baseImg.src = e.target.src;
    lightbox_image.src = e.target.src;
    imgs.forEach((currentImg) => {
      if (currentImg !== e.target) {
        currentImg.classList.remove("active_img");
      }
    });
  });
});
