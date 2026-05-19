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