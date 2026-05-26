
import '../styles/navbar.css';
import '../styles/secondNavbar.css'; 
import '../styles/home.css';
import '../styles/footer.css';
import '../styles/mobile.css'; 
import '../styles/desktopNetworking.css'; 
import '../styles/desktopJobs.css';

import { createNavbar } from './components/navbar';             
import { createSecondNavbar } from './components/secondNavbar'; 
import { createHomePage } from './components/Home';
import { createFooter } from './components/footer';

// Importem HTML i Lògica de Networking
import { createNetworkingPage, networkingLogic } from './components/desktopNetworking';

// Importem HTML i Lògica de Jobs (¡NUEVO!)
import { createDesktopJobsPage, initJobsLogic } from './components/desktopJobs';

// ==========================================
// 3. IMPORTS DE COMPONENTS DE MÒBIL
// ==========================================
import { createMobileHeader } from './components/mobileHeader';
import { createMobileSearch } from './components/mobileSearch';
import { createMobileBottomNav } from './components/mobileBottomNav';
import { createMobileHomeContent } from './components/mobileHome'; 
import { createMobileNetworkingContent, initMobileNetworkingLogic } from './components/mobileNetworking'; 
import { createMobileJobsContent } from './components/mobileJobs'; 

// ==========================================
// 4. ESTAT GLOBAL DE LA NAVEGACIÓ
// ==========================================
const app = document.querySelector<HTMLDivElement>('#app');
let currentRoute: 'home' | 'networking' | 'jobs' = 'home';

function renderApp(): void {
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
            currentContent = createMobileHomeContent();
        } else if (currentRoute === 'networking') {
            currentTitle = 'Networking';
            currentContent = createMobileNetworkingContent();
        } else if (currentRoute === 'jobs') {
            currentTitle = 'Job Portal';
            currentContent = createMobileJobsContent();
        }

        app.innerHTML = `
            ${createMobileHeader(currentTitle)}
            ${createMobileSearch()}
            ${currentContent}
            ${createMobileBottomNav(currentRoute)}
        `;

        setupMobileListeners();

        // Inicializamos la lógica móvil si estamos en networking
        if (currentRoute === 'networking') {
            initMobileNetworkingLogic();
        }

    } else {
        // ==========================================
        // VISTA ESCRIPTORI (PC)
        // ==========================================
        
        let activeNavbar = '';
        if (currentRoute === 'home') {
            activeNavbar = createNavbar(); 
        } else {
            activeNavbar = createSecondNavbar(currentRoute); 
        }

        app.innerHTML = `
            ${activeNavbar}
            <div id="desktop-container"></div>
            ${createFooter()}
        `;

        const container = document.getElementById('desktop-container') as HTMLDivElement | null;
        if (container) {
            if (currentRoute === 'home') {
                container.appendChild(createHomePage());
            } else if (currentRoute === 'networking') {
                // Networking HTML + Lógica
                container.innerHTML = createDesktopNetworkingPage();
                initNetworkingLogic();
                
            } else if (currentRoute === 'jobs') {
                // Jobs HTML + Lógica (¡AQUÍ SUCEDE LA MAGIA!)
                container.innerHTML = createDesktopJobsPage();
                initJobsLogic(); 
            }
        }
        
        setupDesktopListeners(); 
    }
}

// ==========================================
// 5. ESCOUTADORS DE CLICS (LISTENERS)
// ==========================================

const setupMobileListeners = (): void => {
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

const setupDesktopListeners = (): void => {
    document.getElementById('nav-pc-home')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'home';
        renderApp();
    });

    document.getElementById('nav-pc-networking')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'networking';
        renderApp();
    });

    document.getElementById('nav-pc-jobs')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'jobs';
        renderApp();
    });
};

// ==========================================
// 6. INICIALITZACIÓ DE L'APLICACIÓ
// ==========================================
if (app) {
    renderApp();
    window.addEventListener('resize', renderApp);
}