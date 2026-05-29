import jobDataRaw from '../../data/jobs.json';
import type { Job, JobFilters } from '../../components/classes/Job';
import { filterJobs } from '../../components/global/jobFilterFunction';

const jobData: Job[] = jobDataRaw as Job[];

// 1. L'ESQUELET HTML (Net de CSS inline)
export function createMobileJobLayout(): string {
    return `
        <main class="job-content">
            <div class="mobile-jobs-main-layout">
                
                <div class="mobile-filters-container">
                    <div class="mobile-filters-row">
                        
                        <select id="mobile-filter-stack" class="job-dropdown-mobile">
                            <option value="All">All Stacks</option>
                            <option value="React">React / Frontend</option>
                            <option value="Node.js">Node.js / Backend</option>
                            <option value="Python">Python / Data & ML</option>
                            <option value="Swift">Swift / iOS Mobile</option>
    
                            <option value="Figma">Figma / UX/UI Design</option>
                            <option value="Jira">Jira / Agile & Scrum</option>
    
                            <option value="Google Analytics">SEO / Analytics</option>
                            <option value="WordPress">WordPress / Content</option>
                            <option value="Zendesk">Zendesk / Customer Support</option>
    
                            <option value="Linux">Linux / Systems Admin</option>
                            <option value="AWS">AWS / Cloud Architect</option>
                            <option value="Kali Linux">Kali Linux / Cybersecurity</option>
    
                            <option value="SAP">SAP ERP / Consultant</option>
                            <option value="Salesforce">Salesforce / Account Management</option>
                            <option value="Selenium">Selenium / QA Automation</option>

                        </select>

                        <select id="mobile-filter-contract" class="job-dropdown-mobile">
                            <option value="All">All Contracts</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Internship">Internship</option>
                            <option value="Weekends">Weekends</option>
                            <option value="Rotating shifts">Rotating shifts</option>
                        </select>

                        <select id="mobile-filter-remote" class="job-dropdown-mobile">
                            <option value="All"> All Locations </option>
                            <option value="Yes">Remote</option>
                            <option value="No">On-site</option>
                        </select>

                    </div>
                </div>

                <div class="mobile-jobs-list-container" id="mobile-job-list">
                    </div>

            </div>
        </main>
    `;
}

export function mobileJobLogic(): void {
    const searchInput = document.getElementById('mobile-search-input') as HTMLInputElement | null;
    const filterStack = document.getElementById('mobile-filter-stack') as HTMLSelectElement | null;
    const filterContract = document.getElementById('mobile-filter-contract') as HTMLSelectElement | null;
    const filterRemote = document.getElementById('mobile-filter-remote') as HTMLSelectElement | null;
    const listContainer = document.getElementById('mobile-job-list') as HTMLDivElement | null;

    if (!listContainer) return;

    const currentFilters: JobFilters = {
        searchTerm: searchInput?.value || '',
        stack: filterStack?.value || 'All',
        contract: filterContract?.value || 'All',
        remote: filterRemote?.value || 'All'
    };

    const renderList = (): void => {
        const filteredJobs = filterJobs(jobData, currentFilters);

        if (filteredJobs.length === 0) {
            listContainer.innerHTML = `
                <p style="text-align: center; color: #9095A0; padding: 40px; font-style: italic; font-size: 14px;">
                    No job opportunities found matching your criteria.
                </p>
            `;
            return;
        }

        listContainer.innerHTML = filteredJobs.map((job: Job) => `
            <div class="mobile-job-card">
                <div class="mobile-job-info">
                    <h3>${job.name}</h3>
                    <p class="mobile-job-stack">${job.stack}</p>
                    <p class="mobile-job-details">
                        ${job.contract} • ${job.remote ? '🌍 Remote' : '🏢 On-site'} | ${job.location}
                    </p>
                    <span class="mobile-job-date">Posted ${job.posted} days ago</span>
                </div>
                <button class="btn-mobile-apply">Apply</button>
            </div>
        `).join('');
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e: Event) => {
            currentFilters.searchTerm = (e.target as HTMLInputElement).value;
            renderList();
        });
    }

    filterStack?.addEventListener('change', (e: Event) => {
        currentFilters.stack = (e.target as HTMLSelectElement).value;
        renderList();
    });

    filterContract?.addEventListener('change', (e: Event) => {
        currentFilters.contract = (e.target as HTMLSelectElement).value;
        renderList();
    });

    filterRemote?.addEventListener('change', (e: Event) => {
        currentFilters.remote = (e.target as HTMLSelectElement).value;
        renderList();
    });

    renderList();
}