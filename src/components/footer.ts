export function createFooter(): string {
  return `
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-newsletter">
          <h3 class="newsletter-title">"No et perdis res, subscriu-te!"</h3>
          <form class="newsletter-form">
            <div class="input-wrapper">
              <span class="icon-email">✉</span>
              <input type="email" placeholder="El teu email" required />
            </div>
            <button type="submit" class="btn-subscribe">Subscriu-te</button>
          </form>
        </div>

        <div class="footer-links">
          <div class="footer-logo">
  <img class="logo" src="icons/logo-letters.png" alt="XALUMNI logo">
</div>
          <nav class="footer-nav">
            <ul>
              <li><a href="#">Sobre nosaltres</a></li>
              <li><a href="#">Funcionalitats</a></li>
              <li><a href="#">Centre d'ajuda</a></li>
              <li><a href="#">Contacta'ns</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Oportunitats laborals</a></li>
            </ul>
          </nav>
        </div>

        <hr class="footer-separator" />

        <div class="footer-bottom">
          <div class="language-selector">
            <button class="btn-language">
              Català <span class="icon-arrow-down">▼</span>
            </button>
          </div>
          <p class="copyright-text">
            © 2026 Albert Muntal Perez • Privadesa • Termes d'ús • Mapa del lloc
          </p>
         <div class="social-icons">
  <a href="#" class="social-icon facebook" target="_blank" title="Facebook">
    <img src="icons/LogoFacebook.png" alt="Facebook">
  </a>
  <a href="#" class="social-icon linkedin" target="_blank" title="LinkedIn">
    <img src="icons/LogoLinkedin.png" alt="LinkedIn">
  </a>
  <a href="#" class="social-icon youtube" target="_blank" title="YouTube">
    <img src="icons/LogoYoutube.png" alt="YouTube">
  </a>
</div>
        </div>
      </div>
    </footer>
    `;
}
