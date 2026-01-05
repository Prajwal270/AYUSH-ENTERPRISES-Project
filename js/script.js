/* AYUSH ENTERPRISES - JavaScript Functionality */

// Hiring Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('hiringPopup');
    const closeBtn = document.getElementById('closePopup');
    const applyBtn = document.getElementById('applyNowBtn');
    
    // Show popup after 1 second
    setTimeout(() => {
        popup.classList.add('active');
    }, 1000);
    
    // Close popup on close button click
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });
    
    // Close popup on overlay click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });
    
    // Close popup on apply button click and scroll to section
    applyBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });
    
    // Close popup on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navRight = document.getElementById('navRight');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navRight.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navRight.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
const transitionFrames = document.querySelectorAll('.transition-frame');
let isTransitioning = false;

// Show slide function with modern geometric frames
function showSlide(index) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // Get the specific frame for this slide
    const currentFrame = document.querySelector(`.frame-slide-${index}`);
    
    // Trigger transition frame animation
    setTimeout(() => {
        if (currentFrame) {
            currentFrame.classList.add('active');
        }
    }, 50);
    
    // Change slide during transition (when frame covers screen)
    setTimeout(() => {
        // Remove active from all
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active to new slide
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Pause and play videos
        slides.forEach((slide, i) => {
            const video = slide.querySelector('video');
            if (video) {
                if (i === index) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
        
        currentSlide = index;
    }, 450); // Change slide mid-transition
    
    // Remove transition frame
    setTimeout(() => {
        if (currentFrame) {
            currentFrame.classList.remove('active');
        }
        isTransitioning = false;
    }, 1100); // Total transition duration
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-rotate every 6 seconds
let slideInterval = setInterval(nextSlide, 6000);

// Manual navigation
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 6000);
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 6000);
    });
}

// Indicator navigation
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        slideInterval = setInterval(nextSlide, 6000);
    });
});

// Pause on hover
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSection.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 6000);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 6000);
    } else if (e.key === 'ArrowRight') {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 6000);
    }
});

// Initialize first slide
showSlide(0);

// Country Tabs Interaction
const countryTabs = document.querySelectorAll('.country-tab');

if (countryTabs.length > 0) {
    countryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            countryTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            this.classList.add('active');
            
            // Add smooth transition animation
            const mapContainer = document.querySelector('.map-container');
            const workStats = document.querySelector('.work-stats');
            
            if (mapContainer && workStats) {
                mapContainer.style.opacity = '0';
                mapContainer.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    mapContainer.style.transition = 'all 0.5s ease';
                    mapContainer.style.opacity = '1';
                    mapContainer.style.transform = 'scale(1)';
                }, 100);
            }
            
            // Here you can add logic to show different maps for different countries
            console.log('Selected country:', this.textContent);
        });
        
        // Add hover effect
        tab.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        tab.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Animate map dots on hover with enhanced effects
const mapDots = document.querySelectorAll('.dot');

if (mapDots.length > 0) {
    mapDots.forEach((dot, index) => {
        // Add staggered animation delay for initial load
        dot.style.animationDelay = `${index * 0.05}s`;
        
        // Add hover tooltip effect
        dot.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.8)';
            this.style.zIndex = '10';
            this.style.boxShadow = '0 0 25px rgba(255, 193, 7, 0.8)';
        });
        
        dot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
            this.style.boxShadow = '';
        });
        
        // Optional: Add click event to show location info
        dot.addEventListener('click', function() {
            // Add ripple effect on click
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
            
            // You can add a tooltip or modal here to show location details
            console.log('Location clicked:', index + 1);
        });
    });
    
    // Animate dots when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mapDots.forEach((dot, index) => {
                    setTimeout(() => {
                        dot.style.opacity = '1';
                        dot.style.transform = 'scale(1)';
                    }, index * 30);
                });
            }
        });
    }, { threshold: 0.3 });
    
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        observer.observe(mapContainer);
    }
}

// Fade-in on scroll
window.addEventListener('scroll', function() {
    const workSection = document.querySelector('.work-section');
    const elements = workSection.querySelectorAll('.section-label, .work-heading, .work-text, .countries, .stats, .map-container');
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < triggerBottom) {
            el.classList.add('fade-in');
        }
    });
});

// ========================================
// WHAT WE BUILD SECTION - Category Tabs
// ========================================

const categoryTabs = document.querySelectorAll('.category-tab');
const projectShowcase = document.querySelector('.project-showcase');

// Project data for different categories
const projectData = {
    buildings: {
        title: 'MIDC Industrial Complex',
        description: 'MIDC Industrial Complex is a state-of-the-art facility featuring comprehensive fabrication and welding services. With skilled workforce deployment across multiple industrial units, we ensure quality craftsmanship and timely project completion with safety standards.',
        location: 'MAHARASHTRA',
        market: 'INDUSTRIAL MANUFACTURING'
    },
    civil: {
        title: 'Highway Infrastructure Development',
        description: 'Major highway construction project spanning multiple districts, featuring advanced civil engineering solutions. Our expert workforce handles road construction, bridge development, and infrastructure modernization with precision and efficiency.',
        location: 'PUNE-MUMBAI',
        market: 'CIVIL INFRASTRUCTURE'
    },
    industrial: {
        title: 'Steel Plant Fabrication Unit',
        description: 'Large-scale industrial fabrication facility specializing in heavy steel structures. Our certified welders and fabricators deliver exceptional quality in structural steel work, pipeline fabrication, and industrial machinery installation.',
        location: 'MIDC AREA',
        market: 'HEAVY INDUSTRIAL'
    },
    special: {
        title: 'Custom Engineering Solutions',
        description: 'Specialized projects requiring unique expertise and custom solutions. From complex welding operations to specialized industrial installations, our skilled workforce adapts to meet diverse project requirements with innovative approaches.',
        location: 'VARIOUS LOCATIONS',
        market: 'SPECIALIZED PROJECTS'
    }
};

if (categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            this.classList.add('active');
            
            // Get category
            const category = this.getAttribute('data-category');
            
            // Update project showcase with animation
            if (projectShowcase && projectData[category]) {
                // Fade out
                projectShowcase.style.opacity = '0';
                projectShowcase.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    // Update content
                    const data = projectData[category];
                    projectShowcase.querySelector('.project-title').textContent = data.title;
                    projectShowcase.querySelector('.project-description').textContent = data.description;
                    projectShowcase.querySelectorAll('.detail-value')[0].textContent = data.location;
                    projectShowcase.querySelectorAll('.detail-value')[1].textContent = data.market;
                    
                    // Fade in
                    projectShowcase.style.transition = 'all 0.5s ease';
                    projectShowcase.style.opacity = '1';
                    projectShowcase.style.transform = 'translateY(0)';
                }, 300);
            }
        });
        
        // Add hover effect
        tab.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '#000';
            }
        });
        
        tab.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });
}

// Scroll Animation for Build Section
const buildObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

const buildElements = document.querySelectorAll('.build-heading, .build-categories, .project-showcase');
buildElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    buildObserver.observe(el);
});

// ========================================
// SAFETY SECTION ANIMATIONS
// ========================================

const safetyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const safetyText = entry.target.querySelector('.safety-text-content');
            const safetyImage = entry.target.querySelector('.safety-image-container');
            const safetyShape = entry.target.querySelector('.safety-shape');
            
            if (safetyText) {
                safetyText.style.opacity = '1';
                safetyText.style.transform = 'translateX(0)';
            }
            
            if (safetyImage) {
                safetyImage.style.opacity = '1';
                safetyImage.style.transform = 'scale(1)';
            }
            
            if (safetyShape) {
                safetyShape.style.opacity = '1';
            }
        }
    });
}, { threshold: 0.3 });

const safetySection = document.querySelector('.safety-section');
if (safetySection) {
    // Set initial state
    const safetyText = safetySection.querySelector('.safety-text-content');
    const safetyImage = safetySection.querySelector('.safety-image-container');
    const safetyShape = safetySection.querySelector('.safety-shape');
    
    if (safetyText) {
        safetyText.style.opacity = '0';
        safetyText.style.transform = 'translateX(50px)';
        safetyText.style.transition = 'all 1s ease';
    }
    
    if (safetyImage) {
        safetyImage.style.opacity = '0';
        safetyImage.style.transform = 'scale(0.95)';
        safetyImage.style.transition = 'all 1s ease';
    }
    
    if (safetyShape) {
        safetyShape.style.opacity = '0';
        safetyShape.style.transition = 'all 0.8s ease';
    }
    
    safetyObserver.observe(safetySection);
}

// ========================================
// NEWSLETTER FORM SUBMISSION
// ========================================

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('.newsletter-input');
        const email = emailInput.value;
        const submitBtn = this.querySelector('.btn-subscribe');
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SUBSCRIBING...';
        submitBtn.disabled = true;
        
        // Simulate API call (replace with actual API endpoint)
        setTimeout(() => {
            // Success feedback
            submitBtn.textContent = 'SUBSCRIBED!';
            submitBtn.style.background = '#fff';
            submitBtn.style.color = '#0b5720';
            
            // Show success message
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing! You will receive our latest updates.');
            
            // Reset form
            emailInput.value = '';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// ========================================
// CTA SECTION ANIMATIONS
// ========================================

const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const ctaText = entry.target.querySelector('.cta-text');
            if (ctaText) {
                ctaText.style.opacity = '1';
                ctaText.style.transform = 'translateX(0)';
            }
            
            // Animate geometric shapes
            const shapes = entry.target.querySelectorAll('.cta-shapes > div');
            shapes.forEach((shape, index) => {
                setTimeout(() => {
                    shape.style.opacity = '1';
                    shape.style.transform = 'scale(1)';
                }, index * 200);
            });
        }
    });
}, { threshold: 0.3 });

const ctaSection = document.querySelector('.cta-section');
if (ctaSection) {
    // Set initial state
    const ctaText = ctaSection.querySelector('.cta-text');
    if (ctaText) {
        ctaText.style.opacity = '0';
        ctaText.style.transform = 'translateX(-50px)';
        ctaText.style.transition = 'all 1s ease';
    }
    
    const shapes = ctaSection.querySelectorAll('.cta-shapes > div');
    shapes.forEach(shape => {
        shape.style.opacity = '0';
        shape.style.transform = 'scale(0.8)';
        shape.style.transition = 'all 0.8s ease';
    });
    
    ctaObserver.observe(ctaSection);
}

// ========================================
// FOOTER SOCIAL LINKS ANIMATION
// ========================================

const footerSocialLinks = document.querySelectorAll('.footer-social a');

footerSocialLinks.forEach((link, index) => {
    // Staggered entrance animation
    link.style.opacity = '0';
    link.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        link.style.transition = 'all 0.5s ease';
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
    }, index * 100);
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for just '#' or if element doesn't exist
        if (href === '#' || href === '#contact' || href === '#recruitment') {
            return; // Let these work naturally or handle separately
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--gold);
    color: var(--dark);
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 998;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});
