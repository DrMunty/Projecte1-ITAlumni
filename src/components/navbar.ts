export function createNavbar(): string {
    return `
    <header class="main-header">
        <div class="nav-left">
            <img class="logo" src="icons/logo-letters.png" alt="XL_UMNI logo">
            
            <nav>
                <ul class="nav_links">
                    <li><a id= "nav-pc.home"> Inici </a></li> 
                    <li><a id= "nav-pc-networking"> Xarxa </a></li>
                    <li><a id= "nav-pc-jobs"> Oportunitats de feina </a></li>
                </ul>
            </nav>
        </div>
        
        <div class="nav_actions">
            <button class="nav-btn-outline">
                <img src="icons/Icon.png" alt="" class="btn-icon"> 
                Apunta't
            </button>
            <button class="nav-btn-full">
                <img src="icons/Icon2.png" alt="" class="btn-icon"> 
                Com et veuen?
            </button>
        </div>
    </header>
    `;
}