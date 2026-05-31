export function createMobileNavbar(activeTab: 'home' | 'networking' | 'jobs' | 'profile' | 'register'): string {
    return `
    <nav class="bottom-nav">
        <a href="#" class="nav-item ${activeTab === 'home' ? 'active' : ''}" id="nav-go-home">
            <img src="icons/Home.png" alt="Home" class="nav-icon">
            <span>Home</span>
        </a>
        
        <a href="#" class="nav-item ${activeTab === 'networking' ? 'active' : ''}" id="nav-go-networking">
            <img src="icons/Network.png" alt="Networking" class="nav-icon">
            <span>Networking</span>
        </a>
        
        <a href="#" class="nav-item ${activeTab === 'jobs' ? 'active' : ''}" id="nav-go-jobs">
            <img src="icons/Briefcase 24.png" alt="Job Portal" class="nav-icon">
            <span>Job Portal</span>
        </a>
        
        <a href="#" class="nav-item ${activeTab === 'profile' ? 'active' : ''}" id="nav-go-profile">
            <img src="icons/Profile.png" alt="Profile" class="nav-icon">
            <span>Profile</span>
        </a>
    </nav>
    `;
}