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
import { createMobileJobsLayout } from './components/mobileJobs';

const app = document.querySelector<HTMLDivElement>('#app');

function renderApp() {
    if (!app) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {

        const renderMobilePage = (pageName: 'home' | 'networking' | 'jobs') => {
            let currentTitle = '';
            let currentContent = '';

            if (pageName === 'home') {
                currentTitle = 'Home';
                currentContent = createMobileHomeLayout();
            } else if (pageName === 'networking') {
                currentTitle = 'Networking';
                currentContent = createMobileNetworkingLayout();
            } else if (pageName === 'jobs') {
                currentTitle = 'Job Portal';
                currentContent = createMobileJobsLayout();
            }

            app.innerHTML = `
                ${createMobileHeader(currentTitle)}
                ${createMobileSearchBar()}
                ${currentContent}
                ${createMobileNavbar(pageName)}
            `;

            setupMobileListeners();
        };

        // Funció que escolta els clics de la barra inferior
        const setupMobileListeners = () => {
            document.getElementById('nav-go-home')?.addEventListener('click', (e) => {
                e.preventDefault();
                renderMobilePage('home');
            });

            document.getElementById('nav-go-networking')?.addEventListener('click', (e) => {
                e.preventDefault();
                renderMobilePage('networking');
            });
        ;
            document.getElementById('nav-go-jobs')?.addEventListener('click', (e) => {
                e.preventDefault();
                renderMobilePage('jobs');
            });
        }
        
        renderMobilePage('home');

    } else {
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
if (app) {
    renderApp();
    window.addEventListener('resize', renderApp);
}