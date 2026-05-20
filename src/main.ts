// 1. IMPORTS D'ESTILS
import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/footer.css';
import '../styles/mobile.css'; 
import '../styles/networking.css';
import '../styles/jobs.css';

// 2. IMPORTS DE COMPONENTS D'ESCRIPTORI (PC)
import { createNavbar } from './components/navbar';
import { createHomePage } from './components/Home';
import { createFooter } from './components/footer';
import { createNetworkingPage } from './components/desktopNetworking'; // Nuevo componente de PC
import { createDesktopJobsPage } from './components/desktopJobs';

// 3. IMPORTS DE COMPONENTS REUTILITZABLES DE MÒBIL
import { createMobileHeader } from './components/mobileHeader';
import { createMobileSearchBar } from './components/mobileSearchBar';
import { createMobileNavbar } from './components/mobileNavbar';

// 4. IMPORTS DEL CONTINGUT MÒBIL
import { createMobileHomeLayout } from './components/mobileHome'; 
import { createMobileNetworkingLayout} from './components/mobileNetworking'; 
import { createMobileJobsLayout } from './components/mobileJobs'; 

// Seleccionamos el div principal de la aplicación
const app = document.querySelector<HTMLDivElement>('#app');

// "MEMORIA" O ESTADO DE LA RUTA ACTUAL
let currentRoute: 'home' | 'networking' | 'jobs' = 'home';

function renderApp() {
    if (!app) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // ==========================================
        // VISTA MÒBIL
        // ==========================================
        let currentTitle = '';
        let currentContent = '';

        if (currentRoute === 'home') {
            currentTitle = 'Home';
            currentContent = createMobileHomeLayout();
        } else if (currentRoute === 'networking') {
            currentTitle = 'Networking';
            currentContent = createMobileNetworkingLayout();
        } else if (currentRoute === 'jobs') {
            currentTitle = 'Job Portal';
            currentContent = createMobileJobsLayout();
        }

        app.innerHTML = `
            ${createMobileHeader(currentTitle)}
            ${createMobileSearchBar()}
            ${currentContent}
            ${createMobileNavbar(currentRoute)}
        `;

        setupMobileListeners();

    } else {
        // ==========================================
        // VISTA ESCRIPTORI (PC)
        // ==========================================
        
        // 1. Pintamos la estructura base fija de PC (Navbar + Contenedor + Footer)
        app.innerHTML = `
            ${createNavbar()}
            <div id="desktop-container"></div>
            ${createFooter()}
        `;

        // 2. Inyectamos el componente dinámico dentro del contenedor de PC según la ruta
        const container = document.getElementById('desktop-container');
        if (container) {
            if (currentRoute === 'home') {
                container.appendChild(createHomePage());
            } else if (currentRoute === 'networking') {
                // Enlazamos tu nueva página de Networking para PC
                container.innerHTML = createNetworkingPage();
            } else if (currentRoute === 'jobs') {
                // ESTRUCTURA PREPARADA: Cuando crees 'createDesktopJobsPage', descomenta la línea de abajo y borra el h1
                container.innerHTML = createDesktopJobsPage();
            }
        }
        
        // 3. Activamos los clics de la Navbar superior de PC
        setupDesktopListeners(); 
    }
}

// ==========================================
// ESCUCHADORES DE CLICS (LISTENERS)
// ==========================================

const setupMobileListeners = () => {
    document.getElementById('nav-go-home')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'home';
        renderApp();
    });

    document.getElementById('nav-go-networking')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'networking';
        renderApp();
    });

    document.getElementById('nav-go-jobs')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'jobs';
        renderApp();
    });
};

const setupDesktopListeners = () => {
    // IMPORTANTE: Revisa los selectores de tu archivo navbar.ts de PC. 
    // Debes asegurarte de que los enlaces tengan asignados estos IDs (o clases) para que JS los encuentre:
    
    // Clic en "Inici"
    document.getElementById('nav-pc-home')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'home';
        renderApp();
    });

    // Clic en "Xarxa" (Networking)
    document.getElementById('nav-pc-networking')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'networking';
        renderApp();
    });

    // Clic en "Oportunitats de feina" (Jobs)
    document.getElementById('nav-pc-jobs')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'jobs';
        renderApp();
    });
};

// INICIALIZACIÓN DE LA APP
if (app) {
    renderApp();
    window.addEventListener('resize', renderApp);
}