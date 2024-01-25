document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    }

    // Update sentences dynamically
    const introduction = "Welcome to my personal website. I'm passionate about web development and eager to share my journey with you.";
    const aboutMe = "I am a web developer with a strong foundation in front-end and back-end technologies. My goal is to create meaningful and user-friendly web experiences.";
    const portfolio = "Check out some of my projects below to see the variety of work I've been involved in.";
    const contact = "Feel free to reach out to me via email at farsalswissy@gmail.com. I'm open to collaborations and new opportunities.";

    document.getElementById('home').querySelector('p').textContent = introduction;
    document.getElementById('about').querySelector('p').textContent = aboutMe;
    document.getElementById('portfolio').querySelector('h2').insertAdjacentHTML('afterend', `<p>${portfolio}</p>`);
    document.getElementById('contact').querySelector('p').textContent = contact;
});
