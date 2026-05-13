import './style.css';
import { createNavbar } from './components/navbar';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
    app.innerHTML = createNavbar() + `
        <main>
            <section class="hero">
                <h1>Benvinguts</h1>
            </section>
        </main>
    `;
}


