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

//////
function openModal(type){

const modal = document.getElementById("specModal");
const title = document.getElementById("modalTitle");
const body = document.getElementById("modalBody");

modal.style.display = "flex";

if(type === "defense"){

title.innerText = "Defensive Security";

body.innerHTML = `
<h4>Projects</h4>
<ul>
<li>Splunk Log Investigation Lab</li>
<li>Network Traffic Analysis Project</li>
<li>Incident Response Simulation</li>
</ul>

<h4>Tools</h4>
<ul>
<li>Splunk</li>
<li>Wireshark</li>
<li>Security Onion</li>
</ul>

<h4>Certifications</h4>
<ul>
<li>CompTIA Security+</li>
</ul>
`;

}

if(type === "pentest"){

title.innerText = "Penetration Testing";

body.innerHTML = `
<h4>Projects</h4>
<ul>
<li>Active Directory Attack Lab</li>
<li>Web App Pentest Project</li>
<li>Burp Suite Vulnerability Scan</li>
</ul>

<h4>Tools</h4>
<ul>
<li>Nmap</li>
<li>Burp Suite</li>
<li>Metasploit</li>
</ul>

<h4>Training</h4>
<ul>
<li>TryHackMe Offensive Pentesting Path</li>
</ul>
`;

}

if(type === "analysis"){

title.innerText = "Threat Analysis";

body.innerHTML = `
<h4>Projects</h4>
<ul>
<li>MITRE ATT&CK Mapping Lab</li>
<li>Threat Hunting Investigation</li>
<li>Malware Traffic Analysis</li>
</ul>

<h4>Skills</h4>
<ul>
<li>IOC Identification</li>
<li>Attack Pattern Analysis</li>
<li>Threat Intelligence</li>
</ul>
`;

}

if(type === "automation"){

title.innerText = "Security Automation";

body.innerHTML = `
<h4>Projects</h4>
<ul>
<li>Python Log Parser</li>
<li>Automated Vulnerability Scanner</li>
<li>Linux Hardening Script</li>
</ul>

<h4>Languages</h4>
<ul>
<li>Python</li>
<li>Bash</li>
</ul>
`;

}

}

function closeModal(){

document.getElementById("specModal").style.display = "none";

}