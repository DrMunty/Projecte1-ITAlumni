export function createDesktopJobsPage(): string {
    // Array con los datos de las tarjetas de tu captura
    const jobsData = [
        { title: 'Software Engineer', type: 'Full-time position', time: 'Posted 3 days ago', btnText: 'Apply Now', img: 'img/SoftwareEngineer.jpg' },
        { title: 'Product Manager', type: 'Remote opportunity', time: 'Posted 1 week ago', btnText: 'Learn More', img: 'img/ProductManager.jpg' },
        { title: 'Data Analyst', type: 'Contract-based role', time: 'Posted 2 days ago', btnText: 'View Details', img: 'img/DataAnalyst.jpg' },
        { title: 'UX Designer', type: 'Flexible hours', time: 'Posted 5 days ago', btnText: 'Apply', img: 'img/UXDesigner.jpg' },
        { title: 'Marketing Lead', type: 'Full-time role', time: 'Posted 1 day ago', btnText: 'Get Started', img: 'img/MarketingLead.jpg' },
        { title: 'HR Specialist', type: 'Part-time role', time: 'Posted 4 days ago', btnText: 'Discover More', img: 'img/HRSpecialist.jpg' }
    ];

    // Generamos las tarjetas de forma dinámica
    const jobsHTML = jobsData.map(job => `
        <div class="desktop-job-card">
            <div class="job-card-content">
                <div class="job-text-info">
                    <h3>${job.title}</h3>
                    <p class="job-type">${job.type}</p>
                    <p class="job-time">${job.time}</p>
                </div>
                <button class="btn-job-action">${job.btnText}</button>
            </div>
            <div class="job-card-image-wrapper">
                <img src="${job.img}" alt="${job.title}" class="job-card-image" onerror="this.src='img/placeholder.jpg'">
            </div>
        </div>
    `).join('');

    return `
    <div class="desktop-jobs-container">
        
        <h1 class="jobs-page-title">Jobs</h1>

        <div class="desktop-jobs-grid">
            ${jobsHTML}
        </div>

    </div>
    `;
}