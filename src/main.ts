import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/footer.css';
import '../styles/mobile.css';

import { createNavbar } from './components/navbar';
import { createHomePage } from './components/Home';
import { createFooter} from './components/footer';

import { createMobileHeader } from './components/mobileHeader';
import { createMobileSearchBar } from './components/mobileSearchBar';
import { createMobileNavbar } from './components/mobileNavbar';

import { createMobileHomeLayout } from './components/mobileHome';
import { createMobileNetworkingLayout } from './components/mobileNetworking'

const app = document.querySelector<HTMLDivElement>('#app');

function renderApp() {
    if (!app) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // ==========================================
        // VISTA MÒBIL (Lògica de navegació)
        // ==========================================
        
        // Funció que munta el trencaclosques segons la pàgina que demanem
        const renderMobilePage = (pageName: 'home' | 'networking') => {
            let currentTitle = '';
            let currentContent = '';

            // Decidim què posar al mig segons la pàgina
            if (pageName === 'home') {
                currentTitle = 'Home';
                currentContent = createMobileHomeLayout();
            } else if (pageName === 'networking') {
                currentTitle = 'Networking';
                currentContent = createMobileNetworkingLayout();
            }

            // Dibuixem l'App sota comanda
            app.innerHTML = `
                ${createMobileHeader(currentTitle)}
                ${createMobileSearchBar()}
                ${currentContent}
                ${createMobileNavbar(pageName)}
            `;

            // Un cop dibuixat, reactivem els clics dels botons
            setupMobileListeners();
        };

        // Funció que escolta els clics de la barra inferior
        const setupMobileListeners = () => {
            document.getElementById('nav-go-home')?.addEventListener('click', (e) => {
                e.preventDefault();
                renderMobilePage('home'); // Demanem carregar la Home
            });

            document.getElementById('nav-go-networking')?.addEventListener('click', (e) => {
                e.preventDefault();
                renderMobilePage('networking'); // Demanem carregar Networking
            });
        };

        // Arrenquem l'app carregant la Home per defecte
        renderMobilePage('home');

    } else {
        // ==========================================
        // VISTA ESCRIPTORI (PC)
        // ==========================================
        app.innerHTML = `
            ${createNavbar()}
            <div id="home-container"></div>
            ${createFooter()}
        `;

        const homeContainer = document.getElementById('home-container');
        if (homeContainer) {
            homeContainer.appendChild(createHomePage());
        }
    }
}

// Inicialitzem l'aplicació
if (app) {
    renderApp();
    window.addEventListener('resize', renderApp);
}