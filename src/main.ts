import '../styles/style.css';
import { createHomePage } from './components/Home';
const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
    app.appendChild(createHomePage()); 
}
