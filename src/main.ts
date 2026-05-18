import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/footer.css';
import { createNavbar } from './components/navbar';
import { createHomePage } from './components/Home';
import { createFooter} from './components/footer';
const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
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
