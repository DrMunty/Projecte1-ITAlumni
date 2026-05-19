import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/footer.css';
import '../styles/mobileHome.css';
import { createNavbar } from './components/navbar';
import { createHomePage } from './components/Home';
import { createFooter} from './components/footer';
import { createMobileHomeLayout } from './components/mobileHome';

const app = document.querySelector<HTMLDivElement>('#app');

function renderApp(){
if (!app) return;
    const isMobile = window.innerWidth <= 768;

    if (isMobile){
        app.innerHTML = createMobileHomeLayout();
    } else {
        app.innerHTML = `
        ${createNavbar()}
        <div id= "home-container"></div>
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
