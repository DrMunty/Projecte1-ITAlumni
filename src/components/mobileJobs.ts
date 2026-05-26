import jobDataRaw from '../data/jobs.json';
// Importem també la interfície JobFilters per complir amb el tipatge estricte de la funció
import type { Job, JobFilters } from './jobFilterFunction';
import { filterJobs } from './jobFilterFunction';

const jobData: Job[] = jobDataRaw as Job[];

// 1. L'ESQUELET HTML (Contenidor principal)
export function createMobileJobLayout(): string {
    return `
        <main class="job-content" style="padding: 16px; padding-bottom: 80px;">
            <div class="job-list-container" id="mobile-job-list" style="display: flex; flex-direction: column; gap: 16px;">
                </div>
        </main>
    `;
}

// 2. LA LÒGICA DEL FILTRE MÒBIL
export function mobileJobLogic(): void {
    const searchInput = document.getElementById('mobile-search-input') as HTMLInputElement | null;
    const listContainer = document.getElementById('mobile-job-list') as HTMLDivElement | null;

    if (!searchInput || !listContainer) return;

    // Funció que pinta la llista segons el text que li passem
    const renderList = (searchTerm: string): void => {
        
        // CORRECCIÓ 1: Creem l'objecte d'estat que la teva funció "filterJobs" necessita.
        // Com que a mòbil només busquem per text, forcem la resta de desplegables a 'All'.
        const activeFilters: JobFilters = {
            searchTerm: searchTerm,
            stack: 'All',
            contract: 'All',
            remote: 'All'
        };

        // Executem el filtratge mestre
        const filteredJobs = filterJobs(jobData, activeFilters);

        if (filteredJobs.length === 0) {
            listContainer.innerHTML = `
                <p style="text-align: center; color: #9095A0; padding: 40px; font-style: italic; font-size: 14px;">
                    No job opportunities found matching "${searchTerm}"
                </p>
            `;
            return;
        }

        // CORRECCIÓ 2: Canviem les dades i l'HTML perquè corresponguin a una oferta de feina
        listContainer.innerHTML = filteredJobs.map((job: Job) => `
            <div class="mobile-job-card" style="background: #FFFFFF; border: 1px solid #DEE1E6; border-radius: 12px; padding: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                <div class="mobile-job-info" style="flex: 1; padding-right: 12px;">
                    <h3 style="font-size: 16px; margin: 0 0 4px 0; color: #171A1F; font-weight: 600;">${job.name}</h3>
                    <p style="font-size: 13px; color: #DF007F; font-weight: 600; margin: 0 0 4px 0;">${job.stack}</p>
                    <p style="font-size: 12px; color: #565E6C; margin: 0 0 8px 0;">
                        ${job.contract} • ${job.remote ? '🌍 Remote' : '🏢 On-site'} | ${job.location}
                    </p>
                    <span style="font-size: 11px; color: #9095A0;">Posted ${job.posted} days ago</span>
                </div>
                <button class="btn-mobile-apply" style="background-color: #171A1F; color: #FFFFFF; border: none; padding: 8px 14px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">
                    Apply
                </button>
            </div>
        `).join('');
    };

    // Escoltador d'esdeveniments en temps real
    searchInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        renderList(target.value);
    });

    // Primera càrrega: Mostrem de sortida les 20 ofertes (perquè el cercador comença buit)
    renderList('');
}