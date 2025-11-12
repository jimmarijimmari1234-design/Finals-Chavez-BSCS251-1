// Modal
const modal = document.getElementById('buyNowModal');
const buyNowBtn = document.querySelector('.buy-now');
const closeBtn = document.querySelector('.close');

// Open modal
function openModal() {
    modal.style.display = 'flex';
    updateTotal();
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Event listeners
buyNowBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Update total price
function updateTotal() {
    const priceText = document.getElementById('productPrice').childNodes[0].nodeValue.trim(); // Only "$280.00"
    const quantity = parseInt(document.getElementById('quantity').value) || 1;

    // Clean string and parse number
    const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
    const total = (price * quantity).toFixed(2);

    document.getElementById('totalPrice').innerText = "Total Price: $" + total;
}

// Listen for quantity input
document.getElementById('quantity').addEventListener('input', updateTotal);

// Prevent form submission (demo)
document.getElementById('order-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Order placed successfully!");
    closeModal();
});
