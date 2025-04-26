       // Menu Toggle
       const menuToggle = document.querySelector('.menu-toggle');
       const navLinks = document.querySelector('.nav-links');

       menuToggle.addEventListener('click', () => {
           navLinks.classList.toggle('active');
       });

       // Sticky Navbar
       window.addEventListener('scroll', () => {
           const header = document.querySelector('header');
           header.classList.toggle('scrolled', window.scrollY > 50);
       });

       // Smooth Scrolling
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
           anchor.addEventListener('click', function(e) {
               e.preventDefault();
               
               const targetId = this.getAttribute('href');
               const targetElement = document.querySelector(targetId);
               
               if (targetElement) {
                   window.scrollTo({
                       top: targetElement.offsetTop - 70,
                       behavior: 'smooth'
                   });
               }
               
               // Close mobile menu when clicking a link
               if (navLinks.classList.contains('active')) {
                   navLinks.classList.remove('active');
               }
           });
       });

       // Stats Counter Animation
       const statNumbers = document.querySelectorAll('.stat-number');
       
       const options = {
           threshold: 0.7
       };

       const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   const element = entry.target;
                   const value = parseInt(element.textContent);
                   let counter = 0;
                   const interval = setInterval(() => {
                       counter++;
                       element.textContent = counter;
                       if (counter >= value) {
                           if (element.textContent.includes('+')) {
                               element.textContent = counter + '+';
                           } else if (element.textContent.includes('%')) {
                               element.textContent = counter + '%';
                           }
                           clearInterval(interval);
                       }
                   }, 20);
                   observer.unobserve(element);
               }
           });
       }, options);

       statNumbers.forEach(number => {
           observer.observe(number);
       });


    // Simple form validation
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
    
        let isValid = true;
    
        if (name.value.trim() === '') {
            isValid = false;
            name.classList.remove('input-success');
        } else {
            name.classList.add('input-success');
        }
    
        if (email.value.trim() === '' || !validateEmail(email.value)) {
            isValid = false;
            email.classList.remove('input-success');
        } else {
            email.classList.add('input-success');
        }
    
        if (!isValid) {
            e.preventDefault();  // ❗ Only prevent submit if invalid
            alert('Please fill out the form correctly.');
        }
    });
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    