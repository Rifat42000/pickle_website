// Main JavaScript - Ammur Achar

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSearchBar();
    initBackToTop();
    initCart();
    initOptionsModal();
    initProductDetailsModal();
    initProductSlider();
    initTestimonialsSlider();
    initBlogSlider();
    initCategoryFilters();
    initFaqAccordion();
    initAnimations();
    initProfileDropdown();
    initNewsletterForm();
    
    // Add direct event handler for language changes to fix Choose Options button
    if (typeof window.setLanguage === 'function') {
        const originalSetLanguage = window.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            // After language switch, directly reinitialize option buttons
            setTimeout(function() {
                fixOptionButtons();
            }, 200);
        };
    }
});

// Simplified Mobile Menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const middleNav = document.querySelector('.middle-nav');
    const body = document.body;
    
    if (!menuToggle || !middleNav) return;
    
    // Create spans for the hamburger icon if they don't exist
    if (menuToggle.children.length === 0) {
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            menuToggle.appendChild(span);
        }
    }
    
    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        middleNav.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Show/hide overlay
        if (middleNav.classList.contains('active')) {
            overlay.style.display = 'block';
            overlay.classList.add('active');
        } else {
            overlay.style.display = 'none';
            overlay.classList.remove('active');
        }
    });
    
    // Close menu when clicking the overlay
    overlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        middleNav.classList.remove('active');
        body.classList.remove('menu-open');
        overlay.style.display = 'none';
        overlay.classList.remove('active');
    });
    
    // Close menu when clicking menu links
    const menuLinks = middleNav.querySelectorAll('a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            middleNav.classList.remove('active');
            body.classList.remove('menu-open');
            overlay.style.display = 'none';
            overlay.classList.remove('active');
        });
    });
    
    // Close menu on window resize if width > 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            middleNav.classList.remove('active');
            body.classList.remove('menu-open');
            overlay.style.display = 'none';
            overlay.classList.remove('active');
        }
    });
}

// Search Bar Functionality
function initSearchBar() {
    const searchForm = document.querySelector('.search-bar form');
    const searchInput = document.querySelector('.search-bar input');
    
    if (!searchForm || !searchInput) return;
    
    // Handle search results page
    if (window.location.pathname.includes('search-results.html')) {
        loadSearchResults();
    }
}

// Load and display search results
function loadSearchResults() {
    // Get search parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query') || '';
    
    // Update the search form with the current query
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.value = searchQuery;
    }
    
    // Update search summary
    const searchSummary = document.getElementById('search-summary');
    if (searchSummary) {
        if (searchQuery) {
            searchSummary.textContent = `Showing results for "${searchQuery}"`;
        } else {
            searchSummary.textContent = 'Showing all products';
        }
    }
    
    // Clone product cards from collections page data (normally this would be a server call)
    fetchProductsData().then(productsData => {
        const resultsGrid = document.querySelector('.search-results-grid');
        const noResultsEl = document.getElementById('no-results');
        
        if (!resultsGrid || !noResultsEl) return;
        
        // Filter products based on search term
        const filteredProducts = productsData.filter(product => {
            return !searchQuery || 
                product.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
        
        // Show results or no results message
        if (filteredProducts.length > 0) {
            resultsGrid.innerHTML = '';
            filteredProducts.forEach(product => {
                resultsGrid.appendChild(createProductCard(product));
            });
            resultsGrid.style.display = 'grid';
            noResultsEl.style.display = 'none';
        } else {
            resultsGrid.style.display = 'none';
            noResultsEl.style.display = 'block';
            
            // Update no results message with search term
            const noResultsMessage = noResultsEl.querySelector('p');
            if (noResultsMessage && searchQuery) {
                noResultsMessage.innerHTML = `No products found matching "<strong>${searchQuery}</strong>"`;
            }
        }
        
        // Initialize product details and options functionality for the new cards
        initProductDetailsModal();
        initOptionsModal();
        
        // Make sure option buttons work correctly regardless of language
        fixOptionButtons();
    });
}

// Mock function to fetch products data (would be a server call in production)
function fetchProductsData() {
    // Check if we're in development or production
    const isDevelopment = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';
    
    // API endpoint - would be an actual URL in production
    const apiEndpoint = isDevelopment ? 
        '/mock-data/products.json' : 
        'https://api.acharbazar.com/products';
        
    // In development mode, use mock data
    if (isDevelopment) {
    return new Promise(resolve => {
            console.log('Using mock product data (development mode)');
        // Sample product data - in production this would come from a server
        const products = [
            {
                    id: "gm001",
                name: "Garlic Mayo Dipping Sauce",
                price: "From Tk 280",
                    priceValue: 280,
                availability: "Available",
                image: "assets/images/products/garlic-mayo.jpg",
                category: "dips",
                isNew: false
            },
            {
                    id: "hm001",
                name: "Honey Mustard Dipping Sauce",
                price: "From Tk 280",
                    priceValue: 280,
                availability: "Available",
                image: "assets/images/products/honey-mustard.jpg",
                category: "dips",
                isNew: true
            },
            {
                    id: "nc001",
                name: "Naga Chili Dipping Sauce",
                price: "From Tk 260",
                    priceValue: 260,
                availability: "Available",
                image: "assets/images/products/naga-chili.jpg",
                category: "dips",
                isNew: false
            },
            {
                    id: "sc001",
                name: "Sweet Chili Dipping Sauce",
                price: "From Tk 260",
                    priceValue: 260,
                availability: "Available",
                image: "assets/images/products/sweet-chili.jpg",
                category: "dips",
                isNew: false
            },
            {
                    id: "gc001",
                name: "Green Chili Dipping Sauce",
                price: "From Tk 260",
                    priceValue: 260,
                availability: "Available",
                image: "assets/images/products/green-chili.jpg",
                category: "dips",
                isNew: false
                }
            ];
            setTimeout(() => resolve(products), 100); // Simulate network delay
        });
    }
    
    // In production mode, use actual API
    return fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            // Fallback to empty array if API fails
            return [];
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id || generateProductId(product.name);
    
    // Create card content
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy"; // Add lazy loading
    // Add fallback for missing images
    img.onerror = function() {
        this.src = 'assets/images/placeholder-product.jpg';
        this.alt = 'Product image not available';
    };
    
    const productImage = document.createElement('div');
    productImage.className = 'product-image';
    productImage.appendChild(img);
    
    // Add new badge if product is new
    if (product.isNew) {
        const newBadge = document.createElement('span');
        newBadge.className = 'new-badge';
        newBadge.textContent = 'NEW';
        productImage.appendChild(newBadge);
    }
    
    // Create product info
    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';
    
    // Product title
    const title = document.createElement('h3');
    title.textContent = product.name;
    
    // Product price
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = product.price;
    
    // Unit price note
    const unitPrice = document.createElement('p');
    unitPrice.className = 'unit-price';
    unitPrice.textContent = 'Unit price';
    
    // Availability
    const availability = document.createElement('p');
    availability.className = 'availability';
    availability.textContent = product.availability || 'Available';
    
    // Product actions
    const productActions = document.createElement('div');
    productActions.className = 'product-actions';
    
    // Choose options button
    const optionsBtn = document.createElement('button');
    optionsBtn.className = 'options-btn';
    optionsBtn.setAttribute('data-original-text', 'Choose options');
    optionsBtn.textContent = 'Choose options';
    
    // View details button
    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'view-details-btn';
    detailsBtn.setAttribute('data-original-text', 'View details');
    detailsBtn.textContent = 'View details';
    
    // Append everything
    productActions.appendChild(optionsBtn);
    productActions.appendChild(detailsBtn);
    
    productInfo.appendChild(title);
    productInfo.appendChild(price);
    productInfo.appendChild(unitPrice);
    productInfo.appendChild(availability);
    productInfo.appendChild(productActions);
    
    card.appendChild(productImage);
    card.appendChild(productInfo);
    
    return card;
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        // Simple scroll handler with minimal processing
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Simple click handler with native smooth scrolling
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Check initial scroll position
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        }
    }
}

// Cart Functionality
function initCart() {
    // Cart data structure
    let cart = loadCart();
    updateCartCount(cart);
    
    const cartBtn = document.querySelector('.cart-btn');
    const cartModal = document.querySelector('.cart-modal');
    const closeBtn = cartModal?.querySelector('.close-btn');
    const startShoppingBtn = cartModal?.querySelector('.start-shopping-btn');
    const checkoutBtn = cartModal?.querySelector('.checkout-btn');
    
    // Initialize cart modal
    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            updateCartDisplay(cart);
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Apply translations to cart modal if needed
            if (localStorage.getItem('language') === 'bn' && typeof translateCartModal === 'function') {
                translateCartModal();
            }
        });
        
        closeBtn?.addEventListener('click', function() {
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        startShoppingBtn?.addEventListener('click', function() {
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
            window.location.href = 'collections.html';
        });
        
        // Add checkout button event listener
        checkoutBtn?.addEventListener('click', function() {
            if (!cart || cart.length === 0) {
                // Show a more user-friendly message when cart is empty
                const language = localStorage.getItem('language');
                const message = language === 'bn' && window.translations && window.translations["Your cart is empty. Please add items before checkout."] 
                    ? window.translations["Your cart is empty. Please add items before checkout."]
                    : "Your cart is empty. Please add items before checkout.";
                    
                alert(message);
                return;
            }
            
            try {
                // Close the cart modal first
                cartModal.classList.remove('active');
                document.body.style.overflow = '';
                
                // Save cart data again to ensure it's preserved
                saveCart(cart);
                
                // Redirect to the order page after a slight delay
                setTimeout(() => {
                    window.location.href = 'order.html';
                }, 100);
            } catch (error) {
                console.error('Error during checkout:', error);
                // Fallback in case of error
                window.location.href = 'order.html';
            }
        });
        
        // Close modal when clicking outside content
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Make addToCart function available globally
    window.addToCart = function(productData) {
        try {
            // Validate product data
            if (!productData || !productData.name || !productData.price) {
                console.error("Invalid product data:", productData);
                return cart;
            }
            
            // Ensure we're always storing the English name regardless of current language
            const originalProductName = productData.name;
            
            // Check if item already exists in cart
            const existingItemIndex = cart.findIndex(item => 
                item.id === productData.id && item.size === productData.size
            );
            
            if (existingItemIndex !== -1) {
                // Update quantity if item exists
                cart[existingItemIndex].quantity += productData.quantity || 1;
            } else {
                // Add new item - always store original English name for reference
                const productToAdd = {
                    ...productData,
                    originalName: originalProductName, // Store original English name
                    quantity: productData.quantity || 1
                };
                cart.push(productToAdd);
            }
            
            // Save cart and update UI
            saveCart(cart);
            updateCartCount(cart);
            
            // Show notification
            const cartNotification = document.querySelector('.cart-notification');
            const cartOverlay = document.querySelector('.cart-overlay');
            const notificationMessage = document.querySelector('.cart-notification-message');
            
            if (cartNotification) {
                if (notificationMessage) {
                    // Display notification with translated name if needed
                    let displayName = originalProductName;
                    if (localStorage.getItem('language') === 'bn' && window.translations && window.translations[originalProductName]) {
                        displayName = window.translations[originalProductName];
                    }
                    notificationMessage.textContent = `"${displayName}" has been added to your cart.`;
                }
                
                // Show overlay and notification
                if (cartOverlay) cartOverlay.style.display = 'block';
                cartNotification.classList.add('active');
                
                // Automatically hide after 5 seconds
                setTimeout(() => {
                    cartNotification.classList.remove('active');
                    if (cartOverlay) cartOverlay.style.display = 'none';
                }, 5000);
            }
            
            return cart;
        } catch (error) {
            console.error("Error adding to cart:", error);
            return cart;
        }
    };
    
    // Make removeFromCart function available globally
    window.removeFromCart = function(itemIndex) {
        try {
            if (itemIndex >= 0 && itemIndex < cart.length) {
                cart.splice(itemIndex, 1);
                saveCart(cart);
                updateCartCount(cart);
                updateCartDisplay(cart);
                
                // If cart is now empty, show empty message
                if (cart.length === 0) {
                    const cartEmpty = document.querySelector('.cart-modal .cart-empty');
                    const cartItems = document.querySelector('.cart-modal .cart-items');
                    if (cartEmpty) cartEmpty.style.display = 'block';
                    if (cartItems) cartItems.style.display = 'none';
                }
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };
    
    // Make updateItemQuantity function available globally
    window.updateItemQuantity = function(itemIndex, newQuantity) {
        try {
            if (itemIndex >= 0 && itemIndex < cart.length) {
                // If quantity is 0 or negative, remove the item
                if (newQuantity <= 0) {
                    removeFromCart(itemIndex);
                    return;
                }
                
                // Set a reasonable maximum quantity to prevent accidental large orders
                const maxQuantity = 20;
                const safeQuantity = Math.min(newQuantity, maxQuantity);
                
                cart[itemIndex].quantity = safeQuantity;
                saveCart(cart);
                updateCartCount(cart);
                updateCartDisplay(cart);
                
                // If in Bengali mode, ensure all quantities are properly displayed
                if (localStorage.getItem('language') === 'bn' && typeof translateCartModal === 'function') {
                    setTimeout(translateCartModal, 50); // Small delay to ensure DOM is updated
                }
            }
        } catch (error) {
            console.error('Error updating item quantity:', error);
        }
    };
}

// Helper functions for cart

// Load cart from localStorage
function loadCart() {
    try {
        const cartData = localStorage.getItem('easternPickleCart');
        return cartData ? JSON.parse(cartData) : [];
    } catch (e) {
        console.error('Error loading cart data:', e);
        return [];
    }
}

// Save cart to localStorage
function saveCart(cart) {
    try {
        localStorage.setItem('easternPickleCart', JSON.stringify(cart));
    } catch (e) {
        console.error('Error saving cart data:', e);
    }
}

// Update cart icon count
function updateCartCount(cart) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        if (totalItems === 0) {
            // Don't hide the element completely, just set text to "0"
            cartCount.textContent = '0';
            // Make it slightly less visible
            cartCount.style.opacity = '0.5';
        } else {
            cartCount.style.display = '';
            cartCount.style.opacity = '1';
            cartCount.textContent = totalItems;
        }
    }
}

// Calculate cart subtotal
function calculateSubtotal(cart) {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

// Update cart modal display
function updateCartDisplay(cart) {
    const cartModal = document.querySelector('.cart-modal');
    const cartEmpty = cartModal?.querySelector('.cart-empty');
    const cartItems = cartModal?.querySelector('.cart-items');
    const subtotalAmount = cartModal?.querySelector('.subtotal span:last-child');
    
    if (!cartModal) return;
    
    // Create cart items container if it doesn't exist
    if (!cartItems) {
        const newCartItems = document.createElement('div');
        newCartItems.className = 'cart-items';
        const cartContent = cartModal.querySelector('.cart-content');
        const cartFooter = cartModal.querySelector('.cart-footer');
        if (cartContent && cartFooter) {
            cartContent.insertBefore(newCartItems, cartFooter);
        }
    }
    
    const cartItemsContainer = cartModal.querySelector('.cart-items');
    
    // Show/hide empty cart message
    if (!cart || cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartItemsContainer) cartItemsContainer.style.display = 'none';
    } else {
        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartItemsContainer) {
            cartItemsContainer.style.display = 'block';
            
            // Check if we're in Bengali mode
            const isBengaliMode = localStorage.getItem('language') === 'bn';
            
            // Render cart items
            cartItemsContainer.innerHTML = cart.map((item, index) => {
                // Get translated product name if in Bengali mode
                // Use originalName (if available) or name as the base for translation
                const baseProductName = item.originalName || item.name;
                let displayName = baseProductName;
                
                if (isBengaliMode && window.translations && window.translations[baseProductName]) {
                    displayName = window.translations[baseProductName];
                }
                
                // Ensure quantity is at least 1
                const quantity = item.quantity > 0 ? item.quantity : 1;
                const itemImage = item.image || 'assets/images/placeholder-product.jpg';
                
                return `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${itemImage}" alt="${displayName}" onerror="this.src='assets/images/placeholder-product.jpg'">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="${isBengaliMode ? 'bangla-text' : ''}" data-original-text="${baseProductName}">${displayName}</h4>
                        <p class="cart-item-size">${item.size || '250g'}</p>
                        <p class="cart-item-price">Tk ${item.price} BDT</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" aria-label="Decrease quantity" onclick="updateItemQuantity(${index}, ${quantity - 1})"><i class="fas fa-minus"></i></button>
                            <span class="quantity-display">${isBengaliMode ? window.convertToBengaliNumerals(quantity) : quantity}</span>
                            <button class="quantity-btn increase" aria-label="Increase quantity" onclick="updateItemQuantity(${index}, ${quantity + 1})"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <button class="remove-item-btn" aria-label="Remove item" onclick="removeFromCart(${index})">×</button>
                </div>
                `;
            }).join('');
        }
    }
    
    // Update subtotal
    if (subtotalAmount) {
        subtotalAmount.textContent = `Tk ${calculateSubtotal(cart)} BDT`;
    }
    
    // Apply translations if in Bangla mode
    if (localStorage.getItem('language') === 'bn' && typeof translateCartModal === 'function') {
        translateCartModal();
    }
}

// Options Modal
function initOptionsModal() {
    // Create a function to set up the options buttons
    function setupOptionsButtons() {
    const optionsBtns = document.querySelectorAll('.options-btn');
    const optionsModal = document.querySelector('.options-modal');
    const closeBtn = optionsModal?.querySelector('.close-btn');
    
    if (optionsBtns.length && optionsModal) {
        optionsBtns.forEach(btn => {
                // Remove existing event listener to prevent duplicates
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);
                
                newBtn.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                const productImage = productCard.querySelector('.product-image img').src;
                const productPrice = parseInt(productCard.querySelector('.price').textContent.match(/\d+/)[0]);
                const productId = productCard.dataset.id || generateProductId(productName);
                
                optionsModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                const optionsBody = optionsModal.querySelector('.options-body');
                
                optionsBody.innerHTML = `
                    <h4>${productName}</h4>
                    <div class="option-group">
                        <label data-original-text="Size">Size</label>
                        <div class="option-buttons">
                            <button class="option-btn active" data-size="250g" data-price="${productPrice}">250g</button>
                            <button class="option-btn" data-size="500g" data-price="${Math.round(productPrice * 1.8)}">500g</button>
                            <button class="option-btn" data-size="750g" data-price="${Math.round(productPrice * 2.5)}">750g</button>
                        </div>
                    </div>
                    <div class="option-group">
                        <label data-original-text="Quantity">Quantity</label>
                        <div class="quantity-selector">
                                <button class="quantity-btn decrease"><i class="fas fa-minus"></i></button>
                            <input type="number" value="1" min="1" max="10" style="display:none;">
                            <span class="quantity-display">1</span>
                                <button class="quantity-btn increase"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="price-display">Price: <span>Tk ${productPrice} BDT</span></div>
                    <button class="add-to-cart-btn" data-original-text="Add to Cart">Add to Cart</button>
                `;
                
                // Apply current language if using the language module
                if (window.languageModule) {
                    const currentLanguage = localStorage.getItem('language') || 'english';
                    window.languageModule.updateContent(currentLanguage);
                }
                    
                    // Apply Bengali translation if needed
                    if (localStorage.getItem('language') === 'bn') {
                        // Special handling for translations - make sure window.translations is available
                        if (!window.translations) {
                            console.warn("Translations not available, loading defaults");
                            window.translations = {
                                "Add to Cart": "কার্টে যোগ করুন",
                                "Size": "আকার",
                                "Quantity": "পরিমাণ",
                                "Price:": "মূল্য:",
                                "Product Options": "পণ্যের বিকল্প"
                            };
                        }
                    
                        // Translate the modal header first
                        const modalHeader = optionsModal.querySelector('.options-header h3');
                        if (modalHeader && window.translations && window.translations["Product Options"]) {
                            modalHeader.textContent = window.translations["Product Options"];
                            modalHeader.classList.add('bangla-text');
                        }
                    
                        // Translate Add to Cart button
                        const modalAddToCartBtn = optionsBody.querySelector('.add-to-cart-btn');
                        if (modalAddToCartBtn && window.translations && window.translations["Add to Cart"]) {
                            modalAddToCartBtn.textContent = window.translations["Add to Cart"];
                            modalAddToCartBtn.classList.add('bangla-text');
                        }
                        
                        const sizeLabel = optionsBody.querySelector('label[data-original-text="Size"]');
                        if (sizeLabel && window.translations && window.translations["Size"]) {
                            sizeLabel.textContent = window.translations["Size"];
                            sizeLabel.classList.add('bangla-text');
                        }
                        
                        const quantityLabel = optionsBody.querySelector('label[data-original-text="Quantity"]');
                        if (quantityLabel && window.translations && window.translations["Quantity"]) {
                            quantityLabel.textContent = window.translations["Quantity"];
                            quantityLabel.classList.add('bangla-text');
                        }
                        
                        const modalPriceDisplay = optionsBody.querySelector('.price-display');
                        if (modalPriceDisplay && window.translations && window.translations["Price:"]) {
                            const priceText = `Tk ${productPrice} BDT`;
                            modalPriceDisplay.innerHTML = `${window.translations["Price:"]} <span>${typeof window.convertToBengaliNumerals === 'function' ? window.convertToBengaliNumerals(priceText) : priceText}</span>`;
                            modalPriceDisplay.classList.add('bangla-text');
                        }
                        
                        // This block is now handled by the updatePriceDisplay function
                        // and the initialization code that follows it
                    }
                
                // Initialize option buttons
                const optionBtns = optionsBody.querySelectorAll('.option-btn');
                const priceDisplay = optionsBody.querySelector('.price-display span');
                    
                    // Safety check to ensure at least one option button exists
                    if (!optionBtns || optionBtns.length === 0) {
                        console.error("No option buttons found in options modal");
                        return;
                    }
                    
                    let selectedSize = optionBtns[0].dataset.size || "250g";
                    let selectedPrice = parseInt(optionBtns[0].dataset.price || productPrice);
                
                optionBtns.forEach(optBtn => {
                    optBtn.addEventListener('click', function() {
                        optionBtns.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                            selectedSize = this.dataset.size || "250g";
                            selectedPrice = parseInt(this.dataset.price || productPrice);
                        
                        // Update price display using the common function
                        updatePriceDisplay();
                    });
                });
                
                // Initialize quantity selector
                const quantityInput = optionsBody.querySelector('input[type="number"]');
                const quantityDisplay = optionsBody.querySelector('.quantity-display');
                const decreaseBtn = optionsBody.querySelector('.decrease');
                const increaseBtn = optionsBody.querySelector('.increase');
                
                // Make sure initial value is set
                if (quantityInput) quantityInput.value = 1;
                
                // Initialize quantity display
                if (quantityDisplay) {
                    quantityDisplay.textContent = localStorage.getItem('language') === 'bn' && window.convertToBengaliNumerals
                        ? window.convertToBengaliNumerals('1')
                        : '1';
                }
                
                function updatePriceDisplay() {
                    // Check if quantityInput exists
                    if (!quantityInput) return;
                    
                    const quantity = parseInt(quantityInput.value) || 1;
                    let priceText = `Tk ${selectedPrice * quantity} BDT`;
                    
                    // Update the display span with proper numerals
                    if (quantityDisplay) {
                        if (localStorage.getItem('language') === 'bn' && window.convertToBengaliNumerals) {
                            quantityDisplay.textContent = window.convertToBengaliNumerals(quantity.toString());
                            
                            // Also update price with Bengali numerals
                            if (priceDisplay) {
                                priceDisplay.textContent = window.convertToBengaliNumerals(priceText);
                            }
                        } else {
                            quantityDisplay.textContent = quantity.toString();
                            
                            // Update price with regular numerals
                            if (priceDisplay) {
                                priceDisplay.textContent = priceText;
                            }
                        }
                    } else {
                        // If no quantity display, just update price
                        priceDisplay.textContent = localStorage.getItem('language') === 'bn' && window.convertToBengaliNumerals
                            ? window.convertToBengaliNumerals(priceText)
                            : priceText;
                    }
                }
                
                if (decreaseBtn && quantityInput) {
                    decreaseBtn.addEventListener('click', function() {
                        if (parseInt(quantityInput.value) > 1) {
                            const numValue = parseInt(quantityInput.value) - 1;
                            // Update the hidden input value
                            quantityInput.value = numValue;
                            updatePriceDisplay();
                        }
                    });
                }
                
                if (increaseBtn && quantityInput) {
                    increaseBtn.addEventListener('click', function() {
                        if (parseInt(quantityInput.value) < 10) {
                            const numValue = parseInt(quantityInput.value) + 1;
                            // Update the hidden input value
                            quantityInput.value = numValue;
                            updatePriceDisplay();
                        }
                    });
                }
                
                quantityInput.addEventListener('change', updatePriceDisplay);
                
                // Initial update of price display
                updatePriceDisplay();
                
                // Add to cart button
                const addToCartBtn = optionsBody.querySelector('.add-to-cart-btn');
                addToCartBtn.addEventListener('click', function() {
                    const productData = {
                        id: productId,
                        name: productName,
                        price: selectedPrice,
                        size: selectedSize,
                        quantity: parseInt(quantityInput.value || 1),
                        image: productImage
                    };
                    
                    window.addToCart(productData);
                    
                    optionsModal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        });
        
        closeBtn?.addEventListener('click', function() {
            optionsModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        optionsModal?.addEventListener('click', function(e) {
            if (e.target === optionsModal) {
                optionsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    }
    
    // Initial setup
    setupOptionsButtons();
    
    // Also apply our direct fix
    fixOptionButtons();
    
    // Attach event listener to language switch
    document.addEventListener('languageChanged', function() {
        setTimeout(setupOptionsButtons, 100); // Allow time for DOM updates
        setTimeout(fixOptionButtons, 200); // Add direct fix as well
    });
    
    // Cart notification handling
    const cartNotification = document.querySelector('.cart-notification');
    const cartOverlay = document.querySelector('.cart-overlay');
    const viewCartBtn = cartNotification?.querySelector('.view-cart-btn');
    
    // Show overlay when notification is shown
    const originalAddToCart = window.addToCart;
    if (originalAddToCart && cartOverlay) {
        window.addToCart = function(productData) {
            const result = originalAddToCart(productData);
            cartOverlay.style.display = 'block';
            
            // Hide overlay when notification is hidden
            setTimeout(() => {
                cartOverlay.style.display = 'none';
            }, 5000);
            
            return result;
        };
    }
    
    // Close notification when clicking overlay
    cartOverlay?.addEventListener('click', function() {
        if (cartNotification) {
            cartNotification.classList.remove('active');
            cartOverlay.style.display = 'none';
        }
    });
    
    viewCartBtn?.addEventListener('click', function() {
        if (cartNotification) {
            cartNotification.classList.remove('active');
            cartOverlay.style.display = 'none';
        }
        
        // Open cart modal
        const cartModal = document.querySelector('.cart-modal');
        if (cartModal) {
            // Update cart display before opening
            updateCartDisplay(loadCart());
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

// Helper to generate a product ID from name
function generateProductId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now().toString(36);
}

// Product Slider functionality for Top Selling
function initProductSlider() {
    const productGrid = document.querySelector('.top-selling .product-grid');
    const prevBtn = document.querySelector('.top-selling .prev-btn');
    const nextBtn = document.querySelector('.top-selling .next-btn');
    
    if (!productGrid || !prevBtn || !nextBtn) return;
    
    // Configuration
    const isMobile = window.innerWidth <= 768;
    const cardsToShow = isMobile ? 1 : 3;
    let currentPosition = 0;
    let totalSlides = 0;
    
    // Initialize the slider based on viewport
    initializeSlider();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
            // If switching between mobile and desktop view, reinitialize slider
            initializeSlider();
        }
    });
    
    // Set up click events for navigation
    prevBtn.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPosition < totalSlides - 1) {
            currentPosition++;
            updateSliderPosition();
        }
    });
    
    function updateSliderPosition() {
        // On mobile, use single card view and show/hide cards
        if (window.innerWidth <= 768) {
            const cards = productGrid.querySelectorAll('.product-card');
            cards.forEach((card, index) => {
                if (index === currentPosition) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update button states
            prevBtn.disabled = currentPosition === 0;
            nextBtn.disabled = currentPosition === totalSlides - 1;
            
            // Update button appearance based on state
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        } else {
            // On desktop, use slide animation with multiple cards visible
            const slideWidth = productGrid.offsetWidth / cardsToShow;
            const translateX = -currentPosition * slideWidth;
            productGrid.style.transform = `translateX(${translateX}px)`;
        }
    }
    
    function initializeSlider() {
        const cards = productGrid.querySelectorAll('.product-card');
        totalSlides = cards.length;
        currentPosition = 0;
        
        if (window.innerWidth <= 768) {
            // Mobile view - stack cards vertically and show/hide
            productGrid.style.display = 'block';
            productGrid.style.transform = 'none';
            cards.forEach((card, index) => {
                if (index === 0) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show navigation controls
            prevBtn.disabled = true;
            prevBtn.style.opacity = '0.5';
            nextBtn.disabled = totalSlides <= 1;
            nextBtn.style.opacity = totalSlides <= 1 ? '0.5' : '1';
        } else {
            // Desktop view - restore grid layout
            productGrid.style.display = 'grid';
            productGrid.style.transform = 'none';
            cards.forEach(card => {
                card.style.display = 'flex';
            });
        }
    }
}

// Testimonials Slider
function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials-slider');
    const slides = slider?.querySelectorAll('.testimonial-slide');
    const pauseBtn = document.querySelector('.testimonials .pause-btn');
    const playBtn = document.querySelector('.testimonials .play-btn');
    
    if (slider && slides?.length) {
        let currentSlide = 0;
        let intervalId = null;
        
        // Hide all slides except the first one
        slides.forEach((slide, index) => {
            if (index !== 0) {
                slide.style.display = 'none';
            }
        });
        
        function showSlide(index) {
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.style.opacity = '0';
            });
            
            slides[index].style.display = 'block';
            
            // Trigger reflow for animation
            slides[index].offsetHeight;
            
            slides[index].style.opacity = '1';
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Auto play
        function startAutoplay() {
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(nextSlide, 5000);
            
            if (pauseBtn && playBtn) {
                pauseBtn.style.display = 'block';
                playBtn.style.display = 'none';
            }
        }
        
        function stopAutoplay() {
            if (intervalId) clearInterval(intervalId);
            intervalId = null;
            
            if (pauseBtn && playBtn) {
                pauseBtn.style.display = 'none';
                playBtn.style.display = 'block';
            }
        }
        
        // Start autoplay
        startAutoplay();
        
        // Pause/Play buttons
        pauseBtn?.addEventListener('click', stopAutoplay);
        playBtn?.addEventListener('click', startAutoplay);
        
        // Touch events for mobile swipe
        let touchStartX = 0;
        
        slider.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            stopAutoplay();
        });
        
        slider.addEventListener('touchend', function(e) {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            
            if (diff > 50) {
                nextSlide(); // Swipe left, go to next slide
            } else if (diff < -50) {
                prevSlide(); // Swipe right, go to previous slide
            }
            
            startAutoplay();
        });
    }
}

// Blog Slider
function initBlogSlider() {
    const blogGrid = document.querySelector('.blog-grid');
    const prevBtn = document.querySelector('.featured-blog .prev-btn');
    const nextBtn = document.querySelector('.featured-blog .next-btn');
    
    if (blogGrid && prevBtn && nextBtn) {
        const blogs = blogGrid.querySelectorAll('.blog-card');
        const blogWidth = blogs[0]?.offsetWidth || 0;
        const gap = 24; // --spacing-lg in pixels
        
        let currentIndex = 0;
        
        nextBtn.addEventListener('click', function() {
            currentIndex = Math.min(currentIndex + 1, blogs.length - 2);
            updateSliderPosition();
        });
        
        prevBtn.addEventListener('click', function() {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateSliderPosition();
        });
        
        function updateSliderPosition() {
            const translateX = -1 * currentIndex * (blogWidth + gap);
            blogGrid.style.transform = `translateX(${translateX}px)`;
        }
        
        // Initialize slider for mobile only
        function initializeSlider() {
            if (window.innerWidth < 768) {
                blogGrid.style.display = 'flex';
                blogGrid.style.gap = `${gap}px`;
                blogGrid.style.transition = 'transform 0.3s ease';
                blogGrid.style.width = 'max-content';
                
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
            } else {
                blogGrid.style.display = 'grid';
                blogGrid.style.transform = '';
                
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            }
        }
        
        initializeSlider();
        window.addEventListener('resize', initializeSlider);
    }
}

// Category Filters
function initCategoryFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    if (categoryFilters.length && productCards.length) {
        categoryFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Update active state
                categoryFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                
                // Filter products
                productCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = '';
                        
                        // Add fade-in animation
                        card.style.animation = 'none';
                        card.offsetHeight; // Trigger reflow
                        card.style.animation = 'fadeIn 0.8s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Check URL parameters for category filtering
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        const targetFilter = document.querySelector(`.category-filter[data-category="${categoryParam}"]`);
        if (targetFilter) {
            targetFilter.click();
        }
    }
}

// FAQ Accordion
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Open clicked item if it wasn't already open
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
}

// Animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Product Details Modal Functionality
function initProductDetailsModal() {
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    const productDetailsModal = document.querySelector('.product-details-modal');
    const closeBtn = productDetailsModal?.querySelector('.close-btn');
    
    if (!productDetailsModal) return;
    
    // Product details data - in a real application, this would come from a database or API
    const productDetails = {
        "Garlic Mayo Dipping Sauce": {
            description: "Our signature Garlic Mayo Dipping Sauce is a creamy blend of rich mayonnaise infused with fresh garlic, herbs, and special spices. Perfect for dipping, spreading, or as a flavor enhancer for your favorite dishes.",
            ingredients: "Mayonnaise (vegetable oil, egg yolk, vinegar, salt), garlic, herbs, spices, lemon juice, natural flavors. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "120 kcal" },
                { name: "Total Fat", value: "12g" },
                { name: "Saturated Fat", value: "2g" },
                { name: "Carbohydrates", value: "1g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "150mg" }
            ]
        },
        "Honey Mustard Dipping Sauce": {
            description: "A perfect balance of sweet honey and tangy mustard creates this golden, velvety sauce. Our Honey Mustard Dipping Sauce adds a delightful zing to sandwiches, wraps, and is an excellent dipping sauce for chicken and vegetables.",
            ingredients: "Mustard (water, mustard seeds, vinegar, salt), honey, vegetable oil, egg yolk, spices, turmeric. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "110 kcal" },
                { name: "Total Fat", value: "8g" },
                { name: "Saturated Fat", value: "1g" },
                { name: "Carbohydrates", value: "10g" },
                { name: "Sugars", value: "8g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "180mg" }
            ]
        },
        "Naga Chili Dipping Sauce": {
            description: "For the brave and the bold, our Naga Chili Dipping Sauce brings the authentic heat of the famous Naga chili pepper, balanced with a hint of sweetness and tanginess. Perfect for those who love to spice things up!",
            ingredients: "Red chili peppers, Naga chili peppers (5%), vinegar, sugar, garlic, salt, natural spices and herbs. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "45 kcal" },
                { name: "Total Fat", value: "0.5g" },
                { name: "Carbohydrates", value: "10g" },
                { name: "Sugars", value: "8g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "220mg" }
            ]
        },
        "Sweet Chili Dipping Sauce": {
            description: "A harmony of sweet and mild heat, our Sweet Chili Dipping Sauce is a versatile condiment that adds a delightful twist to spring rolls, grilled meats, and seafood. The perfect balance of sweet, sour, and spicy.",
            ingredients: "Sugar, water, red chili peppers, vinegar, garlic, salt, modified corn starch. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "60 kcal" },
                { name: "Total Fat", value: "0g" },
                { name: "Carbohydrates", value: "15g" },
                { name: "Sugars", value: "12g" },
                { name: "Protein", value: "0g" },
                { name: "Sodium", value: "150mg" }
            ]
        },
        "Green Chili Dipping Sauce": {
            description: "Made with fresh green chilies, this vibrant sauce offers a medium heat with herbal notes. Our Green Chili Dipping Sauce is perfect for enhancing the flavor of grilled meats, sandwiches, and as a dip for crackers and chips.",
            ingredients: "Green chili peppers, vegetable oil, vinegar, garlic, coriander, salt, spices. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "50 kcal" },
                { name: "Total Fat", value: "4g" },
                { name: "Carbohydrates", value: "4g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "180mg" }
            ]
        },
        "Red Chili Dipping Sauce": {
            description: "A rich, deep-flavored sauce with a medium-to-hot heat profile. Our Red Chili Dipping Sauce combines ripe red chilies with aromatic spices for a bold flavor that elevates any dish, from pasta to pizza to grilled meats.",
            ingredients: "Red chili peppers, tomato paste, vegetable oil, garlic, vinegar, salt, spices. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "55 kcal" },
                { name: "Total Fat", value: "4.5g" },
                { name: "Carbohydrates", value: "5g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "200mg" }
            ]
        },
        "Alu Bukhara Pickle": {
            description: "A traditional favorite, our Alu Bukhara (Plum) Pickle combines the sweet-sour taste of plums with aromatic spices for a tangy, sweet experience that complements any meal.",
            ingredients: "Alu bukhara (plums), mustard oil, salt, sugar, vinegar, spices and herbs. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "80 kcal" },
                { name: "Total Fat", value: "4g" },
                { name: "Carbohydrates", value: "10g" },
                { name: "Sugars", value: "8g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "350mg" }
            ]
        },
        "Amchur Pickle": {
            description: "Made from raw green mangoes, our Amchur Pickle has a delightful tangy flavor profile with a perfect balance of spices. It adds a burst of zesty flavor to elevate your meals.",
            ingredients: "Raw green mangoes, mustard oil, salt, fenugreek, turmeric, red chili powder, spices. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "70 kcal" },
                { name: "Total Fat", value: "5g" },
                { name: "Carbohydrates", value: "8g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "380mg" }
            ]
        },
        "Jolpai Pickle": {
            description: "A unique Bengali delicacy, our Jolpai (Olive) Pickle combines the distinct taste of local olives with traditional spices for a savory-tangy experience that pairs perfectly with rice and lentils.",
            ingredients: "Jolpai (olives), mustard oil, salt, fenugreek, nigella seeds, turmeric, red chili powder. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "85 kcal" },
                { name: "Total Fat", value: "7g" },
                { name: "Carbohydrates", value: "5g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "370mg" }
            ]
        },
        "Garam Masala": {
            description: "Our signature Garam Masala is a carefully crafted blend of aromatic spices, toasted to perfection to release their essential oils. This authentic blend adds depth and warmth to curries, rice dishes, and vegetables.",
            ingredients: "Cardamom, cinnamon, cloves, cumin, coriander, black pepper, nutmeg. Contains no fillers, preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "25 kcal per tsp" },
                { name: "Total Fat", value: "1g" },
                { name: "Carbohydrates", value: "4g" },
                { name: "Protein", value: "1g" },
                { name: "Sodium", value: "5mg" }
            ]
        },
        "Bhuna Masala": {
            description: "Our Bhuna Masala is a robust blend of spices that have been roasted and ground to create a rich, fragrant base for curries and stews. This time-saving blend brings authentic flavor to your home cooking.",
            ingredients: "Roasted cumin, coriander, red chilies, garlic, ginger, turmeric, cinnamon, cardamom. Contains no fillers, preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "30 kcal per tsp" },
                { name: "Total Fat", value: "1.5g" },
                { name: "Carbohydrates", value: "5g" },
                { name: "Protein", value: "1g" },
                { name: "Sodium", value: "10mg" }
            ]
        },
        "Premium Mixed Pickle Collection": {
            description: "Our Premium Mixed Pickle Collection is a handcrafted assortment of traditional Bengali pickles made with heirloom recipes. This exclusive selection features five distinct varieties including mango, olive, tamarind, chili, and lemon - each carefully prepared with the finest ingredients and authentic spices to deliver an explosion of flavors that enhance any meal.",
            ingredients: "Assorted fruits and vegetables (mango, olive, tamarind, chili, lemon), mustard oil, salt, turmeric, red chili powder, fenugreek seeds, mustard seeds, fennel seeds, nigella seeds, natural spices. Contains no preservatives or artificial colors.",
            nutrition: [
                { name: "Calories", value: "45 kcal per tbsp" },
                { name: "Total Fat", value: "3.5g" },
                { name: "Carbohydrates", value: "6g" },
                { name: "Sugars", value: "3g" },
                { name: "Protein", value: "0.5g" },
                { name: "Sodium", value: "320mg" }
            ]
        }
    };
    
    // Open modal when clicking view details button
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productImage = productCard.querySelector('.product-image img').src;
            const productTitle = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            const productAvailability = productCard.querySelector('.availability').textContent;
            
            // Get product details from the data object
            const details = productDetails[productTitle] || {
                description: "Product description coming soon.",
                ingredients: "Ingredients information coming soon.",
                nutrition: []
            };
            
            // Ensure Bengali translation for fallback text when in Bengali mode
            if (localStorage.getItem('language') === 'bn' && details.description === "Product description coming soon.") {
                details.description = "পণ্যের বিবরণ শীঘ্রই আসছে।";
            }
            
            if (localStorage.getItem('language') === 'bn' && details.ingredients === "Ingredients information coming soon.") {
                details.ingredients = "উপাদান সম্পর্কিত তথ্য শীঘ্রই আসছে।";
            }
            
            // Update modal content
            const modal = document.querySelector('.product-details-modal');
            const modalImage = modal.querySelector('.product-details-image');
            const modalTitle = modal.querySelector('.product-details-title');
            const modalPrice = modal.querySelector('.product-details-price');
            const modalAvailability = modal.querySelector('.product-details-availability');
            const modalDescription = modal.querySelector('.product-details-description p');
            const modalIngredients = modal.querySelector('.product-details-ingredients p');
            const modalNutrition = modal.querySelector('.product-details-nutrition ul');
            
            // SUPER DIRECT FIX: Check if this is a garlic mayo product
            const isGarlicMayo = productImage.includes("garlic-mayo") || 
                               productTitle === "Garlic Mayo Dipping Sauce" || 
                               productTitle === "গার্লিক মেয়ো ডিপিং সস";
            
            // Check language in both formats (some places use 'bn', others use 'bangla')
            const isBengaliMode = localStorage.getItem('language') === 'bn' || localStorage.getItem('language') === 'bangla';
            
            // Force Bengali translations for Garlic Mayo regardless of language setting
            if (isGarlicMayo && isBengaliMode) {
                console.log("FORCE OVERRIDE: Setting Garlic Mayo Bengali content", productTitle);
                // Immediate application
                const descHeader = modal.querySelector('.product-details-description h4');
                const ingHeader = modal.querySelector('.product-details-ingredients h4');
                const nutHeader = modal.querySelector('.product-details-nutrition h4');
                
                if (descHeader) descHeader.textContent = "বিবরণ";
                if (ingHeader) ingHeader.textContent = "উপাদান";
                if (nutHeader) nutHeader.textContent = "পুষ্টিতথ্য";
                
                // Set Bengali description and ingredients immediately
                modalDescription.textContent = "আমাদের সিগনেচার গার্লিক মেয়ো ডিপিং সস হল তাজা রসুন, ভেষজ এবং বিশেষ মশলা দিয়ে মিশ্রিত সমৃদ্ধ মেয়নেজের একটি ক্রিমি মিশ্রণ। ডিপিং, ছড়ানো বা আপনার প্রিয় খাবারের জন্য স্বাদ বাড়ানোর জন্য উপযুক্ত। এটি সালাদ, সবজি, চিপস বা যেকোনো খাবারে ব্যবহার করা যেতে পারে।";
                modalIngredients.textContent = "মেয়নেজ (উদ্ভিজ্জ তেল, ডিমের কুসুম, ভিনেগার, লবণ), রসুন, ভেষজ, মশলা, লেবুর রস, প্রাকৃতিক স্বাদ। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                
                // Also apply delayed to ensure it persists after any further processing
                setTimeout(() => {
                    if (descHeader) descHeader.textContent = "বিবরণ";
                    if (ingHeader) ingHeader.textContent = "উপাদান";
                    if (nutHeader) nutHeader.textContent = "পুষ্টিতথ্য";
                    
                    modalDescription.textContent = "আমাদের সিগনেচার গার্লিক মেয়ো ডিপিং সস হল তাজা রসুন, ভেষজ এবং বিশেষ মশলা দিয়ে মিশ্রিত সমৃদ্ধ মেয়নেজের একটি ক্রিমি মিশ্রণ। ডিপিং, ছড়ানো বা আপনার প্রিয় খাবারের জন্য স্বাদ বাড়ানোর জন্য উপযুক্ত। এটি সালাদ, সবজি, চিপস বা যেকোনো খাবারে ব্যবহার করা যেতে পারে।";
                    modalIngredients.textContent = "মেয়নেজ (উদ্ভিজ্জ তেল, ডিমের কুসুম, ভিনেগার, লবণ), রসুন, ভেষজ, মশলা, লেবুর রস, প্রাকৃতিক স্বাদ। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                    
                    // Also translate nutrition facts
                    if (details.nutrition && details.nutrition.length > 0) {
                        let nutritionHTML = '';
                        details.nutrition.forEach(item => {
                            // Direct translation for nutrition terms
                            let translatedName = '';
                            if (item.name === "Calories") translatedName = "ক্যালোরি";
                            else if (item.name === "Total Fat") translatedName = "মোট ফ্যাট";
                            else if (item.name === "Saturated Fat") translatedName = "সম্পৃক্ত ফ্যাট";
                            else if (item.name === "Carbohydrates") translatedName = "কার্বোহাইড্রেট";
                            else if (item.name === "Sugars") translatedName = "চিনি";
                            else if (item.name === "Protein") translatedName = "প্রোটিন";
                            else if (item.name === "Sodium") translatedName = "সোডিয়াম";
                            else translatedName = window.languageModule.getTranslation(item.name) || item.name;
                            
                            // Convert numeric values to Bengali
                            let translatedValue = item.value;
                            if (typeof window.convertToBengaliNumerals === 'function') {
                                translatedValue = window.convertToBengaliNumerals(item.value);
                            }
                            
                            nutritionHTML += `<li><span>${translatedName}</span><span>${translatedValue}</span></li>`;
                        });
                        modalNutrition.innerHTML = nutritionHTML;
                    }
                }, 300);
            }
            
            // Set the modal content
            modalImage.innerHTML = `<img src="${productImage}" alt="${productTitle}">`;
            modalTitle.textContent = productTitle;
            modalPrice.textContent = productPrice;
            modalAvailability.textContent = productAvailability;
            
            modalDescription.textContent = details.description;
            modalIngredients.textContent = details.ingredients;
            
            // Set nutrition facts
            if (details.nutrition && details.nutrition.length > 0) {
                let nutritionHTML = '';
                details.nutrition.forEach(item => {
                    nutritionHTML += `<li><span>${item.name}</span><span>${item.value}</span></li>`;
                });
                modalNutrition.innerHTML = nutritionHTML;
            } else {
                modalNutrition.innerHTML = '<li>পুষ্টি সম্পর্কিত তথ্য শীঘ্রই আসছে।</li>';
            }
            
            // Add data attributes for translation
            modalTitle.setAttribute('data-original-text', productTitle);
            modalDescription.setAttribute('data-original-text', details.description);
            modalIngredients.setAttribute('data-original-text', details.ingredients);
            
            // Apply current language if using the language module
            if (window.languageModule) {
                const currentLanguage = localStorage.getItem('language') || 'english';
                window.languageModule.updateContent(currentLanguage);
                
                // Force bangla description if in bangla mode
                if (currentLanguage === 'bangla') {
                    const banglaTitleText = window.languageModule.getTranslation(productTitle) || productTitle;
                    modalTitle.textContent = banglaTitleText;
                    
                    // Add debug console output to help diagnose the issue
                    console.log('Product Title:', productTitle);
                    console.log('Bengali Product Title:', banglaTitleText);
                    console.log('Original Description:', details.description);
                    console.log('Language Mode:', localStorage.getItem('language'));
                    
                    // Directly translate section headers
                    const descriptionHeader = modal.querySelector('.product-details-description h4');
                    const ingredientsHeader = modal.querySelector('.product-details-ingredients h4');
                    const nutritionHeader = modal.querySelector('.product-details-nutrition h4');
                    
                    if (descriptionHeader) descriptionHeader.textContent = "বিবরণ";
                    if (ingredientsHeader) ingredientsHeader.textContent = "উপাদান";
                    if (nutritionHeader) nutritionHeader.textContent = "পুষ্টিতথ্য";
                    
                    // Get product-specific translation for the description
                    if (modalTitle.dataset.isGarlicMayo === "true" || 
                       productTitle.includes("Garlic Mayo") || 
                       (modalTitle.dataset.originalText && modalTitle.dataset.originalText.includes("Garlic Mayo")) ||
                       productTitle.includes("গালিক") ||
                       productTitle.includes("গার্লিক")) {
                        console.log('Found Garlic Mayo product!', productTitle);
                        modalDescription.textContent = "আমাদের সিগনেচার গার্লিক মেয়ো ডিপিং সস হল তাজা রসুন, ভেষজ এবং বিশেষ মশলা দিয়ে মিশ্রিত সমৃদ্ধ মেয়নেজের একটি ক্রিমি মিশ্রণ। ডিপিং, ছড়ানো বা আপনার প্রিয় খাবারের জন্য স্বাদ বাড়ানোর জন্য উপযুক্ত। এটি সালাদ, সবজি, চিপস বা যেকোনো খাবারে ব্যবহার করা যেতে পারে।";
                    } else if (details.description === "Product description coming soon.") {
                        modalDescription.textContent = "পণ্যের বিবরণ শীঘ্রই আসছে।";
                    } else if (details.description === "পণ্যের বিবরণ শীঘ্রই আসছে।") {
                        // Already has the placeholder in Bengali
                        modalDescription.textContent = details.description;
                    } else {
                        // Try to get translation from language module
                        const banglaDescriptionText = window.languageModule.getTranslation(details.description);
                        if (banglaDescriptionText) {
                            modalDescription.textContent = banglaDescriptionText;
                        } else {
                            // Comprehensive fallback bangla descriptions based on product type
                            if (productTitle.includes("Honey Mustard")) {
                                modalDescription.textContent = "মিষ্টি মধু এবং টক সরিষার একটি নিখুঁত ভারসাম্য এই সোনালী, ভেলভেটি সস তৈরি করে। আমাদের হানি মাস্টার্ড ডিপিং সস স্যান্ডউইচ, র‍্যাপ-এ একটি আনন্দদায়ক স্বাদ যোগ করে এবং মুরগি ও শাকসবজির জন্য একটি চমৎকার ডিপিং সস। এর রঙ সোনালি এবং টেক্সচার ক্রিমি।";
                            } else {
                                modalDescription.textContent = "পণ্যের বিবরণ শীঘ্রই আসছে।";
                            }
                        }
                    }
                    
                    // Ensure bangla ingredients are displayed
                    if (modalTitle.dataset.isGarlicMayo === "true" || 
                       productTitle.includes("Garlic Mayo") || 
                       (modalTitle.dataset.originalText && modalTitle.dataset.originalText.includes("Garlic Mayo")) ||
                       productTitle.includes("গালিক") ||
                       productTitle.includes("গার্লিক")) {
                        console.log('Found Garlic Mayo ingredients!', productTitle);
                        modalIngredients.textContent = "মেয়নেজ (উদ্ভিজ্জ তেল, ডিমের কুসুম, ভিনেগার, লবণ), রসুন, ভেষজ, মশলা, লেবুর রস, প্রাকৃতিক স্বাদ। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                    } else {
                        const banglaIngredientsText = window.languageModule.getTranslation(details.ingredients);
                        if (banglaIngredientsText) {
                            modalIngredients.textContent = banglaIngredientsText;
                        } else {
                            // Comprehensive fallback bangla ingredients based on product type
                            if (productTitle.includes("Honey Mustard")) {
                                modalIngredients.textContent = "সরিষা (পানি, সরিষার বীজ, ভিনেগার, লবণ), মধু, উদ্ভিজ্জ তেল, ডিমের কুসুম, মশলা, হলুদ। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Naga Chili")) {
                                modalIngredients.textContent = "লাল মরিচ, নাগা মরিচ (৫%), ভিনেগার, চিনি, রসুন, লবণ, প্রাকৃতিক মশলা এবং ভেষজ। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Sweet Chili")) {
                                modalIngredients.textContent = "চিনি, পানি, লাল মরিচ, ভিনেগার, রসুন, লবণ, সংশোধিত কর্ন স্টার্চ। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Green Chili")) {
                                modalIngredients.textContent = "সবুজ মরিচ, উদ্ভিজ্জ তেল, ভিনেগার, রসুন, ধনিয়া, লবণ, মশলা। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Red Chili")) {
                                modalIngredients.textContent = "লাল মরিচ, টমেটো পেস্ট, উদ্ভিজ্জ তেল, রসুন, ভিনেগার, লবণ, মশলা। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Alu Bukhara")) {
                                modalIngredients.textContent = "আলুবুখারা (প্লাম), সরিষার তেল, লবণ, চিনি, ভিনেগার, মশলা এবং ভেষজ। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Amchur")) {
                                modalIngredients.textContent = "কাঁচা আম, সরিষার তেল, লবণ, মেথি, হলুদ, লাল মরিচ গুঁড়া, মশলা। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Jolpai")) {
                                modalIngredients.textContent = "জলপাই, সরিষার তেল, লবণ, মেথি, কালোজিরা, হলুদ, লাল মরিচ গুঁড়া। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Garam Masala")) {
                                modalIngredients.textContent = "এলাচ, দারুচিনি, লবঙ্গ, জিরা, ধনিয়া, গোলমরিচ, জায়ফল। কোনো ফিলার, সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else if (productTitle.includes("Bhuna Masala")) {
                                modalIngredients.textContent = "ভাজা জিরা, ধনিয়া, লাল মরিচ, রসুন, আদা, হলুদ, দারুচিনি, এলাচ। কোনো ফিলার, সংরক্ষক বা কৃত্রিম রঙ নেই।";
                            } else {
                                modalIngredients.textContent = "উচ্চ মানের প্রাকৃতিক উপাদান দিয়ে তৈরি। কোনো কৃত্রিম রঙ বা সংরক্ষক নেই।";
                            }
                        }
                    }
                    
                    // Translate nutrition facts
                    if (details.nutrition && details.nutrition.length > 0) {
                        let nutritionHTML = '';
                        details.nutrition.forEach(item => {
                            // Direct translation for nutrition terms
                            let translatedName = '';
                            if (item.name === "Calories") translatedName = "ক্যালোরি";
                            else if (item.name === "Total Fat") translatedName = "মোট ফ্যাট";
                            else if (item.name === "Saturated Fat") translatedName = "সম্পৃক্ত ফ্যাট";
                            else if (item.name === "Carbohydrates") translatedName = "কার্বোহাইড্রেট";
                            else if (item.name === "Sugars") translatedName = "চিনি";
                            else if (item.name === "Protein") translatedName = "প্রোটিন";
                            else if (item.name === "Sodium") translatedName = "সোডিয়াম";
                            else translatedName = window.languageModule.getTranslation(item.name) || item.name;
                            
                            // Convert numeric values to Bengali
                            let translatedValue = item.value;
                            // Always ensure nutrition values are displayed in Bengali when in Bengali mode
                            if (currentLanguage === 'bangla') {
                                if (typeof window.convertToBengaliNumerals === 'function') {
                                    translatedValue = window.convertToBengaliNumerals(item.value);
                                }
                            }
                            
                            nutritionHTML += `<li><span>${translatedName}</span><span>${translatedValue}</span></li>`;
                        });
                        modalNutrition.innerHTML = nutritionHTML;
                    } else {
                        modalNutrition.innerHTML = '<li>পুষ্টি সম্পর্কিত তথ্য শীঘ্রই আসছে।</li>';
                    }
                }
            }
            
            // Open the modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Set up the options button in the modal to open the options modal
            const optionsBtn = modal.querySelector('.options-btn');
            if (optionsBtn) {
                optionsBtn.addEventListener('click', function() {
                    // Close details modal and open options modal
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Find the options button in the original product card and click it
                    const originalOptionsBtn = productCard.querySelector('.options-btn');
                    if (originalOptionsBtn) {
                        originalOptionsBtn.click();
                    }
                });
            }
        });
    });
    
    // Close modal when clicking close button
    closeBtn?.addEventListener('click', function() {
        productDetailsModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside content
    productDetailsModal.addEventListener('click', function(e) {
        if (e.target === productDetailsModal) {
            productDetailsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Profile Dropdown
function initProfileDropdown() {
    const profileBtn = document.querySelector('.profile-btn');
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    if (!profileBtn || !profileDropdown) return;
    
    // Toggle dropdown when profile icon is clicked
    profileBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (profileDropdown.classList.contains('active') && 
            !profileDropdown.contains(e.target) && 
            e.target !== profileBtn) {
            profileDropdown.classList.remove('active');
        }
    });
    
    // Mock user data (in a real app, this would come from a server/API)
    const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        orderHistory: [
            { id: 'ORD-1234', date: '2023-05-15', status: 'Delivered', total: 'Tk 780' },
            { id: 'ORD-5678', date: '2023-04-02', status: 'Delivered', total: 'Tk 500' }
        ]
    };
    
    // Update user info in dropdown
    const userNameEl = document.querySelector('.user-name');
    const userEmailEl = document.querySelector('.user-email');
    const userAvatarEl = document.querySelector('.user-avatar');
    
    if (userNameEl && userEmailEl && userAvatarEl) {
        userNameEl.textContent = userData.name;
        userEmailEl.textContent = userData.email;
        // Set avatar initial to first letter of user's name
        userAvatarEl.textContent = userData.name.charAt(0);
    }
    
    // Handle order history page navigation
    const orderHistoryLink = document.querySelector('.profile-menu a[href="#"]:nth-child(1)');
    if (orderHistoryLink) {
        orderHistoryLink.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would navigate to the order history page
            console.log('Navigating to order history:', userData.orderHistory);
        });
    }
}

// Open cart dropdown
function openCart() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCartDisplay(cart);
    
    // Apply translations to cart modal if needed
    if (typeof translateCartModal === 'function') {
        translateCartModal();
    }
}

// Close cart dropdown
function closeCart() {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Navigate to checkout page
function openCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some products first.');
        return;
    }
    
    // Redirect to the order page
    window.location.href = 'order.html';
}

// Initialize mobile search toggle
function initMobileSearch() {
    const searchBar = document.querySelector('.search-bar');
    
    if (window.innerWidth <= 768 && searchBar) {
        // Create search toggle button if it doesn't exist
        let searchToggle = document.querySelector('.search-toggle');
        if (!searchToggle) {
            searchToggle = document.createElement('button');
            searchToggle.className = 'search-toggle';
            searchToggle.innerHTML = '<i class="fa fa-search"></i>';
            searchToggle.setAttribute('type', 'button');
            
            // Insert before search bar
            searchBar.classList.add('collapsed');
            searchBar.parentNode.insertBefore(searchToggle, searchBar);
        }
        
        // Toggle search bar visibility
        searchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            searchBar.classList.toggle('collapsed');
            searchBar.classList.toggle('expanded');
            
            // Focus on input when expanded
            if (searchBar.classList.contains('expanded')) {
                setTimeout(() => {
                    const input = searchBar.querySelector('input');
                    if (input) input.focus();
                }, 100);
            }
        });
        
        // Close search bar when clicking outside
        document.addEventListener('click', (e) => {
            if (
                searchBar.classList.contains('expanded') && 
                !searchBar.contains(e.target) && 
                !searchToggle.contains(e.target)
            ) {
                searchBar.classList.add('collapsed');
                searchBar.classList.remove('expanded');
            }
        });
    }
}

// Initialize newsletter form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMessage = document.getElementById('newsletter-message');
    
    if (!newsletterForm || !newsletterMessage) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value.trim();
        
        // Simple validation
        if (!email || !isValidEmail(email)) {
            newsletterMessage.textContent = 'Please enter a valid email address.';
            newsletterMessage.style.color = '#e74c3c';
            return;
        }
        
        // Simulate API call - would be a real API endpoint in production
        newsletterMessage.textContent = 'Submitting...';
        newsletterMessage.style.color = '#3498db';
        
        // Simulate network delay for demo purposes
        setTimeout(() => {
            // Success message
            newsletterMessage.textContent = 'Thank you for subscribing!';
            newsletterMessage.style.color = '#2ecc71';
            
            // Reset form
            emailInput.value = '';
            
            // Clear message after 3 seconds
            setTimeout(() => {
                newsletterMessage.textContent = '';
            }, 3000);
        }, 1000);
    });
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Add function to translate cart modal when opened
function translateCartModal() {
    // Only proceed if we're in Bangla mode
    if (localStorage.getItem('language') !== 'bn') return;
    
    // Find the cart modal
    const cartModal = document.querySelector('.cart-modal');
    if (!cartModal) return;
    
    // Apply translations to cart elements if in Bangla mode
    if (window.translations) {
        try {
            // Cart header
            const cartHeader = cartModal.querySelector('.cart-header h3');
            if (cartHeader) {
                if (!cartHeader.hasAttribute('data-original-text')) {
                    cartHeader.setAttribute('data-original-text', cartHeader.textContent.trim());
                }
                if (window.translations["Your Cart"]) {
                    cartHeader.textContent = window.translations["Your Cart"];
                    cartHeader.classList.add('bangla-text');
                }
            }
            
            // Empty cart message
            const emptyCartMessage = cartModal.querySelector('.cart-empty p');
            if (emptyCartMessage) {
                if (!emptyCartMessage.hasAttribute('data-original-text')) {
                    emptyCartMessage.setAttribute('data-original-text', emptyCartMessage.textContent.trim());
                }
                if (window.translations["Your cart is empty"]) {
                    emptyCartMessage.textContent = window.translations["Your cart is empty"];
                    emptyCartMessage.classList.add('bangla-text');
                }
            }
            
            // Start shopping button
            const startShoppingBtn = cartModal.querySelector('.start-shopping-btn');
            if (startShoppingBtn) {
                if (!startShoppingBtn.hasAttribute('data-original-text')) {
                    startShoppingBtn.setAttribute('data-original-text', startShoppingBtn.textContent.trim());
                }
                if (window.translations["Start Shopping"]) {
                    startShoppingBtn.textContent = window.translations["Start Shopping"];
                    startShoppingBtn.classList.add('bangla-text');
                }
            }
            
            // Subtotal
            const subtotalText = cartModal.querySelector('.subtotal span:first-child');
            if (subtotalText) {
                if (!subtotalText.hasAttribute('data-original-text')) {
                    subtotalText.setAttribute('data-original-text', subtotalText.textContent.trim());
                }
                if (window.translations["Subtotal"]) {
                    subtotalText.textContent = window.translations["Subtotal"];
                    subtotalText.classList.add('bangla-text');
                }
            }
            
            // Translate price values to Bengali numerals if needed
            if (typeof window.convertToBengaliNumerals === 'function') {
                // Handle all price elements
                const priceElements = cartModal.querySelectorAll('.cart-item-price, .subtotal span:last-child');
                if (priceElements.length) {
                    priceElements.forEach(element => {
                        try {
                            const originalText = element.textContent;
                            const convertedText = originalText.replace(/\d+/g, match => window.convertToBengaliNumerals(match));
                            element.textContent = convertedText;
                        } catch (err) {
                            console.error("Error converting price to Bengali:", err);
                        }
                    });
                }
                
                // Handle all quantity displays
                const quantityElements = cartModal.querySelectorAll('.cart-item-quantity span');
                if (quantityElements.length) {
                    quantityElements.forEach(element => {
                        try {
                            element.textContent = window.convertToBengaliNumerals(element.textContent.trim());
                        } catch (err) {
                            console.error("Error converting quantity to Bengali:", err);
                        }
                    });
                }
                
                // Handle all size displays
                const sizeElements = cartModal.querySelectorAll('.cart-item-size');
                if (sizeElements.length) {
                    sizeElements.forEach(element => {
                        try {
                            element.textContent = element.textContent.replace(/\d+/g, match => window.convertToBengaliNumerals(match));
                        } catch (err) {
                            console.error("Error converting size to Bengali:", err);
                        }
                    });
                }
            }
            
            // Shipping note
            const shippingNote = cartModal.querySelector('.shipping-note');
            if (shippingNote) {
                if (!shippingNote.hasAttribute('data-original-text')) {
                    shippingNote.setAttribute('data-original-text', shippingNote.textContent.trim());
                }
                if (window.translations["Shipping & taxes calculated at checkout"]) {
                    shippingNote.textContent = window.translations["Shipping & taxes calculated at checkout"];
                    shippingNote.classList.add('bangla-text');
                }
            }
            
            // Checkout button
            const checkoutBtn = cartModal.querySelector('.checkout-btn');
            if (checkoutBtn) {
                if (!checkoutBtn.hasAttribute('data-original-text')) {
                    checkoutBtn.setAttribute('data-original-text', checkoutBtn.textContent.trim());
                }
                if (window.translations["Checkout"]) {
                    checkoutBtn.textContent = window.translations["Checkout"];
                    checkoutBtn.classList.add('bangla-text');
                }
            }
            
            // Convert all quantity displays to Bengali numerals
            const quantityDisplays = cartModal.querySelectorAll('.quantity-display');
            if (quantityDisplays.length > 0 && typeof window.convertToBengaliNumerals === 'function') {
                quantityDisplays.forEach(display => {
                    display.textContent = window.convertToBengaliNumerals(display.textContent);
                });
            }
            
            // Convert all price displays to Bengali numerals
            const priceDisplays = cartModal.querySelectorAll('.cart-item-price');
            if (priceDisplays.length > 0 && typeof window.convertToBengaliNumerals === 'function') {
                priceDisplays.forEach(display => {
                    display.textContent = window.convertToBengaliNumerals(display.textContent);
                });
            }
        } catch (error) {
            console.error("Error translating cart modal:", error);
        }
    }
}

// Direct fix for option buttons after language change
function fixOptionButtons() {
    let globalError = null;
    try {
        console.log("Applying emergency fix for Choose options buttons");
        
        // Get all option buttons on the page
        const optionsBtns = document.querySelectorAll('.options-btn');
        const optionsModal = document.querySelector('.options-modal');
        
        if (!optionsBtns || !optionsBtns.length) {
            console.log("No options buttons found on this page - this is normal for non-collection pages");
            return;
        }
        
        if (!optionsModal) {
            console.error("Options modal not found but buttons exist! Creating a fallback modal.");
            // Create a fallback modal if needed
            try {
                const fallbackModal = document.createElement('div');
                fallbackModal.className = 'options-modal';
                fallbackModal.innerHTML = `
                    <div class="options-content">
                        <div class="options-header">
                            <h3 data-original-text="Product Options">Product Options</h3>
                            <button class="close-btn">&times;</button>
                        </div>
                        <div class="options-body"></div>
                    </div>
                `;
                document.body.appendChild(fallbackModal);
                console.log("Created fallback options modal");
                return; // Exit and let next attempt handle it
            } catch (modalError) {
                console.error("Failed to create fallback modal:", modalError);
                return;
            }
        }
        
        console.log(`Found ${optionsBtns.length} option buttons to fix`);
        
        // First, remove any existing click events by cloning and replacing each button
        optionsBtns.forEach((btn, index) => {
            try {
                // Clone the button without events
                const newBtn = btn.cloneNode(true);
                
                // Make sure we preserve any data attributes
                if (btn.hasAttribute('data-original-text')) {
                    newBtn.setAttribute('data-original-text', btn.getAttribute('data-original-text'));
                } else {
                    newBtn.setAttribute('data-original-text', 'Choose options');
                }
                
                // Replace the old button with the new one
                if (btn.parentNode) {
                    btn.parentNode.replaceChild(newBtn, btn);
                    
                    // Add a direct click handler using the onclick property
                    newBtn.onclick = function(e) {
                        try {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            console.log("Option button clicked!", index);
                            
                            // Get product info from the card
                            const productCard = this.closest('.product-card');
                            if (!productCard) {
                                console.error("Product card not found for button", index);
                                return;
                            }
                            
                            // Extract product details safely with error handling
                            let productName = 'Product';
                            let productImage = '';
                            let productPrice = 250; // Default price if extraction fails
                            let productId = '';
                            
                            try {
                                const nameElement = productCard.querySelector('h3');
                                if (nameElement) productName = nameElement.textContent || 'Product';
                                
                                const imageElement = productCard.querySelector('.product-image img');
                                if (imageElement) productImage = imageElement.src || '';
                                
                                const priceElement = productCard.querySelector('.price');
                                if (priceElement && priceElement.textContent) {
                                    // Allow for localized price formats
                                    const priceMatch = priceElement.textContent.match(/\d+/);
                                    if (priceMatch && priceMatch[0]) {
                                        productPrice = parseInt(priceMatch[0]);
                                    } else {
                                        console.warn("Could not parse price: ", priceElement.textContent);
                                    }
                                } else {
                                    console.warn("Price element not found or empty");
                                }
                                
                                productId = productCard.dataset.id || generateProductId(productName);
                            } catch (extractError) {
                                console.error("Error extracting product details:", extractError);
                            }
                            
                            console.log("Product info:", productName, productPrice, productId);
                            
                            // Show the options modal
                            optionsModal.classList.add('active');
                            document.body.style.overflow = 'hidden';
                            
                            // Get the modal body element
                            const optionsBody = optionsModal.querySelector('.options-body');
                            if (!optionsBody) {
                                console.error("Options body not found in modal");
                                // Create the options body if it doesn't exist
                                const newOptionsBody = document.createElement('div');
                                newOptionsBody.className = 'options-body';
                                optionsModal.querySelector('.options-content').appendChild(newOptionsBody);
                                optionsBody = newOptionsBody;
                            }
                            
                            // Set the modal content with safe pricing calculations
                            const mediumPrice = Math.round(productPrice * 1.8);
                            const largePrice = Math.round(productPrice * 2.5);
                            
                            optionsBody.innerHTML = `
                                <h4>${productName}</h4>
                                <div class="option-group">
                                    <label data-original-text="Size">Size</label>
                                    <div class="option-buttons">
                                        <button class="option-btn active" data-size="250g" data-price="${productPrice}">250g</button>
                                        <button class="option-btn" data-size="500g" data-price="${mediumPrice}">500g</button>
                                        <button class="option-btn" data-size="750g" data-price="${largePrice}">750g</button>
                                    </div>
                                </div>
                                <div class="option-group">
                                    <label data-original-text="Quantity">Quantity</label>
                                    <div class="quantity-selector">
                                        <button class="quantity-btn decrease"><i class="fas fa-minus"></i></button>
                                        <input type="number" value="1" min="1" max="10" style="display:none;">
                                        <span class="quantity-display">1</span>
                                        <button class="quantity-btn increase"><i class="fas fa-plus"></i></button>
                                    </div>
                                </div>
                                <div class="price-display">Price: <span>Tk ${productPrice} BDT</span></div>
                                <button class="add-to-cart-btn" data-original-text="Add to Cart">Add to Cart</button>
                            `;
                            
                            // Apply Bengali translation if needed
                            try {
                                if (localStorage.getItem('language') === 'bn') {
                                    // Special handling for translations - make sure window.translations is available
                                    if (!window.translations) {
                                        console.warn("Translations not available, loading defaults");
                                        window.translations = {
                                            "Add to Cart": "কার্টে যোগ করুন",
                                            "Size": "আকার",
                                            "Quantity": "পরিমাণ",
                                            "Price:": "মূল্য:",
                                            "Product Options": "পণ্যের বিকল্প"
                                        };
                                    }
                                
                                    // Translate the modal header first
                                    const modalHeader = optionsModal.querySelector('.options-header h3');
                                    if (modalHeader && window.translations && window.translations["Product Options"]) {
                                        modalHeader.textContent = window.translations["Product Options"];
                                        modalHeader.classList.add('bangla-text');
                                    }
                                
                                    // Translate Add to Cart button
                                    const modalAddToCartBtn = optionsBody.querySelector('.add-to-cart-btn');
                                    if (modalAddToCartBtn && window.translations && window.translations["Add to Cart"]) {
                                        modalAddToCartBtn.textContent = window.translations["Add to Cart"];
                                        modalAddToCartBtn.classList.add('bangla-text');
                                    }
                                    
                                    const sizeLabel = optionsBody.querySelector('label[data-original-text="Size"]');
                                    if (sizeLabel && window.translations && window.translations["Size"]) {
                                        sizeLabel.textContent = window.translations["Size"];
                                        sizeLabel.classList.add('bangla-text');
                                    }
                                    
                                    const quantityLabel = optionsBody.querySelector('label[data-original-text="Quantity"]');
                                    if (quantityLabel && window.translations && window.translations["Quantity"]) {
                                        quantityLabel.textContent = window.translations["Quantity"];
                                        quantityLabel.classList.add('bangla-text');
                                    }
                                    
                                    const modalPriceDisplay = optionsBody.querySelector('.price-display');
                                    if (modalPriceDisplay && window.translations && window.translations["Price:"]) {
                                        const priceValue = `Tk ${productPrice} BDT`;
                                        const translatedPrice = typeof window.convertToBengaliNumerals === 'function' 
                                            ? window.convertToBengaliNumerals(priceValue)
                                            : priceValue;
                                        
                                        modalPriceDisplay.innerHTML = `${window.translations["Price:"]} <span>${translatedPrice}</span>`;
                                        modalPriceDisplay.classList.add('bangla-text');
                                    }
                                }
                                
                                // Convert size button text and numerals if in Bengali mode
                                if (localStorage.getItem('language') === 'bn' && typeof window.convertToBengaliNumerals === 'function') {
                                    // Convert size buttons
                                    const sizeButtons = optionsBody.querySelectorAll('.option-btn');
                                    if (sizeButtons && sizeButtons.length) {
                                        sizeButtons.forEach(button => {
                                            if (button && button.textContent) {
                                                button.textContent = window.convertToBengaliNumerals(button.textContent);
                                            }
                                        });
                                    }
                                    
                                    // Initialize quantity display with Bengali numerals
                                    const quantityDisplay = optionsBody.querySelector('.quantity-display');
                                    if (quantityDisplay) {
                                        quantityDisplay.textContent = window.convertToBengaliNumerals('1');
                                    }
                                    
                                    // Convert price display
                                    const priceDisplay = optionsBody.querySelector('.price-display span');
                                    if (priceDisplay) {
                                        priceDisplay.textContent = window.convertToBengaliNumerals(priceDisplay.textContent);
                                    }
                                }
                            } catch (translationError) {
                                console.error("Error applying translations:", translationError);
                            }
                            
                            try {
                                // Initialize size option buttons in the modal
                                const optionBtns = optionsBody.querySelectorAll('.option-btn');
                                const priceDisplay = optionsBody.querySelector('.price-display span');
                                
                                // Safety check to ensure at least one option button exists
                                if (!optionBtns || optionBtns.length === 0) {
                                    console.error("No option buttons found in options modal");
                                    return;
                                }
                                
                                let selectedSize = optionBtns[0].dataset.size || "250g";
                                let selectedPrice = parseInt(optionBtns[0].dataset.price || productPrice);
                                
                                optionBtns.forEach(optBtn => {
                                    optBtn.addEventListener('click', function() {
                                        optionBtns.forEach(btn => btn.classList.remove('active'));
                                        this.classList.add('active');
                                        selectedSize = this.dataset.size || "250g";
                                        selectedPrice = parseInt(this.dataset.price || productPrice);
                                        
                                        updatePriceDisplay();
                                    });
                                });
                                
                                // Initialize quantity selector
                                const quantityInput = optionsBody.querySelector('input[type="number"]');
                                const quantityDisplay = optionsBody.querySelector('.quantity-display');
                                const decreaseBtn = optionsBody.querySelector('.decrease');
                                const increaseBtn = optionsBody.querySelector('.increase');
                                
                                // Make sure initial value is set
                                if (quantityInput) quantityInput.value = 1;
                                
                                function updatePriceDisplay() {
                                    // Check if elements exist
                                    if (!quantityInput || !priceDisplay) return;
                                    
                                    const quantity = parseInt(quantityInput.value) || 1;
                                    let priceText = `Tk ${selectedPrice * quantity} BDT`;
                                    
                                    // Update the display span with proper numerals
                                    if (quantityDisplay) {
                                        if (localStorage.getItem('language') === 'bn' && window.convertToBengaliNumerals) {
                                            quantityDisplay.textContent = window.convertToBengaliNumerals(quantity.toString());
                                            
                                            // Also update price with Bengali numerals
                                            if (priceDisplay) {
                                                priceDisplay.textContent = window.convertToBengaliNumerals(priceText);
                                            }
                                        } else {
                                            quantityDisplay.textContent = quantity.toString();
                                            
                                            // Update price with regular numerals
                                            if (priceDisplay) {
                                                priceDisplay.textContent = priceText;
                                            }
                                        }
                                    }
                                }
                                
                                decreaseBtn.addEventListener('click', function() {
                                    if (quantityInput && parseInt(quantityInput.value) > 1) {
                                        const numValue = parseInt(quantityInput.value) - 1;
                                        quantityInput.value = numValue;
                                        updatePriceDisplay();
                                    }
                                });
                                
                                increaseBtn.addEventListener('click', function() {
                                    if (quantityInput && parseInt(quantityInput.value) < 10) {
                                        const numValue = parseInt(quantityInput.value) + 1;
                                        quantityInput.value = numValue;
                                        updatePriceDisplay();
                                    }
                                });
                                
                                // Initial update of price display
                                updatePriceDisplay();
                                
                                // Add to cart button
                                const addToCartBtn = optionsBody.querySelector('.add-to-cart-btn');
                                if (addToCartBtn) {
                                    addToCartBtn.addEventListener('click', function() {
                                        const productData = {
                                            id: productId,
                                            name: productName,
                                            price: selectedPrice,
                                            size: selectedSize,
                                            quantity: parseInt(quantityInput.value || 1),
                                            image: productImage
                                        };
                                        
                                        window.addToCart(productData);
                                        
                                        optionsModal.classList.remove('active');
                                        document.body.style.overflow = '';
                                    });
                                }
                            } catch (modalControlsError) {
                                console.error("Error setting up modal controls:", modalControlsError);
                            }
                        } catch (clickError) {
                            console.error("Error in option button click handler:", clickError);
                        }
                    };
                }
            } catch (buttonError) {
                console.error("Error setting up button:", buttonError, "at index:", index);
            }
        });
        
        try {
            // Ensure the modal close button works
            const closeBtn = optionsModal.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.onclick = function() {
                    optionsModal.classList.remove('active');
                    document.body.style.overflow = '';
                };
            }
            
            // Ensure clicking outside the modal closes it
            optionsModal.onclick = function(e) {
                if (e.target === optionsModal) {
                    optionsModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            };
        } catch (modalControlError) {
            console.error("Error setting up modal controls:", modalControlError);
        }
        
        console.log("Options buttons fix applied successfully");
    } catch (globalError) {
        console.error("Critical error in fixOptionButtons:", globalError);
    }
}