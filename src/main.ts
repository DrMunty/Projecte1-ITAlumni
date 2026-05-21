// 1. IMPORTS D'ESTILS
import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/footer.css';
import '../styles/mobile.css'; 
import '../styles/networking.css';
import '../styles/jobs.css';
import '../styles/secondNavbar.css'

// 2. IMPORTS DE COMPONENTS D'ESCRIPTORI (PC)
import { createNavbar } from './components/navbar';
import { createSecondNavbar } from './components/secondNavbar';
import { createHomePage } from './components/Home';
import { createFooter } from './components/footer';
import { createNetworkingPage } from './components/desktopNetworking';
import { NetworkingPageLogic } from './components/desktopNetworking';
import { createDesktopJobsPage } from './components/desktopJobs';

// 3. IMPORTS DE COMPONENTS REUTILITZABLES DE MÒBIL
import { createMobileHeader } from './components/mobileHeader';
import { createMobileSearchBar } from './components/mobileSearchBar';
import { createMobileNavbar } from './components/mobileNavbar';
import { createMobileHomeLayout } from './components/mobileHome'; 
import { createMobileNetworkingLayout} from './components/mobileNetworking'; 
import { createMobileJobsLayout } from './components/mobileJobs'; 

// Seleccionamos el div principal de la aplicación
const app = document.querySelector<HTMLDivElement>('#app');

// "MEMORIA" O ESTADO DE LA RUTA ACTUAL
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
        
        // 1. Decidim quina navbar hem de pintar segons on estem
    let activeNavbar = '';
    
    if (currentRoute === 'home') {
        // A la Home pintem la primera navbar (la que ja tenies)
        activeNavbar = createNavbar(); 
    } else {
        // A Networking o Jobs pintem la segona navbar intel·ligent
        // Li passem currentRoute perquè sàpiga si ha de subratllar Networking o Jobs
        activeNavbar = createSecondNavbar(currentRoute); 
    };
app.innerHTML = `
        ${activeNavbar}
        <div id="desktop-container"></div>
        ${createFooter()}
    `;


        // 2. Inyectamos el componente dinámico dentro del contenedor de PC según la ruta
        const container = document.getElementById('desktop-container') as HTMLDivElement | null;
        if (container) {
            if (currentRoute === 'home') {
                container.appendChild(createHomePage());
            } else if (currentRoute === 'networking') {
                // A) Pintem l'esquelet estàtic (el cercador buit i els botons de filtre)
                container.innerHTML = createNetworkingPage();
                
                // B) CRÍTIC: Engeguem la lògica reactiva de TypeScript per activar les cerques i clics
                NetworkingPageLogic();
                
            } else if (currentRoute === 'jobs') {
                container.innerHTML = createDesktopJobsPage();
            }
        }
        
        // PAS 4: Activem els escoltadors de clics de la Navbar de PC
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
    // Escolta els clics independentment de quina Navbar estigui pintada a la pantalla
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