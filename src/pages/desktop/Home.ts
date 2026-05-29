export function createHomePage(): string {
  return `
        <main class="home-page-main">
            <section class="hero">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1>Benvingut, Alumni</h1>
                        <p>Connectant i empoderant a la nostra comunitat global d’alumnes</p>
                    </div>
                    <div class="hero-buttons">
                        <button class="btn-full">Uneix-te</button>
                        <button class="btn-empty">Mira que fem</button>
                    </div>
                    
  <div class="image-container" style="width: 100%; max-width: 1100px; display: flex; justify-content: center; margin: 0 auto;">
    <iframe class="main-video" 
        style="width: 76vw; max-width: 1100px; height: calc(76vw * 9 / 16); max-height: 618px; border-radius: 16px; border: none; box-shadow: 0px 10px 30px rgba(0,0,0,0.1); pointer-events: none; display: block;"
        src="https://www.youtube.com/embed/C2V8-4owXxc?autoplay=1&mute=1&controls=0&loop=1&playlist=C2V8-4owXxc&playsinline=1" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
    </iframe>
</div>

                </div>
            </section>

            <section class="benefits">
                <div class="benefits-title">
                   <h2> Què guanyes en formar-ne part? </h2>
                </div>
                <div class="benefits-container">
                    <div class="benefits-card">
                        <img src="/icons/Icon__Hat.png" alt="Graduation" class="benefits-icon">
                        <p class="benefits-text">
                            Comparteix i no perdis el contacte: Puja els teus moments importants, 
                            explica com va tot i queda amb els companys.
                        </p>
                        <button class="btn-benefits full"> Apunta't ja </button>
                    </div>
                    <div class="benefits-card">
                        <img src="/icons/Group.png" alt="Discussions" class="benefits-icon">
                        <p class="benefits-text">
                            Participa en discussions: Intercanvia coneixements, punts de vista 
                            i opinions sobre temes que t'interessen.
                        </p>
                        <button class="btn-benefits light">Apunta't ja</button>
                    </div>
                    <div class="benefits-card">
                        <img src="/icons/Icon__a-add.png" alt="Network" class="benefits-icon">
                        <p class="benefits-text">
                            Xarxa Alumni: Connecta amb companys de promoció, fes noves 
                            amistats i crea records per durar tota la vida.
                        </p>
                        <button class="btn-benefits light">Apunta't ja</button>
                    </div>
                </div>      
            </section>

            <section class="opinions">
                <div class="opinions-title">
                   <h2> T'ensenyem el que opinen els nostres súper-usuaris!</h2>
                </div>
                <div class="opinions-container">
                    <div class="opinions-card">
                        <div class="opinions-header">
                            <img src="/img/Mochi2.jpeg" alt="My cat" class="opinions-icon">
                            <div class="user-info">
                                <h3> Mochi the Cat</h3>
                                <div class="stars"> ★★★★★ </div>
                            </div>
                        </div>
                        <p class="opinions-text">
                            "Miau Miau."
                        </p>
                    </div>
                    <div class="opinions-card">
                        <div class="opinions-header">
                            <img src="/img/Emma.png" alt="Noia negra somrient" class="opinions-icon">
                            <div class="user-info">
                                <h3> Emma </h3>
                                <div class="stars"> ★★ </div>
                            </div>
                        </div>
                        <p class="opinions-text">
                            “La meva xarxa d'aquesta comunitat ha estat clau: va revolucionar la meva carrera i em va mostrar camins insospitats."
                        </p>
                    </div>
                    <div class="opinions-card">
                        <div class="opinions-header">
                            <img src="/img/Mikel.png" alt="Noi amb ulleres somrient" class="opinions-icon">
                            <div class="user-info">
                                <h3> Mikel </h3>
                                <div class="stars"> ★★★ </div>
                            </div>
                        </div>
                        <p class="opinions-text">
                            "Gràcies a IT Alumni vaig aconseguir la feina dels meus somnis en el món tech amb el seu increïble programa de mentoria."
                        </p>
                    </div>
                </div>
                
                <div class="opinions-nav">
                    <button class="nav-arrow"><</button>
                    <button class="nav-arrow">></button>
                </div>
            </section>
        </main>
    `;

}