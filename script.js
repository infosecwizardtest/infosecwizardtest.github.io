const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 15;
const rotateY = (centerX - x) / 15;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

});

card.addEventListener("mouseleave", () => {

card.style.transform = "rotateX(0) rotateY(0) translateY(0)";

});

});

const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 10);
        } else {
            counter.innerText = target;
        }

    });

};

const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting){
        animateCounters();
    }
});

observer.observe(document.querySelector('.metrics'));