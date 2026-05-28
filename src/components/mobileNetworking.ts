import alumniDataRaw from '../data/users.json';
import type { User } from './filterFunction';
import type { SortOption } from './filterFunction';
import { sortUsersByName, sortUsersByOption } from './filterFunction';


const alumniData: User[] = alumniDataRaw as User[];

// 1. L'ESQUELET HTML (Buit per defecte, només el contenidor)
export function createMobileNetworkingLayout(): string {
    return `
        <main class="networking-content-mobile">
            
            <div class="mobile-tabs-scroll-container">
                <span class="mobile-filters-label">Filters:</span>
                <div class="mobile-networking-tabs">
                    <button class="mobile-tab-btn" data-sort="recent">Recent Activity</button>
                    <button class="mobile-tab-btn active-tab" data-sort="popular">Popular</button>
                    <button class="mobile-tab-btn" data-sort="connected">Most Connected</button>
                </div>
            </div>

            <div class="mobile-alumni-list" id="mobile-alumni-container">
                </div>
        </main>
    `;
}

// 2. LA LÒGICA INTERACTIVA DEL MÒBIL
export function MobileNetworkingLogic(): void {
    const searchInput = document.getElementById('mobile-search-input') as HTMLInputElement | null;
    const alumniContainer = document.getElementById('mobile-alumni-container') as HTMLDivElement | null;
    const tabButtons = document.querySelectorAll('.mobile-tab-btn');

    if (!alumniContainer) return;

    // Estat local
    let searchTerm = searchInput?.value || '';
    let currentSort: SortOption = 'popular';

    const renderMobileList = (): void => {
        // 1. Filtrar per nom en temps real
        const filteredByName = sortUsersByName(alumniData, searchTerm);
        
        // MÀGIA AQUÍ: 2. Ordenem el resultat fent servir la teva funció
        const finalUsers = sortUsersByOption(filteredByName, currentSort);

        // 3. Pintem les targetes amb el resultat final
        if (finalUsers.length === 0) {
            alumniContainer.innerHTML = `<p class="no-results-text">No alumni found matching "${searchTerm}"</p>`;
            return;
        }

        const defaultAvatar = "../public/icons/avatar-default.svg"

        // Fixa't que ara llegeix user.role i user.friends de la teva interfície User
        alumniContainer.innerHTML = finalUsers.map((user: User) => {
    // Variable per canviar el contingut inferior segons el filtre
    let bottomExtraInfo = '';
    
    if (currentSort === 'recent') {
        // Si està en recent, mostrem l'activitat i la data
        bottomExtraInfo = `<span class="mobile-alumni-connections" style="color: #DF007F; font-weight: 500;">
            🕒 ${user.recentActivity.activity} (${user.recentActivity.timeStamp})
        </span>`;
    } else if (currentSort === 'connected') {
        // Si està en connected, mostrem les hores
        bottomExtraInfo = `<span class="mobile-alumni-connections">⏳ ${user.hoursConnected} hours connected</span>`;
    } else {
        // Per defecte (popular), mostrem els amics
        bottomExtraInfo = `<span class="mobile-alumni-connections">🤝 ${user.friends} friends</span>`;
    }

    return `
        <div class="mobile-alumni-card">
            <img 
                src="${user.avatar ? user.avatar : defaultAvatar}" 
                alt="Profile picture of ${user.name}" 
                class="mobile-alumni-avatar"
            >
            <div class="mobile-alumni-info">
                <h3>${user.name}</h3>
                <p class="mobile-alumni-title">${user.role} • ${user.location}</p>
                ${bottomExtraInfo}
            </div>
        </div>
    `;
}).join('');
    };

    // --- ESCOLTADORS ---
    
    // Pestanyes
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const clickedBtn = e.currentTarget as HTMLButtonElement;
            const sortType = clickedBtn.getAttribute('data-sort') as SortOption;

            if (!sortType) return;

            tabButtons.forEach(btn => btn.classList.remove('active-tab'));
            clickedBtn.classList.add('active-tab');

            currentSort = sortType;
            renderMobileList();
        });
    });

    // Cercador
    if (searchInput) {
        searchInput.addEventListener('input', (e: Event) => {
            searchTerm = (e.target as HTMLInputElement).value;
            renderMobileList();
        });
    }

    // Primera càrrega
    renderMobileList();
}