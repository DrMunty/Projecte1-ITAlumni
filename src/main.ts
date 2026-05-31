// ==========================================
// 1. IMPORTS D'ESTILS (CSS)
// ==========================================
import '../styles/desktop/navbar.css';
import '../styles/desktop/secondNavbar.css'; 
import '../styles/desktop/home.css';
import '../styles/desktop/footer.css';
import '../styles/desktop/login.css';
import '../styles/desktop/networking.css'; 
import '../styles/desktop/jobs.css';
import '../styles/mobile/mobileHome.css';
import '../styles/mobile/mobileNetworking.css';
import '../styles/mobile/mobileJobs.css';
import '../styles/mobile/mobileProfile.css';

// ==========================================
// 2. IMPORTS DE COMPONENTS D'ESCRIPTORI (PC)
// ==========================================
import { createNavbar } from './components/desktop/navbar';             
import { createSecondNavbar } from './components/desktop/secondNavbar'; 
import { createHomePage } from './pages/desktop/Home';
import { createFooter } from './components/desktop/footer';

import { createDesktopRegisterPage } from './pages/desktop/desktopLogin';
// Importem HTML i Lògica de la secció de Networking (PC)
import { createNetworkingPage, NetworkingPageLogic } from './pages/desktop/desktopNetworking';

// Importem HTML i Lògica de la secció de Jobs (PC)
import { createDesktopJobsPage, jobsLogic } from './pages/desktop/desktopJobs';

// ==========================================
// 3. IMPORTS DE COMPONENTS DE MÒBIL
// ==========================================
import { createMobileHeader } from './components/mobile/mobileHeader';
import { createMobileSearchBar } from './components/mobile/mobileSearchBar';
import { createMobileNavbar } from './components/mobile/mobileNavbar';
import { createMobileHomeLayout } from './pages/mobile/mobileHome';
import { MobileHomeLogic } from './pages/mobile/mobileHome';
import { createNetworkingMobilePage, NetworkingMobilePageLogic } from './pages/mobile/mobileNetworking';
import { createMobileJobLayout } from './pages/mobile/mobileJobs'; 
import { mobileJobLogic } from './pages/mobile/mobileJobs';
import { createMobileProfilePage } from './pages/mobile/mobileProfile';

// ==========================================
const app = document.querySelector<HTMLDivElement>('#app');
let currentRoute: 'home' | 'networking' | 'jobs' | 'profile' | 'register' = 'home';


function renderApp(): void {
    if (!app) return;

    // Detectem si el dispositiu és un mòbil (pantalles iguals o menors a 768px)
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // ==========================================
        // VISTA MÒBIL
        // ==========================================
        
        if (currentRoute === 'register') {
            app.innerHTML = createDesktopRegisterPage();
            
            document.getElementById('btn-close-register')?.addEventListener('click', (e) => {
                e.preventDefault();
                currentRoute = 'home'; 
                renderApp();          
                window.scrollTo(0, 0);
            });
            return;
        }

        let currentTitle = '';
        let currentContent = '';
        let searchPlaceholder = 'Search pages';

        // Triem el contingut mòbil segons la ruta activa
        if (currentRoute === 'home') {
            currentTitle = 'Home';
            currentContent = createMobileHomeLayout();
            searchPlaceholder = 'Search pages'
        } else if (currentRoute === 'networking') {
            currentTitle = 'Networking';
            currentContent = createNetworkingMobilePage();
            searchPlaceholder = 'Search alumni'
        } else if (currentRoute === 'jobs') {
            currentTitle = 'Job Portal';
            currentContent = createMobileJobLayout();
            searchPlaceholder = 'Search job opportunities'
        } else if (currentRoute === 'profile') {
            currentTitle = 'Profile';
            currentContent = createMobileProfilePage();
        }

        // Injectem l'estructura de mòbil
        app.innerHTML = `
            ${createMobileHeader(currentTitle)}
            ${currentRoute !== 'profile' ? createMobileSearchBar(searchPlaceholder): ''}
            ${currentContent}
            ${createMobileNavbar(currentRoute)}
        `;

        // Activem els clics de la barra inferior de mòbil
        setupMobileListeners();
        if (currentRoute === 'home'){
            MobileHomeLogic();
        }
        // Si som a networking mòbil, engeguem la seva lògica interactiva de cerca
        else if (currentRoute === 'networking') {
            NetworkingMobilePageLogic();
        }

        else if (currentRoute === 'jobs') {
            mobileJobLogic();
        }

        } else {
        // ==========================================
        // VISTA ESCRIPTORI (PC)
        // ==========================================
        
        // PAS A: Decidim quina de les dues Navbars pintem
        if (currentRoute === 'register'){
            app.innerHTML = createDesktopRegisterPage();

            document.getElementById('btn-close-register')?.addEventListener('click', (e) => {
                e.preventDefault();
                currentRoute = 'home'; 
                renderApp();          
                window.scrollTo(0, 0);
            });
        }

        else {
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
                container.innerHTML= createHomePage();
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
    }
        
        // PAS D: Activem els escoltadors de clics de la Navbar superior de PC
        setupDesktopListeners(); 
    }
}

// ==========================================
// 5. ESCOUTADORS DE CLICS (EVENT LISTENERS)
// ==========================================

const setupMobileListeners = (): void => {

    document.getElementById('btn-networking')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'networking';
        renderApp();
        window.scrollTo(0, 0);
    });

    document.getElementById('btn-jobs')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'jobs';
        renderApp();
        window.scrollTo(0, 0);
    });

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

    document.getElementById('nav-go-profile')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'profile';
        renderApp();
    });
};

const setupDesktopListeners = (): void => {

    document.getElementById('btn-nav-register-1')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'register';
        renderApp();
        window.scrollTo(0, 0);
    });

    document.getElementById('btn-nav-register-2')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentRoute = 'register';
        renderApp();
        window.scrollTo(0, 0);
    });
    
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