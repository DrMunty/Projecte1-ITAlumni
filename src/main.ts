import '../styles/navbar.css';
import { createNavbar } from './components/navbar';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
    app.innerHTML = createNavbar();
}


