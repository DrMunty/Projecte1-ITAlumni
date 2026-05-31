import alumniDataRaw from '../../data/users.json';

import type { User } from '../../components/classes/User';

import type { SortOption } from '../../components/global/userFilterFunction';
import { sortUsersByName, sortUsersByOption } from '../../components/global/userFilterFunction';

const alumniData: User[] = alumniDataRaw as User[];

export function createNetworkingPage(): string {
    return `
    <div class="desktop-networking-container">
        
        <div class="networking-top-bar">
            <div class="desktop-search-wrapper">
                <img src="icons/search.png" alt="Search" class="search-icon">
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

export function NetworkingPageLogic(): void {
  
    const searchInput = document.getElementById('networking-search-input') as HTMLInputElement | null;
    const gridContainer = document.getElementById('dynamic-profiles-grid') as HTMLDivElement | null;
    const filterRecent = document.getElementById('filter-recent') as HTMLSpanElement | null;
    const filterPopular = document.getElementById('filter-popular') as HTMLSpanElement | null;
    const filterConnected = document.getElementById('filter-connected') as HTMLSpanElement | null;

 
    if (!searchInput || !gridContainer || !filterRecent || !filterPopular || !filterConnected) return;

    
    let currentSearchTerm: string = '';
    let currentSort: SortOption = 'popular'; 

    const renderGrid = (): void => {
        
        const searchedUsers = sortUsersByName(alumniData, currentSearchTerm);
        
        const finalUsers = sortUsersByOption(searchedUsers, currentSort);

        if (finalUsers.length === 0) {
            gridContainer.innerHTML = `
                <p class="no-results-message">
                    No alumni found matching "${currentSearchTerm}"
                </p>
            `;
            return;
        }

        gridContainer.innerHTML = finalUsers.map((p: User) => `
            <div class="desktop-profile-card">
                <h3>${p.name}</h3>
                <p class="card-role">${p.role}</p>
                <p class="card-location">${p.location}</p>
                
                <div class="card-extra-info">
                    ${currentSort === 'recent' ? 
                        `<i>"${p.recentActivity.activity}"</i><br><span class="activity-timestamp">${p.recentActivity.timeStamp}</span>` : ''}
                    ${currentSort === 'popular' ? `${p.friends} friends` : ''}
                    ${currentSort === 'connected' ? `${p.hoursConnected} hours online` : ''}
                </div>

                <button class="btn-message">Message</button>
            </div>
        `).join('');
    };

    searchInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        currentSearchTerm = target.value;
        renderGrid(); 
    });

    const setActiveButton = (activeBtn: HTMLSpanElement): void => {
        [filterRecent, filterPopular, filterConnected].forEach(btn => btn?.classList.remove('active'));
        activeBtn.classList.add('active');
    };

    filterRecent.addEventListener('click', () => {
        currentSort = 'recent';
        setActiveButton(filterRecent);
        renderGrid();
    });

    filterPopular.addEventListener('click', () => {
        currentSort = 'popular';
        setActiveButton(filterPopular);
        renderGrid();
    });

    filterConnected.addEventListener('click', () => {
        currentSort = 'connected';
        setActiveButton(filterConnected);
        renderGrid();
    });

    renderGrid();
}