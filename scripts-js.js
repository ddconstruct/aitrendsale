// Current product being purchased
let currentProduct = '';
let currentPrice = 0;
let currentProductType = '';

// Open the payment modal
function openPaymentModal(productName, price, productType) {
    currentProduct = productName;
    currentPrice = price;
    currentProductType = productType;
    
    document.getElementById('modalTitle').textContent = 'Complete Your Purchase';
    document.getElementById('modalProduct').textContent = productName + ' - $' + price;
    document.getElementById('paypal-button-container').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
    
    // Initialize PayPal buttons
    initPayPalButtons();
    
    // Show the modal
    document.getElementById('paymentModal').style.display = 'flex';
}

// Close the payment modal
function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Initialize PayPal buttons
function initPayPalButtons() {
    // Clear previous buttons
    document.getElementById('paypal-button-container').innerHTML = '';
    
    // Render PayPal buttons
    paypal.Buttons({
        // Set up the transaction
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: currentProduct,
                    amount: {
                        currency_code: 'USD',
                        value: currentPrice
                    }
                }]
            });
        },
        
        // Finalize the transaction
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
                // Hide PayPal buttons
                document.getElementById('paypal-button-container').style.display = 'none';
                
                // Show success message
                document.getElementById('success-message').style.display = 'block';
                
                // Set up download button
                document.getElementById('download-button').onclick = function() {
                    // In a real implementation, this would be a link to the actual file
                    downloadProduct(currentProductType);
                    closeModal();
                };
            });
        }
    }).render('#paypal-button-container');
}

// Handle product download
function downloadProduct(productType) {
    // In a real implementation, this would trigger the actual file download
    // For now, we'll simulate it with an alert
    alert('In a production environment, this would download your ' + productType + ' file.\n\nYou would set up a file delivery system with links to:\n- products/' + productType + '.pdf');
    
    // Example of how you would do this in production:
    // window.location.href = 'products/' + productType + '.pdf';
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target == modal) {
        closeModal();
    }
}
