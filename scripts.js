const texts = ["Frontend Developer","UX Designer"];
let index = 0;
const textContainer = document.getElementById("homeText");

setInterval(() => {
    textContainer.style.opacity = 0; // Start fading out
    setTimeout(() => {
        index = (index + 1) % texts.length;
        textContainer.textContent = texts[index];
        textContainer.style.opacity = 1; // Fade back in
    }, 700); // Wait for the fade-out transition to complete
}, 2000); // Change text every 2 seconds
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section.hidden');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    const typingContainer = document.querySelectorAll('.aboutText');
    const text ="<>I'm a challenger by heart and builder by nature.I have spent time converting designs into pixel-perfect, performant, accessible, and responsive applications/websites. You can simply describe me as a front end developer addict<>"
    const words = text.split(" ");
    let index = 0;

    function typeWord() {
        if (index < words.length) {
            typingContainer.textContent += words[index] + " ";
            index++;
            setTimeout(typeWord, 300); // Adjust typing speed here (300ms per word)
        }
    }

    typeWord();
});
 

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the element
                
                // Animate inner elements
                const innerElements = entry.target.querySelectorAll('.hidden');
                innerElements.forEach((element, innerIndex) => {
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, innerIndex * 200); // Delay the animation of each inner element by 200ms
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section and its inner elements
    const sections = document.querySelectorAll('section.hidden');
    sections.forEach(section => observer.observe(section));
});


    