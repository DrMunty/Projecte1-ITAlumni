export function createDesktopRegisterPage(): string {
    return `
        <div class="register-page-container">
            
            <div class="register-card">
                
                <button id="btn-close-register" class="close-register-btn">✕</button>
                
                <h1 class="register-title">Crea un compte</h1>
                <p class="register-subtitle">Uneix-te a nosaltres per connectar-te i compartir oportunitats!</p>
                
                <form class="register-form">
                    <div class="input-group">
                        <img src="icons/User.png" alt="User" class="input-icon">
                        <input type="text" placeholder="Posa el teu nom" class="register-input">
                    </div>
                    <div class="input-group">
                        <img src="icons/User.png" alt="User" class="input-icon">
                        <input type="text" placeholder="Posa el teu cognom" class="register-input">
                    </div>
                    
                    <div class="input-group">
                        <img src="icons/Mail.png" alt="Email" class="input-icon">
                        <input type="email" placeholder="El teu correu electrònic" class="register-input">
                    </div>
                    <div class="input-group">
                        <img src="icons/Frame.png" alt="Password" class="input-icon">
                        <input type="password" placeholder="Crea una contrasenya" class="register-input">
                    </div>
                    
                    <div class="checkbox-group">
                        <input type="checkbox" id="terms-check" checked class="register-checkbox">
                        <label for="terms-check">Accepto els Termes i Condicions</label>
                    </div>
                    
                    <button type="button" class="btn-register-main">Registra't</button>
                </form>
                
                <div class="divider">
                    <span>O</span>
                </div>
                
                <div class="social-buttons-container">
                    <button type="button" class="btn-social btn-apple">
                        <img src="icons/Apple.png" alt="Apple" class="social-icon">
                        Continua amb Apple
                    </button>
                    <button type="button" class="btn-social btn-google">
                        <img src="icons/Google.png" alt="Google" class="social-icon">
                        Continua amb Google
                    </button>
                    <button type="button" class="btn-social btn-facebook">
                        <img src="icons/LogoFacebook.png" alt="Facebook" class="social-icon">
                        Continua amb Facebook
                    </button>
                </div>
                
                <p class="login-prompt">
                    Ja t'has registrat? <a href="#" class="login-link">Inicia sessió</a>
                </p>
                
            </div>
        </div>
    `;
}
