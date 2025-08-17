// Order Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to cart data from localStorage
    const cart = loadCart();
    
    // Get DOM elements
    const orderItemsContainer = document.querySelector('.order-items');
    const orderSubtotal = document.getElementById('order-subtotal');
    const orderShipping = document.getElementById('order-shipping');
    const orderTotal = document.getElementById('order-total');
    const orderForm = document.getElementById('order-form');
    const orderSuccessModal = document.querySelector('.order-success-modal');
    const orderNumberSpan = document.getElementById('order-number');
    const continueShoppingBtn = document.querySelector('.continue-shopping-btn');
    
    // Initialize page
    function init() {
        // Add debug logging
        console.log('Initializing checkout page');
        console.log('Cart data:', cart);
        
        // Check if cart exists
        if (!cart || cart.length === 0) {
            console.log('Cart is empty or not found');
            // Display a message to the user instead of immediate redirect
            const message = document.createElement('div');
            message.className = 'cart-empty-message';
            message.style.textAlign = 'center';
            message.style.margin = '30px auto';
            message.style.maxWidth = '600px';
            message.style.padding = '20px';
            
            // Check current language
            const isBengali = localStorage.getItem('language') === 'bn';
            
            const emptyCartTitle = isBengali && window.translations && window.translations["Your cart is empty"] 
                ? window.translations["Your cart is empty"] 
                : "Your cart is empty";
                
            const emptyCartMessage = isBengali && window.translations && window.translations["You need to add items to your cart before checkout."]
                ? window.translations["You need to add items to your cart before checkout."]
                : "You need to add items to your cart before checkout.";
                
            const browseButtonText = isBengali && window.translations && window.translations["Browse Products"]
                ? window.translations["Browse Products"]
                : "Browse Products";
            
            message.innerHTML = `
                <h2 class="${isBengali ? 'bangla-text' : ''}" data-original-text="Your cart is empty">${emptyCartTitle}</h2>
                <p class="${isBengali ? 'bangla-text' : ''}" data-original-text="You need to add items to your cart before checkout.">${emptyCartMessage}</p>
                <button class="back-to-collections-btn ${isBengali ? 'bangla-text' : ''}" data-original-text="Browse Products" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; margin-top: 20px; cursor: pointer; border-radius: 4px;">${browseButtonText}</button>
            `;
            
            // Find the checkout container
            const checkoutContainer = document.querySelector('.checkout-container');
            if (checkoutContainer) {
                // Replace the checkout container with our message
                checkoutContainer.parentNode.replaceChild(message, checkoutContainer);
                
                // Add event listener to the button
                const backButton = document.querySelector('.back-to-collections-btn');
                if (backButton) {
                    backButton.addEventListener('click', function() {
                        window.location.href = 'collections.html';
                    });
                }
                
                // Apply language if needed
                if (typeof window.setLanguage === 'function') {
                    const savedLanguage = localStorage.getItem('language');
                    if (savedLanguage === 'bn') {
                        window.setLanguage('bn');
                    }
                }
                
                return; // Stop further execution
            } else {
                // Fallback to redirect if container is not found
                window.location.href = 'collections.html';
                return;
            }
        }
        
        // Make sure all required DOM elements exist
        if (!orderItemsContainer || !orderSubtotal || !orderShipping || 
            !orderTotal || !orderForm || !orderSuccessModal || 
            !orderNumberSpan || !continueShoppingBtn) {
                
            console.error('Missing required DOM elements for checkout page');
            return; // Stop execution if elements are missing
        }
        
        // Display order items and totals
        displayOrderItems();
        updateOrderTotals();
        
        // Set up event listeners
        orderForm.addEventListener('submit', handleOrderSubmit);
        continueShoppingBtn.addEventListener('click', function() {
            window.location.href = 'collections.html';
        });
        
        // Apply language settings if needed
        if (typeof window.setLanguage === 'function') {
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage === 'bn') {
                window.setLanguage('bn');
            }
        }
    }
    
    // Load cart data from localStorage
    function loadCart() {
        try {
            // Test if localStorage is available
            if (typeof localStorage === 'undefined') {
                console.error('localStorage is not available');
                alert('Your browser does not support localStorage. Some features may not work correctly.');
                return [];
            }
            
            // Try to access localStorage
            const testKey = '__test__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            
            // Try both possible cart keys
            let cartData = localStorage.getItem('easternPickleCart');
            if (!cartData) {
                console.log('Trying alternative cart key...');
                cartData = localStorage.getItem('acharBazarCart');
            }
            
            // Log the cart data
            console.log('Raw cart data:', cartData);
            
            // If we have cart data, parse it
            if (cartData) {
                try {
                    const parsedCart = JSON.parse(cartData);
                    console.log('Parsed cart:', parsedCart);
                    return parsedCart;
                } catch (parseError) {
                    console.error('Error parsing cart data:', parseError);
                    return [];
                }
            }
            
            return [];
        } catch (e) {
            console.error('Error loading cart data:', e);
            if (e instanceof DOMException && (
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED'))
            {
                alert('Local storage quota exceeded. Please clear some space in your browser storage.');
            } else {
                alert('Unable to access cart data. Some features may not work correctly.');
            }
            return [];
        }
    }
    
    // Display order items in summary
    function displayOrderItems() {
        orderItemsContainer.innerHTML = '';
        
        // Check if we're in Bengali mode
        const isBengaliMode = localStorage.getItem('language') === 'bn';
        
        cart.forEach(item => {
            // Use originalName (if available) or name as the base for translation
            const baseProductName = item.originalName || item.name;
            let displayName = baseProductName;
            
            // Get translated product name if in Bengali mode
            if (isBengaliMode && window.translations && window.translations[baseProductName]) {
                displayName = window.translations[baseProductName];
            }
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            
            orderItem.innerHTML = `
                <img src="${item.image}" alt="${displayName}" class="order-item-image">
                <div class="order-item-details">
                    <div class="order-item-name ${isBengaliMode ? 'bangla-text' : ''}" data-original-text="${baseProductName}">${displayName}</div>
                    <div class="order-item-variant">${item.size || ''}</div>
                    <div class="order-item-price">Tk ${item.price} each</div>
                </div>
                <div class="order-item-quantity">x${item.quantity}</div>
            `;
            
            orderItemsContainer.appendChild(orderItem);
        });
    }
    
    // Calculate and update order totals
    function updateOrderTotals() {
        // Calculate subtotal
        const subtotal = cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
        
        // Fixed shipping cost (could be dynamic based on order size)
        const shipping = 60;
        
        // Total = subtotal + shipping
        const total = subtotal + shipping;
        
        // Update display
        orderSubtotal.textContent = `Tk ${subtotal}`;
        orderShipping.textContent = `Tk ${shipping}`;
        orderTotal.textContent = `Tk ${total}`;
    }
    
    // Handle form submission
    function handleOrderSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(orderForm);
        
        // Validate form data
        if (!validateOrderForm(formData)) {
            return false;
        }
        
        const orderNumber = generateOrderNumber();
        
        // Prepare customer information
        const customerInfo = {
            name: sanitizeInput(formData.get('fullName')),
            email: sanitizeInput(formData.get('email')),
            phone: sanitizeInput(formData.get('phone')),
            address: sanitizeInput(formData.get('address')),
            city: sanitizeInput(formData.get('city')),
            postalCode: sanitizeInput(formData.get('postalCode')),
            notes: sanitizeInput(formData.get('notes') || 'None')
        };
        
        // Calculate totals
        const subtotal = calculateSubtotal();
        const shipping = 60;
        const total = subtotal + shipping;
        
        // Format order items for WhatsApp
        let itemsText = '';
        const currentLanguage = localStorage.getItem('language');
        const useBengali = currentLanguage === 'bn';
        
        cart.forEach(item => {
            // Use originalName (if available) or name as the base
            const baseProductName = item.originalName || item.name;
            
            // Determine which name to display in the message based on current language
            let displayName = baseProductName;
            if (useBengali && window.translations && window.translations[baseProductName]) {
                displayName = window.translations[baseProductName];
            }
            
            itemsText += `\n- ${displayName} (${item.size}) x${item.quantity} - Tk ${item.price * item.quantity}`;
        });
        
        // Format message for WhatsApp
        const message = 
`*NEW ORDER #${orderNumber}*
        
*Customer Information:*
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Email: ${customerInfo.email}
Address: ${customerInfo.address}
City: ${customerInfo.city}
Postal Code: ${customerInfo.postalCode}
        
*Order Details:*${itemsText}
        
*Payment Method:* ${formData.get('paymentMethod')}
*Subtotal:* Tk ${subtotal}
*Shipping:* Tk ${shipping}
*Total:* Tk ${total}
        
*Notes:* ${customerInfo.notes}`;
        
        // Phone number to send the WhatsApp message to (replace with your actual number)
        const phoneNumber = "8801302700263"; // Replace with your Bangladesh number without the + sign
        
        // Create WhatsApp URL with message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // First show the success modal with the order number
        orderNumberSpan.textContent = orderNumber;
        orderSuccessModal.style.display = 'flex';
        
        // Clear the cart
        clearCart();
        
        // Set a timeout to redirect to WhatsApp after showing the success modal
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 2000);
    }
    
    // Validate form data
    function validateOrderForm(formData) {
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const city = formData.get('city');
        
        // Check required fields
        if (!fullName || !phone || !address || !city) {
            alert('Please fill in all required fields');
            return false;
        }
        
        // Validate email format if provided
        if (email && !isValidEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        // Validate phone format (Bangladesh format)
        if (!isValidBangladeshPhone(phone)) {
            alert('Please enter a valid Bangladesh phone number');
            return false;
        }
        
        return true;
    }
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Validate Bangladesh phone number
    function isValidBangladeshPhone(phone) {
        // Allow +880 or 0 followed by the operator code and 8 more digits
        const bdPhoneRegex = /^(?:\+?880|0)1[3-9]\d{8}$/;
        return bdPhoneRegex.test(phone);
    }
    
    // Sanitize input to prevent XSS
    function sanitizeInput(input) {
        if (!input) return '';
        
        // Convert to string and replace HTML special chars
        return String(input)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
    
    // Calculate subtotal
    function calculateSubtotal() {
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
    
    // Generate a random order number
    function generateOrderNumber() {
        const prefix = 'AB';
        const timestamp = new Date().getTime().toString().slice(-6);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `${prefix}${timestamp}${random}`;
    }
    
    // Show order success modal
    function showOrderSuccess(orderNumber) {
        orderNumberSpan.textContent = orderNumber;
        orderSuccessModal.style.display = 'flex';
    }
    
    // Clear cart data
    function clearCart() {
        localStorage.removeItem('easternPickleCart');
    }
    
    // Make sure init is called
    init();
}); 