import jobDataRaw from "../../data/jobs.json";
import type { Job } from "../../components/classes/Job";
import type { JobFilters } from '../../components/classes/JobFilters';
import { filterJobs } from "../../components/global/jobFilterFunction";

const jobData: Job[] = jobDataRaw as Job[];

export function createDesktopJobsPage(): string {
  return `
    <div class="desktop-jobs-container">
        <h1 class="jobs-page-title">Job Opportunities</h1>

        <div class="networking-top-bar jobs-header-bar">
            
            <div class="desktop-search-wrapper">
                <img src="icons/search.png" alt="Search" class= "search-icon">
                <input type="text" id="jobs-search-input" placeholder="Search by job title..." class="desktop-search-input">
            </div>
            
            <div class="jobs-filters-dropdowns">
                <select id="filter-stack" class="job-dropdown">
                    <option value="All">All Stacks / Sectors</option>
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

                <select id="filter-contract" class="job-dropdown">
                    <option value="All">All Contracts</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Rotating shifts">Rotating shifts</option>
                </select>

                <select id="filter-remote" class="job-dropdown">
                    <option value="All">Location (All)</option>
                    <option value="Yes">Remote</option>
                    <option value="No">On-site</option>
                </select>
            </div>

        </div>

        <div class="desktop-jobs-grid" id="dynamic-jobs-grid"></div>
    </div>
    `;
}

export function jobsLogic(): void {
  const searchInput = document.getElementById("jobs-search-input") as HTMLInputElement | null;
  const filterStack = document.getElementById("filter-stack") as HTMLSelectElement | null;
  const filterContract = document.getElementById("filter-contract") as HTMLSelectElement | null;
  const filterRemote = document.getElementById("filter-remote") as HTMLSelectElement | null;
  const gridContainer = document.getElementById("dynamic-jobs-grid") as HTMLDivElement | null;

  if (!searchInput || !filterStack || !filterContract || !filterRemote || !gridContainer) return;

  const currentFilters: JobFilters = {
    searchTerm: "",
    stack: "All",
    contract: "All",
    remote: "All",
  };

  const renderGrid = (): void => {
    const finalJobs = filterJobs(jobData, currentFilters);

    if (finalJobs.length === 0) {
      gridContainer.innerHTML = `
                <p class="jobs-no-results">
                    No job opportunities found matching your criteria.
                </p>
            `;
      return;
    }

    gridContainer.innerHTML = finalJobs
      .map(
        (job: Job) => `
            <div class="desktop-job-card">
                <div class="job-card-content">
                    <div class="job-text-info">
                        <h3>${job.name}</h3>
                        <p class="job-type job-highlighted-info">${job.stack} • ${job.contract}</p>
                        <p class="job-type">${job.remote ? "Remote" : "On-site"} | ${job.location}</p>
                        <p class="job-time">Posted ${job.posted} days ago</p>
                    </div>
                    <button class="btn-job-action">Apply Now</button>
                </div>
                <div class="job-card-image-wrapper">
                    <div class="job-image-placeholder">
                    <img src="img/job-placeholder.jpg" alt="people working" class= "job-card-image"> </div>
                </div>
            </div>
        `,
      )
      .join("");
  };

  searchInput.addEventListener("input", (e: Event) => {
    currentFilters.searchTerm = (e.target as HTMLInputElement).value;
    renderGrid();
  });

  filterStack.addEventListener("change", (e: Event) => {
    currentFilters.stack = (e.target as HTMLSelectElement).value;
    renderGrid();
  });

  filterContract.addEventListener("change", (e: Event) => {
    currentFilters.contract = (e.target as HTMLSelectElement).value;
    renderGrid();
  });

  filterRemote.addEventListener("change", (e: Event) => {
    currentFilters.remote = (e.target as HTMLSelectElement).value;
    renderGrid();
  });

  renderGrid();
}