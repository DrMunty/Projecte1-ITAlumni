// 1. IMPORTS DE DADES I LÒGICA
import alumniDataRaw from '../data/users.json';

// Importem els tipus utilitzant 'import type' per complir amb verbatimModuleSyntax
import type { User, SortOption } from './filterFunction';

// Importem les funcions pures de lògica
import { sortUsersByName, sortUsersByOption } from './filterFunction';

// Assegurem el tipatge de les dades del JSON
const alumniData: User[] = alumniDataRaw as User[];

// 2. EL ESQUELETO HTML (Estàtic)
export function createNetworkingPage(): string {
    return `
    <div class="desktop-networking-container">
        
        <div class="networking-top-bar">
            <div class="desktop-search-wrapper">
                <span class="search-icon">🔍</span>
                <input type="text" id="networking-search-input" placeholder="Search alumni by name..." class="desktop-search-input">
            </div>
            
            <div class="desktop-filters">
                <span class="filter-label">Filters:</span>
                <span class="filter-option" id="filter-recent">Recent Activity</span>
                <span class="filter-option active" id="filter-popular">Popular</span>
                <span class="filter-option" id="filter-connected">Most Connected</span>
            </div>
        </div>

        <div class="desktop-profiles-grid" id="dynamic-profiles-grid"></div>

    </div>
    `;
}

// 3. LA LÒGICA DINÀMICA DE LA PÀGINA
export function NetworkingPageLogic(): void {
    // Seleccionem els elements del DOM de forma segura amb tipatge estricte
    const searchInput = document.getElementById('networking-search-input') as HTMLInputElement | null;
    const gridContainer = document.getElementById('dynamic-profiles-grid') as HTMLDivElement | null;
    const filterRecent = document.getElementById('filter-recent') as HTMLSpanElement | null;
    const filterPopular = document.getElementById('filter-popular') as HTMLSpanElement | null;
    const filterConnected = document.getElementById('filter-connected') as HTMLSpanElement | null;

    // Si falta algun element, cancel·lem l'execució per evitar errors al navegador
    if (!searchInput || !gridContainer || !filterRecent || !filterPopular || !filterConnected) return;

    // Estats de la pàgina (Buscador buit i ordenat per Popular per defecte)
    let currentSearchTerm: string = '';
    let currentSort: SortOption = 'popular'; 

    // Funció encarregada de processar les dades i pintar-les a la pantalla
    const renderGrid = (): void => {
        
        // Pas 1: Filtrem els usuaris que coincideixen amb el nom escrit
        const searchedUsers = sortUsersByName(alumniData, currentSearchTerm);
        
        // Pas 2: Ordenem el resultat de la cerca segons el filtre actiu
        const finalUsers = sortUsersByOption(searchedUsers, currentSort);

        // Si la cerca no dóna cap resultat, mostrem un missatge d'avís
        if (finalUsers.length === 0) {
            gridContainer.innerHTML = `
                <p style="grid-column: 1 / -1; text-align: center; color: #9095A0; padding: 40px; font-style: italic;">
                    No alumni found matching "${currentSearchTerm}"
                </p>
            `;
            return;
        }

        // Generem i injectem el codi HTML per a cada targete d'usuari
        gridContainer.innerHTML = finalUsers.map((p: User) => `
            <div class="desktop-profile-card">
                <h3>${p.name}</h3>
                <p class="card-role">${p.role}</p>
                <p class="card-location">${p.location}</p>
                
                <div style="font-size: 12px; color: #DF007F; margin-top: 6px; line-height: 1.4;">
                    ${currentSort === 'recent' ? 
                        `<i>"${p.recentActivity.activity}"</i><br><span style="color:#9095A0; font-size:10px;">${p.recentActivity.timeStamp}</span>` : ''}
                    ${currentSort === 'popular' ? `👥 ${p.friends} friends` : ''}
                    ${currentSort === 'connected' ? `⏱️ ${p.hoursConnected} hours online` : ''}
                </div>

                <button class="btn-message" style="margin-top: 12px;">Message</button>
            </div>
        `).join('');
    };

    // --- ESCOUTADORS D'ESDEVENIMENTS (EVENT LISTENERS) ---

    // Escoltem cada vegada que l'usuari tecleja una lletra al cercador
    searchInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        currentSearchTerm = target.value;
        renderGrid(); // Repintem la quadrícula
    });

    // Funció interna per gestionar visualment quina pestanya té la línia rosa subratllada
    const setActiveButton = (activeBtn: HTMLSpanElement): void => {
        [filterRecent, filterPopular, filterConnected].forEach(btn => btn?.classList.remove('active'));
        activeBtn.classList.add('active');
    };

    // Clic a "Recent Activity"
    filterRecent.addEventListener('click', () => {
        currentSort = 'recent';
        setActiveButton(filterRecent);
        renderGrid();
    });

    // Clic a "Popular"
    filterPopular.addEventListener('click', () => {
        currentSort = 'popular';
        setActiveButton(filterPopular);
        renderGrid();
    });

    // Clic a "Most Connected"
    filterConnected.addEventListener('click', () => {
        currentSort = 'connected';
        setActiveButton(filterConnected);
        renderGrid();
    });

    // Executem el primer renderitzat per defecte en obrir la pàgina
    renderGrid();
}