import '../styles/global/variables.css'
import '../styles/desktop/navbar.css';
import '../styles/desktop/secondNavbar.css'; 
import '../styles/desktop/home.css';
import '../styles/desktop/footer.css';
import '../styles/mobile/mobileSplash.css'
import '../styles/desktop/login.css';
import '../styles/desktop/networking.css'; 
import '../styles/desktop/jobs.css';
import '../styles/mobile/mobileHome.css';
import '../styles/mobile/mobileNetworking.css';
import '../styles/mobile/mobileJobs.css';
import '../styles/mobile/mobileProfile.css';

import { createNavbar } from './components/desktop/navbar';             
import { createSecondNavbar } from './components/desktop/secondNavbar'; 
import { createHomePage } from './pages/desktop/Home';
import { createFooter } from './components/desktop/footer';
import { createDesktopRegisterPage } from './pages/desktop/desktopLogin';
import { createNetworkingPage, NetworkingPageLogic } from './pages/desktop/desktopNetworking';
import { createDesktopJobsPage, jobsLogic } from './pages/desktop/desktopJobs';

import { createMobileSplashPage } from './pages/mobile/mobileSplash';
import { createMobileHeader } from './components/mobile/mobileHeader';
import { createMobileSearchBar } from './components/mobile/mobileSearchBar';
import { createMobileNavbar } from './components/mobile/mobileNavbar';
import { createMobileHomeLayout } from './pages/mobile/mobileHome';
import { MobileHomeLogic } from './pages/mobile/mobileHome';
import { createNetworkingMobilePage, NetworkingMobilePageLogic } from './pages/mobile/mobileNetworking';
import { createMobileJobLayout } from './pages/mobile/mobileJobs'; 
import { mobileJobLogic } from './pages/mobile/mobileJobs';
import { createMobileProfilePage } from './pages/mobile/mobileProfile';

const app = document.querySelector<HTMLDivElement>('#app');
const isMobileDevice = window.innerWidth <= 768;
const hasVisitedBefore = localStorage.getItem('hasVisitedXLUMNI');

let currentRoute: 'splash' | 'home' | 'networking' | 'jobs' | 'profile' | 'register' = 
    (isMobileDevice && !hasVisitedBefore) ? 'splash' : 'home';

function renderApp(): void {
    if (!app) return;
    
    const isMobile = window.innerWidth <= 768;

    if (!isMobile && (currentRoute === 'splash' || currentRoute === 'profile')) {
        currentRoute = 'home';
    }

    if (isMobile) {
        
        if (currentRoute === 'splash') {
            app.innerHTML = createMobileSplashPage();
            
            document.getElementById('btn-splash-join')?.addEventListener('click', (e) => {
                e.preventDefault();
                
                localStorage.setItem('hasVisitedXLUMNI', 'true');
                
                currentRoute = 'register'; 
                renderApp();
                window.scrollTo(0, 0);
            });
            return;
        }
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

        app.innerHTML = `
            ${createMobileHeader(currentTitle)}
            ${currentRoute !== 'profile' ? createMobileSearchBar(searchPlaceholder): ''}
            ${currentContent}
            ${createMobileNavbar(currentRoute)}
        `;

        setupMobileListeners();
        if (currentRoute === 'home'){
            MobileHomeLogic();
        }

        else if (currentRoute === 'networking') {
            NetworkingMobilePageLogic();
        }

        else if (currentRoute === 'jobs') {
            mobileJobLogic();
        }

        } else {

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
                container.innerHTML= createHomePage();
            } else if (currentRoute === 'networking') {
                container.innerHTML = createNetworkingPage();
                NetworkingPageLogic();
            } else if (currentRoute === 'jobs') {
                container.innerHTML = createDesktopJobsPage();
                jobsLogic(); 
            }
        }
    }
        
        setupDesktopListeners(); 
    }
}
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

if (app) {
    renderApp();
    window.addEventListener('resize', renderApp);
}