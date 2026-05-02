// Preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 500);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('active');
    });
});

// Corte order buttons
document.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', () => {
        const corte = btn.getAttribute('data-corte');
        const mensaje = `¡Hola! Quiero pedir:\n• ${corte}\nPor favor envíame opciones de entrega.`;
        window.open(`https://wa.me/5491123456789?text=${encodeURIComponent(mensaje)}`, '_blank');
    });
});

// Pedido form
document.getElementById('pedidoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const whatsappMensaje = `¡Hola! Soy ${nombre}\n📱 WhatsApp: ${telefono}\n\nPedido:\n${mensaje}\n\n¡Gracias!`;
    
    window.open(`https://wa.me/5491123456789?text=${encodeURIComponent(whatsappMensaje)}`, '_blank');
    
    // Reset form
    e.target.reset();
    
    // Success message
    alert('¡Pedido enviado! Te contactaremos pronto por WhatsApp 📲');
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.corte-card, .galeria-item, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});