// Ultra Meats website script
// Replace these placeholders with live Square Online product links or checkout links.
const SQUARE_LINKS = {
  "Steak Bundle": "https://square.link/u/REPLACE-STEAK-BUNDLE-LINK",
  "Boneless Chicken Bundle": "https://square.link/u/REPLACE-CHICKEN-BUNDLE-LINK"
};

const cityStateMap = {
  "Chattanooga": "TN",
  "Hixson": "TN",
  "Harrison": "TN",
  "Dalton": "GA",
  "Lafayette": "GA",
  "Rossville": "GA",
  "Chickamauga": "GA",
  "Ringgold": "GA",
  "Rock Spring": "GA"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll("[data-bundle]").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.bundle;
    setTimeout(() => {
      document.getElementById("bundleSelect").value = selected;
    }, 100);
  });
});

const citySelect = document.getElementById("citySelect");
const stateSelect = document.getElementById("stateSelect");
citySelect.addEventListener("change", () => {
  const expectedState = cityStateMap[citySelect.value];
  if (expectedState) stateSelect.value = expectedState;
});

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const message = document.getElementById("formMessage");
  const bundle = form.bundle.value;
  const city = form.city.value;
  const state = form.state.value;
  const finalSale = document.getElementById("finalSale").checked;

  message.className = "form-message";
  message.textContent = "";

  if (!finalSale) {
    message.classList.add("error");
    message.textContent = "Please read and agree to the Final Sale Disclaimer before continuing.";
    return;
  }

  if (cityStateMap[city] && cityStateMap[city] !== state) {
    message.classList.add("error");
    message.textContent = `The selected city is listed as ${cityStateMap[city]}. Please correct the state before continuing.`;
    return;
  }

  const squareLink = SQUARE_LINKS[bundle];
  if (!squareLink || squareLink.includes("REPLACE")) {
    message.classList.add("success");
    message.textContent = "Order details confirmed. Add the live Square checkout link in script.js to send customers to payment.";
    return;
  }

  window.location.href = squareLink;
});
