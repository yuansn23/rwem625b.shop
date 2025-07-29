  function t2() {
            window.open('https://line.me/R/ti/p/@YOUR_LINE_ID', '_blank');
        }

        // Enhanced page interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Intersection Observer for animations
            const observerSettings = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const scrollObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerSettings);

            // Apply animations to elements
            document.querySelectorAll('.feature-item, .benefit-point, .image-frame').forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(40px)';
                element.style.transition = `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`;
                scrollObserver.observe(element);
            });
        });

        // Button click effects
        document.querySelectorAll('button, .floating-action').forEach(button => {
            button.addEventListener('click', function() {
                console.log('ボタンがクリックされました:', this.textContent);
                
                // Visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Enhanced hover effects
        document.querySelectorAll('.feature-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });