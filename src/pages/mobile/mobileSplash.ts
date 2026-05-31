export function createMobileSplashPage(): string {
    return `
        <div class="mobile-splash-container">
            <div class="splash-content-wrapper">
                <img src="icons/logo-letters.png" alt="XL_UMNI Logo" class="splash-logo">
                <p class="splash-subtitle">Connectant i empoderant a la nostra comunitat global d'alumnes</p>
            </div>
            
            <div class="splash-bottom-wrapper">
                <button id="btn-splash-join" class="btn-splash-action">Uneix-te</button>
            </div>
        </div>
    `;
}