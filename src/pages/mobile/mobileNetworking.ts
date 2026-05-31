import alumniDataRaw from '../../data/users.json';
import type { User } from '../../components/classes/User';
import type { SortOption } from '../../components/global/userFilterFunction';
import { sortUsersByName, sortUsersByOption,} from '../../components/global/userFilterFunction';

const alumniData: User[] = alumniDataRaw as User[];
const defaultAvatar = 'icons/avatar-default.svg';

export function createNetworkingMobilePage(): string {
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

export function NetworkingMobilePageLogic(): void {
    const searchInput = document.getElementById('mobile-search-input') as HTMLInputElement | null;
    const alumniContainer = document.getElementById('mobile-alumni-container') as HTMLDivElement | null;
    const tabButtons = document.querySelectorAll('.mobile-tab-btn');

    if (!alumniContainer) return;

    let searchTerm = searchInput?.value || '';
    let currentSort: SortOption = 'popular';

    const renderMobileList = (): void => {

        const filteredByName = sortUsersByName(alumniData, searchTerm);
        
        const finalUsers = sortUsersByOption(filteredByName, currentSort);

        if (finalUsers.length === 0) {
            alumniContainer.innerHTML = `<p class="no-results-text">No alumni found matching "${searchTerm}"</p>`;
            return;
        }

        alumniContainer.innerHTML = finalUsers.map((user: User) => {

    let bottomExtraInfo = '';
    
    if (currentSort === 'recent') {
        
        bottomExtraInfo = `<span class="mobile-alumni-connections recent-activity-highlight">
            ${user.recentActivity.activity} (${user.recentActivity.timeStamp})
        </span>`;
    } else if (currentSort === 'connected') {

        bottomExtraInfo = `<span class="mobile-alumni-connections"> ${user.hoursConnected} hours connected</span>`;
    } else {

        bottomExtraInfo = `<span class="mobile-alumni-connections"> ${user.friends} friends</span>`;
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

    if (searchInput) {
        searchInput.addEventListener('input', (e: Event) => {
            searchTerm = (e.target as HTMLInputElement).value;
            renderMobileList();
        });
    }
    
    renderMobileList();
}