document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            let icon = menuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Fixed Header on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply fade-in dynamically to cards that don't have it hardcoded
    const dynamicFadeElements = document.querySelectorAll('.service-card, .portfolio-item, .about-section, .testimonial-card');
    dynamicFadeElements.forEach(el => el.classList.add('fade-in'));

    // Now observe all fade-in elements
    const allFadeElements = document.querySelectorAll('.fade-in');
    allFadeElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Lower is faster

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                obs.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // 5. Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === category) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 10);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    // 6. WhatsApp Floating Button Dynamic Generation (if not present)
    if (!document.querySelector('.whatsapp-float')) {
        const waBtn = document.createElement('a');
        waBtn.href = 'https://wa.me/8095335050?text=Hi,%20I%E2%80%99m%20interested%20in%20your%20event%20decoration%20services.';
        waBtn.className = 'whatsapp-float';
        waBtn.target = '_blank';
        waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(waBtn);
    }

    // 7. Before / After Drag Sliders
    document.querySelectorAll('.ba-slider').forEach(slider => {
        let dragging = false;

        function setPos(clientX) {
            const rect = slider.getBoundingClientRect();
            let pct = ((clientX - rect.left) / rect.width) * 100;
            pct = Math.max(2, Math.min(98, pct));
            const before = slider.querySelector('.ba-before');
            const handle = slider.querySelector('.ba-handle');
            // Clip the "before" image: show left `pct`% of it
            before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
            handle.style.left = `${pct}%`;
        }

        function onStart(e) {
            dragging = true;
            // Remove hint animation class once user interacts
            slider.classList.remove('ba-hint');
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            setPos(x);
        }

        function onMove(e) {
            if (!dragging) return;
            e.preventDefault();
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            setPos(x);
        }

        function onEnd() { dragging = false; }

        slider.addEventListener('mousedown',  onStart);
        slider.addEventListener('touchstart', onStart, { passive: true });
        window.addEventListener('mousemove',  onMove);
        window.addEventListener('touchmove',  onMove, { passive: false });
        window.addEventListener('mouseup',    onEnd);
        window.addEventListener('touchend',   onEnd);
    });
});
