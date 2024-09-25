document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-primary', 'shadow-md');
            navItems.forEach(item => item.classList.add('text-secondary'));
        } else {
            navbar.classList.remove('bg-primary', 'shadow-md');
            navItems.forEach(item => item.classList.remove('text-secondary'));
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('block');

        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
        } else {
            icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });

    // Image carousel
    const images = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OSDp7oILsU5hEzIxnqrVxB5qc85310.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oiSxXXsE1yGOAkf9lmb0m9ibxeHIYJ.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6zqgRtDOxGLvTK72UTh1lEG4JICTDi.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/459666841_3936893493249037_9088575702596283094_n-e97ND0scVOpLWHCZPjbr88VsqXVgem.jpg"
    ];

    const imageCarousel = document.getElementById('imageCarousel');
    if (imageCarousel) {
        let currentImageIndex = 0;

        // Create image elements
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Pure Ripple Foundation Project ${index + 1}`;
            img.className = index === 0 ? 'active' : '';
            imageCarousel.appendChild(img);
        });

        // Rotate images
        setInterval(() => {
            const imgs = imageCarousel.querySelectorAll('img');
            imgs[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imgs[currentImageIndex].classList.add('active');
        }, 5000);
    }

        // Water drop comet animation
        const waterDropComets = document.getElementById('waterDropComets');

        function createWaterDropComet() {
            const comet = document.createElement('div');
            comet.classList.add('water-drop-comet');
            comet.style.top = `${Math.random() * 100}%`;
            comet.style.animationDuration = `${Math.random() * 10 + 15}s`; // Slow animation between 15-25 seconds
            comet.style.animationTimingFunction = 'linear';
            comet.style.animationName = 'moveRightComet';
            comet.style.animationIterationCount = 'infinite';

            waterDropComets.appendChild(comet);
        }

        // Create initial comets
        for (let i = 0; i < 3; i++) {
            createWaterDropComet();
        }

        // Create a new comet every 5 seconds
        setInterval(createWaterDropComet, 2000);

        // Existing code remains unchanged
    

    // Water drops animation
    const waterDrops = document.getElementById('waterDrops');
    if (waterDrops) {
        function createWaterDrop() {
            const drop = document.createElement('div');
            drop.classList.add('water-drop');
            drop.style.width = `${Math.random() * 20 + 10}px`;
            drop.style.height = drop.style.width;
            drop.style.top = `${Math.random() * 100}%`;
            drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
            waterDrops.appendChild(drop);

            drop.addEventListener('animationend', () => {
                drop.remove();
            });
        }

        setInterval(createWaterDrop, 300);
    }

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const button = card.querySelector('button');
        if (button) {
            card.addEventListener('mouseenter', () => {
                button.classList.remove('bg-accent');
                button.classList.add('bg-secondary');
            });
            card.addEventListener('mouseleave', () => {
                button.classList.remove('bg-secondary');
                button.classList.add('bg-accent');
            });
        }
    });
});