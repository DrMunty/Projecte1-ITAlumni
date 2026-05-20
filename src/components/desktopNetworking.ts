export function createNetworkingPage(): string {

    const topProfiles = [
        { name: 'Jane Smith', role: 'Co-Founder at ABC Inc', location: 'New York, NY' },
        { name: 'John Doe', role: 'Product Manager at XYZ Corp', location: 'San Francisco, CA' },
        { name: 'Alice Johnson', role: 'Senior Developer at Tech Solutions', location: 'Remote' },
        { name: 'David Brown', role: 'Marketing Specialist at Brand Co', location: 'Chicago, IL' }
    ];

    const recentActivity = [
        "Jane Smith started following John Doe",
        "David Brown and John Doe connected",
        "John Doe shared 'Top 10 Product Management Tips' article",
        "Jane Smith and David Brown connected"
    ];

    const topCardsHTML = topProfiles.map(p => `
        <div class="desktop-profile-card">
            <h3>${p.name}</h3>
            <p class="card-role">${p.role}</p>
            <p class="card-location">${p.location}</p>
            <button class="btn-message">Message</button>
        </div>
    `).join('');

    const activityHTML = recentActivity.map(a => `
        <p class="activity-item">${a}</p>
    `).join('');

    const suggestionsHTML = topProfiles.map(p => `
        <div class="desktop-suggestion-card">
            <h3>${p.name}</h3>
            <p class="card-role">${p.role}</p>
            <p class="card-location">${p.location}</p>
            <button class="btn-connect">Connect</button>
        </div>
    `).join('');

    return `
    <div class="desktop-networking-container">
        
        <div class="networking-top-bar">
            <div class="desktop-search-wrapper">
                <span class="search-icon">🔍</span>
                <input type="text" placeholder="Search alumni..." class="desktop-search-input">
            </div>
            
            <div class="desktop-filters">
                <span class="filter-label">Filters:</span>
                <span class="filter-option">Recent Activity</span>
                <span class="filter-option active">Popular</span>
                <span class="filter-option">Most Connected</span>
            </div>
        </div>

        <div class="desktop-profiles-grid">
            ${topCardsHTML}
        </div>

        <div class="networking-content-column">
            
            <div class="recent-activity-section">
                <h2>Recent Activity</h2>
                <div class="activity-list">
                    ${activityHTML}
                </div>
            </div>

            <div class="suggestions-section">
                <h2>Suggestions for You</h2>
                <div class="suggestions-list">
                    ${suggestionsHTML}
                </div>
            </div>

        </div>

    </div>
    `;
}