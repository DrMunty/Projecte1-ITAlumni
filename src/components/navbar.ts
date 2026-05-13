export function createNavbar(): string {
    return `
    <header>
        <img class="logo" src="/logo.png" alt="logo">
        <nav>
            <ul class="nav_links">
                <li><a href="#" class="active">Inici</a></li>
                <li><a href="#">Xarxa</a></li>
                <li><a href="#">Oportunitats de feina</a></li>
            </ul>
        </nav>
        <div class="nav_actions">
            <a href="#" class="btn-outline">Apunta't</a>
            <a href="#" class="btn-full">Com et veuen?</a>
        </div>
    </header>
    `;
}

