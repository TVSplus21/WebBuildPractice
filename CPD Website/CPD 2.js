// // When a dropdown element is clicked
// document.querySelectorAll(".dropdown").forEach(function (dropdown) {
//     dropdown.addEventListener("click", function () {
//         this.setAttribute("tabindex", "1");
//         this.classList.toggle("active");
//         this.querySelector(".dropdown-menu").style.display =
//             this.querySelector(".dropdown-menu").style.display === "none"
//                 ? "block"
//                 : "none";
//     })
// });

// // When focus is moved away from a dropdown element
// dropdown.addEventListener("focusout", function () {
//     this.classList.remove("active");
//     this.querySelector(".dropdown-menu").style.display = "none";
// });

// // When a dropdown menu item is clicked
// dropdown.querySelectorAll(".dropdown-menu li").forEach(function (item) {
//     item.addEventListener("click", function () {
//         var dropdownElement = this.closest(".dropdown");
//         dropdownElement.querySelector("span").textContent =
//             this.textContent;
//         dropdownElement.querySelector("input").value =
//             this.getAttribute("id");
//     });
// });

// // When a dropdown menu item is clicked
// document.querySelectorAll(".dropdown-menu li").forEach(function (item) {
//     item.addEventListener("click", function () {
//         var input =
//             "<strong>" +
//             this.closest(".dropdown").querySelector("input").value +
//             "</strong>";
//         var msg = '<span class="msg">Hidden input value: ';
//         document.querySelector(".msg").innerHTML = msg + input + "</span>";
//     });
// });

const arrowhead = document.querySelectorAll(".fa-angle-left");
const dropdownmenu = document.querySelectorAll(".dropdown-menu");
const ops = document.querySelectorAll(".op1");
const input = document.querySelectorAll(".input");

arrowhead.forEach( (arrow) => {
    arrow.addEventListener("click", () => {
        arrow.classList.toggle("active");
        ops.forEach((dropedmenu) => {
        // dropdownmenu.style.document.transform = `translateY(4.4rem)`;
        // dropdownmenu.classList.toggle("menu");
            dropedmenu.classList.toggle("menu");
        });
    });
})

ops.forEach( (op) => {
    op.addEventListener("click", () => {
        input.value = op.textContent;
        arrowhead.classList.remove("active");
        dropdownmenu.classList.remove("menu");
    })
})