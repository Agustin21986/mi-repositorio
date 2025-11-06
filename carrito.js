// --- VARIABLES ---
let total = 0;
const totalDisplay = document.getElementById("cart-total");
const resetButton = document.getElementById("reset-cart");
const addButtons = document.querySelectorAll(".add-to-cart");

// --- AGREGAR PRODUCTO ---
addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = parseFloat(button.getAttribute("data-price"));
        total += price;
        totalDisplay.textContent = total.toFixed(2);
    });
});

// --- REINICIAR CARRITO ---
resetButton.addEventListener("click", () => {
    total = 0;
    totalDisplay.textContent = total.toFixed(2);
});