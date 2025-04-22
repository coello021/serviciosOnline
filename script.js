// Datos
const products = [
    { id: 1, name: 'Fiesta Infantil', price: '$199.99', description: 'Organizamos fiestas temáticas para niños con juegos, decoración y animación personalizada.', imageUrl: 'img/1.png' },
    { id: 2, name: 'Fiesta de Adultos', price: '$299.99', description: 'Experiencias únicas para adultos con música, catering y diseño temático exclusivos' , imageUrl: 'img/2.png' },
    { id: 3, name: 'Eventos Corporativos', price: '$399.99', description: 'Eventos elegantes y organizados para empresas, con servicio profesional de principio a fin.', imageUrl: 'img/3.png' },
    { id: 4, name: 'Fiesta Personalizada', price: '$499.99', description: 'Creamos fiestas a tu medida, adaptándonos a tus gustos y necesidades.', imageUrl: 'img/4.png' }
];

const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Founder & CEO', contribution: 'Overall design and business strategy' },
    { id: 2, name: 'Jane Smith', role: 'Design Lead', contribution: 'UI/UX and visual design' },
    { id: 3, name: 'Mike Johnson', role: 'Developer', contribution: 'Frontend implementation' }
];

// Estado
let formData = {
    name: '',
    email: '',
    message: ''
};

// Funciones
function showPage(pageId) {
    // Oculta todas las páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Desactiva todos los botones de navegación
    document.querySelectorAll('.nav-links .btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Muestra la página seleccionada
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    // Activa el botón correspondiente
    document.getElementById(`nav-${pageId}`).classList.add('active');
}

function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        productCard.innerHTML = `
            <div class="card-header">
                <h2 class="card-title">${product.name}</h2>
                <p class="text-primary font-bold">${product.price}</p>
            </div>
            <div class="card-content">
                <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-32 mb-4">
                <p>${product.description}</p>
                <button class="btn btn-primary w-full mt-4">View Details</button>
            </div>
        `;
        container.appendChild(productCard);
    });
}

function renderTeam() {
    const container = document.getElementById('team-container');
    container.innerHTML = '';

    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'card';
        memberCard.innerHTML = `
            <div class="card-header">
                <h2 class="card-title">${member.name}</h2>
                <p class="text-gray-600">${member.role}</p>
            </div>
            <div class="card-content">
                <div class="img-placeholder w-16 h-16 mb-4"></div>
                <p><strong>Contribution:</strong> ${member.contribution}</p>
            </div>
        `;
        container.appendChild(memberCard);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    formData = { name: '', email: '', message: '' };
}

function handleInputChange(e) {
    const { name, value } = e.target;
    formData[name] = value;
}

// Inicialización
function init() {
    // Configurar listeners para navegación
    document.getElementById('nav-home').addEventListener('click', () => showPage('home'));
    document.getElementById('nav-team').addEventListener('click', () => showPage('team'));
    document.getElementById('nav-about').addEventListener('click', () => showPage('about'));
    document.getElementById('nav-catalog').addEventListener('click', () => showPage('catalog'));
    document.getElementById('nav-payment').addEventListener('click', () => showPage('payment'));
    document.getElementById('nav-contact').addEventListener('click', () => showPage('contact'));
    document.getElementById('nav-terms').addEventListener('click', () => showPage('terms'));

    // Configurar listener para el formulario
    document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
    document.getElementById('name').addEventListener('input', handleInputChange);
    document.getElementById('email').addEventListener('input', handleInputChange);
    document.getElementById('message').addEventListener('input', handleInputChange);

    // Renderizar datos iniciales
    renderProducts();
    renderTeam();
}

// Iniciar aplicación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);