export function createSecondNavbar(activeRoute: string): string {
    return `
    <nav class="second-desktop-navbar">
        
        <div class="second-nav-left">
            <img src="icons/AlumniConnect.png" alt="Alumni Connect Logo" class="second-nav-logo" onerror="this.style.display='none'">
            <span class="second-nav-title">Alumni Connect</span>
        </div>

        <ul class="second-nav-center second-nav-links">
            <li>
                <a href="#" id="nav-pc-home" class="${activeRoute === 'home' ? 'active' : ''}">Home</a>
            </li>
            <li>
                <a href="#" id="nav-pc-networking" class="${activeRoute === 'networking' ? 'active' : ''}">Networking</a>
            </li>
            <li>
                <a href="#" id="nav-pc-jobs" class="${activeRoute === 'jobs' ? 'active' : ''}">Job Opportunities</a>
            </li>
        </ul>

        <div class="second-nav-right">
            <button class="second-icon-btn">
                <img src="icons/search.png" alt="Search" class="second-action-icon" onerror="this.src='icons/search.png'">
            </button>
            <button class="second-icon-btn">
                <img src="icons/bell.png" alt="Notifications" class="second-action-icon" onerror="this.src='icons/bell.png'">
            </button>
            <button class="second-icon-btn">
                <img src="icons/settings-gear.png" alt="Settings" class="second-action-icon" onerror="this.src='icons/settings.png'">
            </button>
            <img src="img/Avatar.jpeg" alt="Profile" class="second-profile-pic">
        </div>

    </nav>
    `;
}