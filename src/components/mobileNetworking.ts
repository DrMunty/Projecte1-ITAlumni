import alumniDataRaw from '../data/users.json';
import type { User } from './filterFunction';
import type { SortOption } from './filterFunction';
import { sortUsersByName, sortUsersByOption } from './filterFunction';


const alumniData: User[] = alumniDataRaw as User[];

// 1. L'ESQUELET HTML (Buit per defecte, només el contenidor)
export function createMobileNetworkingLayout(): string {
    const alumniData = [
        { name: 'John Doe', class: '2010', role: 'CEO at TechSolutions Inc.' },
        { name: 'Sarah Johnson', class: '2015', role: 'Marketing Director at GreenWave' },
        { name: 'Michael Brown', class: '2008', role: 'Founder of EduLearn Academy' },
        { name: 'Emily Davis', class: '2012', role: 'Research Scientist at BioTech Labs' },
        { name: 'James Lee', class: '2005', role: 'Managing Partner at Lee & Associates' }
    ];

    const cardsHTML = alumniData.map(alumni => `
        <div class="alumni-list-card">
            <div class="alumni-info-text">
                <h3>${alumni.name}</h3>
                <p class="alumni-class">Class of ${alumni.class}</p>
                <p class="alumni-role">${alumni.role}</p>
            </div>
            <div class="alumni-photo-placeholder"></div>
        </div>
    `).join('');

    return `
        <main class="networking-content">
            <div class="alumni-list-container">
                ${cardsHTML}
            </div>
        </main>
    `;
}

// 2. LA LÒGICA INTERACTIVA DEL MÒBIL
export function MobileNetworkingLogic(): void {
    // Busquem l'input del component mobileSearch i el contenidor d'aquesta pàgina
    const searchInput = document.getElementById('mobile-search-input') as HTMLInputElement | null;
    const listContainer = document.getElementById('mobile-alumni-list') as HTMLDivElement | null;

    if (!searchInput || !listContainer) return;

    // Funció que pinta la llista segons el text que li passem
    const renderList = (searchTerm: string): void => {
        // Utilitzem la teva funció pura per filtrar
        const filteredUsers = sortUsersByName(alumniData, searchTerm);

        if (filteredUsers.length === 0) {
            listContainer.innerHTML = `
                <p style="text-align: center; color: #9095A0; padding: 40px; font-style: italic; font-size: 14px;">
                    No alumni found matching "${searchTerm}"
                </p>
            `;
            return;
        }

        // Pintem les targetes amb l'estil específic de mòbil
        listContainer.innerHTML = filteredUsers.map((p: User) => `
            <div class="alumni-list-card">
                <div class="alumni-info-text">
                    <h3>${p.name}</h3>
                    <p class="alumni-role">${p.role}</p>
                    <p class="alumni-class" style="margin-top: 4px;">${p.location}</p>
                </div>
                <div class="alumni-photo-placeholder"></div>
            </div>
        `).join('');
    };

    // Escoltem cada vegada que l'usuari tecleja
    searchInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        renderList(target.value);
    });

    // Renderitzem la llista completa la primera vegada que s'obre la pàgina (amb el cercador buit)
    renderList('');
}