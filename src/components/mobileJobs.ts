import jobsDataRaw from '../data/jobs.json';






// export function createMobileJobsLayout(): string {
//     const jobsData = [
//         { title: 'Marketing Role', role: 'Marketing Specialist at XYZ', details: 'Remote | Apply by Nov 15' },
//         { title: 'Software Engineer', role: 'Software Engineer at ABC', details: 'San Francisco | Apply by Nov 20' },
//         { title: 'Clinical Analyst', role: 'Clinical Analyst at MediCare', details: 'New York | Apply by Nov 30' },
//         { title: 'Content Writer', role: 'Content Writer at WritersHub', details: 'Remote | Apply by Dec 5' }
//     ];

//     const cardsHTML = jobsData.map(job => `
//         <div class="job-list-card">
//             <div class="job-info-text">
//                 <h3>${job.title}</h3>
//                 <p class="job-role">${job.role}</p>
//                 <p class="job-details">${job.details}</p>
//                 <button class="btn-apply">Apply Now</button>
//             </div>
//             <div class="job-photo-placeholder"></div>
//         </div>
//     `).join('');

//     return `
//         <main class="jobs-content vertical-scroll">
            
//             <div class="jobs-filters">
//                 <div class="filter-item">
//                     <span class="filter-icon">▽</span> <span>Industry ∨</span>
//                 </div>
//                 <div class="filter-item">
//                     <span class="filter-icon">▽</span>
//                     <span>Experience Level ∨</span>
//                 </div>
//             </div>

//             <div class="jobs-list-container">
//                 ${cardsHTML}
//             </div>
            
//         </main>
//     `;
// }