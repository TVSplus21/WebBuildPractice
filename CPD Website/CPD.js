// Header Functionality

const header = document.querySelector(".h2");
const sidebarbtn = document.querySelector(".bars");
const sidebar = document.querySelector(".navmenu");
const btn = document.getElementById("bars");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

btn.addEventListener("click", () => {
    if (btn.classList.contains("fa-x")) {
        btn.classList.toggle("active");
        sidebar.classList.toggle("sidebar");
        btn.classList.remove("fa-x");
        btn.classList.add("fa-bars");
    } else {
        btn.classList.toggle("active");
        sidebar.classList.toggle("sidebar");
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-x");
    }
});

// Logo Animation

const logos = document.querySelectorAll(".images");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("scale-up-center");
        } else {
            entry.target.classList.remove("scale-up-center");
        }
    });
});

logos.forEach((el) => observer.observe(el));

// Form Functionality

const scriptURL =
    "https://script.google.com/macros/s/AKfycbx14O8dMcu5HQZGn4Dr0EJDCjQLx9YdairKe1IMVySalPkpgADzFWX351ScsErRZ35M/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Thank You For Subscribing";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});
