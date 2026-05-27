// ==========================================
// 1. IMPORTS D'ESTILS (CSS)
// ==========================================
import '../styles/navbar.css';
import '../styles/secondNavbar.css'; 
import '../styles/home.css';
import '../styles/footer.css';
import '../styles/mobile.css'; 
import '../styles/networking.css'; 
import '../styles/jobs.css';

// ==========================================
// 2. IMPORTS DE COMPONENTS D'ESCRIPTORI (PC)
// ==========================================
import { createNavbar } from './components/navbar';             
import { createSecondNavbar } from './components/secondNavbar'; 
import { createHomePage } from './components/Home';
import { createFooter } from './components/footer';

// Importem HTML i Lògica de la secció de Networking (PC)
import { createNetworkingPage, NetworkingPageLogic } from './components/desktopNetworking';

// Importem HTML i Lògica de la secció de Jobs (PC)
import { createDesktopJobsPage, jobsLogic } from './components/desktopJobs';

// ==========================================
// 3. IMPORTS DE COMPONENTS DE MÒBIL
// ==========================================
import { createMobileHeader } from './components/mobileHeader';
import { createMobileSearchBar } from './components/mobileSearchBar';
import { createMobileNavbar } from './components/mobileNavbar';
import { createMobileHomeLayout } from './components/mobileHome';
import { createMobileNetworkingLayout, MobileNetworkingLogic } from './components/mobileNetworking';
import { createMobileJobLayout } from './components/mobileJobs'; 
import { mobileJobLogic } from './components/mobileJobs';

// ==========================================
const app = document.querySelector<HTMLDivElement>('#app');
let currentRoute: 'home' | 'networking' | 'jobs' = 'home';


function renderApp(): void {
    if (!app) return;

    // Detectem si el dispositiu és un mòbil (pantalles iguals o menors a 768px)
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // ==========================================
        // VISTA MÒBIL
        // ==========================================
        let currentTitle = '';
        let currentContent = '';

        // Triem el contingut mòbil segons la ruta activa
        if (currentRoute === 'home') {
            currentTitle = 'Home';
            currentContent = createMobileHomeLayout();
        } else if (currentRoute === 'networking') {
            currentTitle = 'Networking';
            currentContent = createMobileNetworkingLayout();
        } else if (currentRoute === 'jobs') {
            currentTitle = 'Job Portal';
            currentContent = createMobileJobLayout();
        }

        // Injectem l'estructura de mòbil
        app.innerHTML = `
            ${createMobileHeader(currentTitle)}
            ${createMobileSearchBar()}
            ${currentContent}
            ${createMobileNavbar(currentRoute)}
        `;

        // Activem els clics de la barra inferior de mòbil
        setupMobileListeners();

        // Si som a networking mòbil, engeguem la seva lògica interactiva de cerca
        if (currentRoute === 'networking') {
            MobileNetworkingLogic();
        }

        if (currentRoute === 'jobs') {
            mobileJobLogic();
        }

        } else {
        // ==========================================
        // VISTA ESCRIPTORI (PC)
        // ==========================================
        
        // PAS A: Decidim quina de les dues Navbars pintem
        let activeNavbar = '';
        if (currentRoute === 'home') {
            activeNavbar = createNavbar(); // La de la Home principal
        } else {
            activeNavbar = createSecondNavbar(currentRoute); // La segona Navbar per a aplicació interna
        }

        // PAS B: Pintem el marc estructural d'escriptori
        app.innerHTML = `
            ${activeNavbar}
            <div id="desktop-container"></div>
            ${createFooter()}
        `;

        // PAS C: Injectem el contingut dinàmic i encenem els motors lògics de TypeScript
        const container = document.getElementById('desktop-container') as HTMLDivElement | null;
        if (container) {
            if (currentRoute === 'home') {
                container.appendChild(createHomePage());
            } else if (currentRoute === 'networking') {
                // Injecció de l'esquelet de Xarxa + Activació de filtres i cerca per nom
                container.innerHTML = createNetworkingPage();
                NetworkingPageLogic();
                
            } else if (currentRoute === 'jobs') {
                // Injecció de l'esquelet de Feina + Activació dels 3 desplegables combinats
                container.innerHTML = createDesktopJobsPage();
                jobsLogic(); 
            }
        }
        
        // PAS D: Activem els escoltadors de clics de la Navbar superior de PC
        setupDesktopListeners(); 
    }
}

// ==========================================
// 5. ESCOUTADORS DE CLICS (EVENT LISTENERS)
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
    // Els IDs funcionen per a qualsevol de les dues Navbars de PC gràcies a que comparteixen IDs
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
    // Execució inicial en carregar la pàgina per primer cop
    renderApp();
    
    // Escultador adaptatiu per si l'usuari canvia la mida de la finestra o gira el dispositiu
    window.addEventListener('resize', renderApp);
}