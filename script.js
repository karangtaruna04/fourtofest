// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamberger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const Maha = document.querySelector(".maha");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar Hamberger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Form
const form = document.getElementById("my-form");
const btnSubmit = document.getElementById("my-btn-submit");
const btnLoading = document.getElementById("my-btn-loading");
const myAlert = document.getElementById("my-alert");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  // ketika submit diklik, tampilkan btn Loading dan hilangkan Submit
  btnSubmit.classList.toggle("hidden");
  btnLoading.classList.toggle("hidden");
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // ketika berhasil tampilkan alert dan ubah btn Loading jadi Submit
      myAlert.classList.toggle("hidden");
      status.innerHTML = "<b>Thank you!</b> your message was sent successfully";
      setTimeout(function () {
        myAlert.classList.toggle("hidden");
      }, 5000);
      btnSubmit.classList.toggle("hidden");
      btnLoading.classList.toggle("hidden");
      form.reset();
    })
    .catch((error) => {
      myAlert.classList.toggle("hidden");
      status.innerHTML = "<b>Oops!</b> There was a problem sending your message";
      btnSubmit.classList.toggle("hidden");
      btnLoading.classList.toggle("hidden");
    });
}

form.addEventListener("submit", handleSubmit);
