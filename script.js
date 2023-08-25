//O que vai aparecer no Header---------------------------------------------------------------------------------------------------------------
const textElement = document.getElementById('typing-text');
const texts = ['Full-Stack Engineer', 'Web Developer'];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[index];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (charIndex === currentText.length + 1) {
        isDeleting = true;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 150);
}

type();


//mudar o que aparece ao clicar em alguma skill----------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".skills-link");
    const contents = document.querySelectorAll(".skills-content");
  
    // Mostrar o conteúdo "Tech Stack" por padrão
    document.getElementById("tech-stack").classList.add("active");
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("data-target");
  
        contents.forEach((content) => {
          content.classList.remove("active");
        });
  
        document.getElementById(target).classList.add("active");
  
        links.forEach((link) => {
          link.classList.remove("active");
        });
  
        this.classList.add("active");
      });
    });
  });


//deixa mais preciso o nav-bar----------------------------------------------------------------------------------------------------------

// Captura todos os links da barra de navegação
const navLinks = document.querySelectorAll('.nav-link');

// Itera sobre os links e adiciona um manipulador de evento para cada um
// Adicione isso ao seu arquivo script.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
    
    function scrollToSection(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offset = parseInt(e.target.getAttribute('data-offset')) || 0; //aqui passa onde vai ser o valor do scroll(lembrando que tem que colocar o <a> o offset)
        
        if (targetSection) {
            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    }
});

//simular email enviado-----------------------------------------------------------------------------------------------------------------
function sendEmail() {
    var name = document.getElementById("contact-name").value;
    var email = document.getElementById("contact-email").value;
    var message = document.getElementById("contact-message").value;

    var sendButton = document.getElementById("send-button");
    var statusElement = document.getElementById("contact-status");

    if (name === "" || email === "" || message === "") {
        statusElement.textContent = "Please fill in all fields.";
    } else {
        sendButton.classList.add("sending");
        sendButton.disabled = true;
        statusElement.textContent = "Sending...";

        // Simulando o atraso do envio (2 segundos)
        setTimeout(function() {
            statusElement.textContent = "Email sent successfully!";
            sendButton.classList.remove("sending");
            sendButton.disabled = false;
            statusElement.style.color = "#4CAF50"; // Define a cor verde
        }, 2000);
    }
};
