export function createMobileHomeLayout(): string {
    return `
    <div class="mobile-app-container">
        <header class="mobile-header">
            <h1 class="mobile-title">Home</h1>
            <div class="header-icons">
                <button class="icon-btn-box">
                    <img src="icons/align-bottom.png" alt="Notifications" class="m-icon">
                </button>
                <img src="img/Avatar.jpeg" alt="Profile" class="mobile-avatar">
            </div>
        </header>

        <div class="mobile-search-section">
            <div class="search-bar-wrapper">
                <span class="search-icon">🔍</span>
                <input type="text" placeholder="Search alumni..." class="search-input">
            </div>
        </div>

        <main class="mobile-main-content">
            
            <div class="mobile-card">
                <div class="card-image-placeholder">
                <img src = "img/Networking.jpg" alt = "People talking to each other" class = "card-image">
                </div>
                <div class="card-info">
                    <h2>Networking</h2>
                    <p>Connect with professionals in your field.</p>
                    <button class="btn-mobile-action">Explore</button>
                </div>
            </div>

            <div class="mobile-card">
                <div class="card-image-placeholder"> 
                <img src = "img/JobOpportunities.jpeg" alt = "Person working on his computer" class = "card-image">
                </div>
                <div class="card-info">
                    <h2>Job Opportunities</h2>
                    <p>Discover openings tailored to your skills.</p>
                    <button class="btn-mobile-action">Search Jobs</button>
                </div>
            </div>

        </main>

        <nav class="bottom-nav">
            <a href="#" class="nav-item active">
                <img src="icons/Home.png" alt="Home" class="nav-icon">
                <span>Home</span>
            </a>
            <a href="#" class="nav-item">
                <img src="icons/Network.png" alt="Networking" class="nav-icon">
                <span>Networking</span>
            </a>
            <a href="#" class="nav-item">
                <img src="icons/Briefcase 24.png" alt="Job Portal" class="nav-icon">
                <span>Job Portal</span>
            </a>
            <a href="#" class="nav-item">
                <img src="icons/Profile.png" alt="Profile" class="nav-icon">
                <span>Profile</span>
            </a>
        </nav>

    </div>
    `;
}
    