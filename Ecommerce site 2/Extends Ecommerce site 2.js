const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// product array
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./Images/air.png",
      },
      {
        code: "darkblue",
        img: "./Images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./Images/jordan.png",
      },
      {
        code: "green",
        img: "./Images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./Images/blazer.png",
      },
      {
        code: "green",
        img: "./Images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./Images/crater.png",
      },
      {
        code: "lightgray",
        img: "./Images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./Images/hippie.png",
      },
      {
        code: "black",
        img: "./Images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentcolor = document.querySelectorAll(".color");
const currentsize = document.querySelectorAll(".size");

menuItems.forEach((items, index) => {
  items.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`; //when this was added the browser automatically desables the ability to scroll

    //change the choosen product
    choosenProduct = products[index];

    //change Content of currentProducts information
    currentproductTitle.textContent = choosenProduct.title;
    currentproductPrice.textContent = "$" + choosenProduct.price;
    currentproductImg.src = choosenProduct.colors[0].img;
    currentcolor.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentcolor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentproductImg.src = choosenProduct.colors[index].img;
  });
});
currentsize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentsize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});