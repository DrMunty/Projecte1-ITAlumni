export function createMobileHeader(): string {
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
`
}