/**
 * Mobile Carousel Functionality for Ammur Achar
 * Provides auto-sliding carousels for Features, Tagline, and USP sections on mobile view
 */

document.addEventListener('DOMContentLoaded', function() {
    // Only initialize carousels if screen is mobile
    if (window.innerWidth <= 768) {
        initializeCarousels();
    }

    // Debounce function to improve performance
    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, arguments), wait);
        };
    }

    // Debounced resize handler
    const debouncedResize = debounce(function() {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-carousel')) {
            initializeCarousels();
        } else if (window.innerWidth > 768 && document.querySelector('.mobile-carousel')) {
            removeCarousels();
        }
    }, 250);

    // Add resize event with debounce for better performance
    window.addEventListener('resize', debouncedResize);
});

/**
 * Initialize all carousel sections
 */
function initializeCarousels() {
    try {
        // Check for required sections before attempting to initialize
        const featuresSection = document.querySelector('.features');
        const taglineSection = document.querySelector('.tagline');
        const uspSection = document.querySelector('.usp');
        
        if (featuresSection) {
            initializeFeatureCarousel();
        } else {
            console.log('Features section not found, skipping feature carousel initialization');
        }
        
        if (taglineSection) {
            initializeTaglineCarousel();
        } else {
            console.log('Tagline section not found, skipping tagline carousel initialization');
        }
        
        if (uspSection) {
            initializeUSPCarousel();
        } else {
            console.log('USP section not found, skipping USP carousel initialization');
        }
    } catch (error) {
        console.error('Error initializing carousels:', error);
    }
}

/**
 * Remove all carousels and restore original content when switching back to desktop
 */
function removeCarousels() {
    try {
        // Remove feature carousel
        const featureCarousel = document.querySelector('.feature-carousel');
        if (featureCarousel) {
            // Clean up event listeners
            cleanupCarouselListeners(featureCarousel);
            featureCarousel.remove();
            const featureItems = document.querySelector('.feature-items');
            if (featureItems) {
                featureItems.style.display = 'flex';
            }
        }

        // Remove tagline carousel
        const taglineCarousel = document.querySelector('.tagline-carousel');
        if (taglineCarousel) {
            // Clean up event listeners
            cleanupCarouselListeners(taglineCarousel);
            taglineCarousel.remove();
            const taglineContainer = document.querySelector('.tagline .container');
            if (taglineContainer) {
                taglineContainer.style.display = 'block';
            }
        }

        // Remove USP carousel
        const uspCarousel = document.querySelector('.usp-carousel');
        if (uspCarousel) {
            // Clean up event listeners
            cleanupCarouselListeners(uspCarousel);
            uspCarousel.remove();
            const uspGrid = document.querySelector('.usp-grid');
            if (uspGrid) {
                uspGrid.style.display = 'grid';
            }
        }
    } catch (error) {
        console.error('Error removing carousels:', error);
    }
}

/**
 * Clean up event listeners for a carousel
 * @param {HTMLElement} carousel - The carousel element
 */
function cleanupCarouselListeners(carousel) {
    // Check if event handlers exist before removing them
    if (carousel._stopAutoSlide && carousel._startAutoSlide) {
        carousel.removeEventListener('mouseenter', carousel._stopAutoSlide);
        carousel.removeEventListener('mouseleave', carousel._startAutoSlide);
    }
    
    // Remove touch event listeners from slides container
    const slidesContainer = carousel.querySelector('.carousel-container');
    if (slidesContainer && slidesContainer._touchStartHandler && slidesContainer._touchEndHandler) {
        slidesContainer.removeEventListener('touchstart', slidesContainer._touchStartHandler);
        slidesContainer.removeEventListener('touchend', slidesContainer._touchEndHandler);
    }
    
    // Remove click listeners from indicators
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    indicators.forEach(indicator => {
        if (indicator._clickHandler) {
            indicator.removeEventListener('click', indicator._clickHandler);
        }
    });
    
    // Clear interval if exists
    if (carousel._interval) {
        clearInterval(carousel._interval);
    }
}

/**
 * Initialize the Feature Section Carousel
 */
function initializeFeatureCarousel() {
    const featuresSection = document.querySelector('.features');
    if (!featuresSection) return;
    
    const featureItems = featuresSection.querySelectorAll('.feature-item');
    if (!featureItems.length) return;

    // Hide the original feature items container
    const featureItemsContainer = document.querySelector('.feature-items');
    if (featureItemsContainer) {
        featureItemsContainer.style.display = 'none';
    }
    
    // Create carousel structure
    const carousel = createCarouselStructure('feature-carousel', featureItems, item => {
        const icon = item.querySelector('.icon');
        const heading = item.querySelector('h3');
        const paragraph = item.querySelector('p');
        
        return `
            <div class="feature-item" role="group" aria-roledescription="slide">
                <div class="icon">${icon ? icon.innerHTML : ''}</div>
                <h3>${heading ? heading.innerText : ''}</h3>
                <p>${paragraph ? paragraph.innerText : ''}</p>
            </div>
        `;
    });
    
    // Insert carousel after the feature items container
    featuresSection.appendChild(carousel);
    
    // Initialize the carousel
    initCarousel(carousel, 3500);
}

/**
 * Initialize the Tagline Section Carousel
 */
function initializeTaglineCarousel() {
    const taglineSection = document.querySelector('.tagline');
    if (!taglineSection) return;
    
    const taglines = taglineSection.querySelectorAll('h2');
    if (!taglines.length) return;
    
    // Hide the original tagline container
    const taglineContainer = document.querySelector('.tagline .container');
    if (taglineContainer) {
        taglineContainer.style.display = 'none';
    }
    
    // Create carousel structure
    const carousel = createCarouselStructure('tagline-carousel', taglines, item => {
        return `<h2 role="group" aria-roledescription="slide">${item.innerText}</h2>`;
    });
    
    // Insert carousel after the tagline container
    taglineSection.appendChild(carousel);
    
    // Initialize the carousel
    initCarousel(carousel, 3000);
}

/**
 * Initialize the USP Section Carousel
 */
function initializeUSPCarousel() {
    const uspSection = document.querySelector('.usp');
    if (!uspSection) return;
    
    const uspItems = uspSection.querySelectorAll('.usp-item');
    if (!uspItems.length) return;
    
    // Hide the original USP grid
    const uspGrid = document.querySelector('.usp-grid');
    if (uspGrid) {
        uspGrid.style.display = 'none';
    }
    
    // Create carousel structure
    const carousel = createCarouselStructure('usp-carousel', uspItems, item => {
        const icon = item.querySelector('.usp-icon');
        const heading = item.querySelector('h3');
        const paragraph = item.querySelector('p');
        
        return `
            <div class="usp-item" role="group" aria-roledescription="slide">
                <div class="usp-icon">${icon ? icon.innerHTML : ''}</div>
                <h3>${heading ? heading.innerText : ''}</h3>
                <p>${paragraph ? paragraph.innerText : ''}</p>
            </div>
        `;
    });
    
    // Insert carousel after the USP grid
    uspSection.appendChild(carousel);
    
    // Initialize the carousel
    initCarousel(carousel, 4000);
}

/**
 * Create a carousel structure based on items
 * @param {string} className - Class name for the carousel
 * @param {NodeList} items - Items to include in the carousel
 * @param {Function} templateFn - Function that returns HTML for each slide
 * @returns {HTMLElement} - The carousel element
 */
function createCarouselStructure(className, items, templateFn) {
    // Create main carousel container
    const carousel = document.createElement('div');
    carousel.className = `mobile-carousel ${className}`;
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-roledescription', 'carousel');
    carousel.setAttribute('aria-label', `${className.replace('-carousel', '')} slideshow`);
    
    // Create carousel slides container
    const slidesContainer = document.createElement('div');
    slidesContainer.className = 'carousel-container';
    slidesContainer.setAttribute('role', 'presentation');
    
    // Add progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'carousel-progress';
    progressBar.setAttribute('role', 'presentation');
    progressBar.setAttribute('aria-hidden', 'true');
    carousel.appendChild(progressBar);
    
    // Create slides
    items.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.setAttribute('role', 'presentation');
        slide.innerHTML = templateFn(item);
        slide.setAttribute('aria-hidden', index > 0 ? 'true' : 'false');
        slidesContainer.appendChild(slide);
    });
    
    // Add slides container to carousel
    carousel.appendChild(slidesContainer);
    
    // Create indicators
    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';
    indicators.setAttribute('role', 'presentation');
    
    for (let i = 0; i < items.length; i++) {
        const indicator = document.createElement('div');
        indicator.className = i === 0 ? 'carousel-indicator active' : 'carousel-indicator';
        indicator.dataset.slide = i;
        indicator.setAttribute('role', 'button');
        indicator.setAttribute('tabindex', '0');
        indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
        indicator.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        indicators.appendChild(indicator);
    }
    
    // Add indicators to carousel
    carousel.appendChild(indicators);
    
    return carousel;
}

/**
 * Initialize a carousel with auto-sliding functionality
 * @param {HTMLElement} carousel - The carousel element
 * @param {number} interval - Time in ms between slides
 */
function initCarousel(carousel, interval) {
    if (!carousel) return;
    
    const slidesContainer = carousel.querySelector('.carousel-container');
    if (!slidesContainer) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const progressBar = carousel.querySelector('.carousel-progress');
    
    if (!slides.length || !indicators.length || !progressBar) return;
    
    let currentSlide = 0;
    let autoSlideInterval;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Function to go to a specific slide
    function goToSlide(slideIndex) {
        // Reset if out of bounds
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        // Update slide position
        currentSlide = slideIndex;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update ARIA attributes
        slides.forEach((slide, i) => {
            slide.setAttribute('aria-hidden', i !== currentSlide ? 'true' : 'false');
        });
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
            indicator.setAttribute('aria-pressed', i === currentSlide ? 'true' : 'false');
        });
        
        // Update live region for screen readers
        carousel.setAttribute('aria-live', 'off');
        setTimeout(() => {
            carousel.setAttribute('aria-live', 'polite');
        }, 500);
        
        // Restart progress animation
        restartProgressAnimation();
    }
    
    // Function to handle next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Function to restart progress animation
    function restartProgressAnimation() {
        if (!progressBar) return;
        
        // Clean removal/addition with RAF for better performance
        progressBar.classList.remove('animate-progress');
        
        // Use requestAnimationFrame to ensure removal has taken effect before adding back
        requestAnimationFrame(() => {
            // Trigger reflow in a more performant way
            progressBar.style.display = 'none';
            progressBar.offsetHeight; // Force reflow
            progressBar.style.display = 'block';
            
            // Re-add the animation class
            requestAnimationFrame(() => {
                progressBar.classList.add('animate-progress');
            });
        });
    }
    
    // Start auto-sliding
    function startAutoSlide() {
        restartProgressAnimation();
        autoSlideInterval = setInterval(nextSlide, interval);
        
        // Store reference to interval on carousel for cleanup
        carousel._interval = autoSlideInterval;
    }
    
    // Stop auto-sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
        if (progressBar) {
            progressBar.classList.remove('animate-progress');
        }
    }
    
    // Store functions for event listener cleanup
    carousel._startAutoSlide = startAutoSlide;
    carousel._stopAutoSlide = stopAutoSlide;
    
    // Add click event to indicators
    indicators.forEach(indicator => {
        const clickHandler = () => {
            const slideIndex = parseInt(indicator.dataset.slide);
            goToSlide(slideIndex);
            stopAutoSlide();
            startAutoSlide();
        };
        
        indicator.addEventListener('click', clickHandler);
        
        // Add keyboard support
        indicator.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                clickHandler();
            }
        });
        
        // Store reference to handler for cleanup
        indicator._clickHandler = clickHandler;
    });
    
    // Touch event handlers for swipe functionality
    const touchStartHandler = (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
    };
    
    const touchEndHandler = (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    };
    
    slidesContainer.addEventListener('touchstart', touchStartHandler, { passive: true });
    slidesContainer.addEventListener('touchend', touchEndHandler, { passive: true });
    
    // Store handlers for cleanup
    slidesContainer._touchStartHandler = touchStartHandler;
    slidesContainer._touchEndHandler = touchEndHandler;
    
    // Handle swipe direction
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) < swipeThreshold) return;
        
        if (diff > 0) {
            // Swipe left - go to next slide
            nextSlide();
        } else {
            // Swipe right - go to previous slide
            goToSlide(currentSlide - 1);
        }
    }
    
    // Start the carousel
    goToSlide(0);
    startAutoSlide();
    
    // Pause auto-sliding when user interacts with the carousel
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // Pause auto-sliding when the page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    });
} 