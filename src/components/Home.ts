export function createHomePage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "home-page-wrapper";

  container.innerHTML = `
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
                    <div class="image-container">
    <div class="image-container">
    <iframe class="main-video" 
        src="https://www.youtube.com/embed/C2V8-4owXxc?autoplay=1&mute=1&controls=0&loop=1&playlist=C2V8-4owXxc&playsinline=1" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
    </iframe>
</div>
</div>
                </div>
            </section>
            <section class = "benefits">
                <div class = "benefits-title">
                   <h2> Què guanyes en formar-ne part? </h2>
                   </div>
                   <div class = "benefits-container">
                     <div class = "benefits-card">
                     <img src= "/icons/Icon__Hat.png" alt= "Graduation" class = "benefits-icon">
                     <p class = "benefits-text">
                     Comparteix i no perdis el contacte: Puja els teus moments importants, 
                    explica com va tot i queda amb els companys.
                    </p>
                    <button class = "btn-benefits full"> Apunta't ja </button>
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
              <section class = "opinions">
                <div class = "opinions-title">
                   <h2> T'ensenyem el que opinen els nostres súper-usuaris!</h2>
                   </div>
                   <div class = "opinions-container">
                     <div class = "opinions-card">
                     <div class = "opinions-header">
                     <img src= "/img/Mochi2.jpeg" alt= "My cat" class = "opinions-icon">
                     <div class = "user-info">
                     <h3> Mochi the Cat</h3>
                     <div class = "stars"> ★★★★★ </div>
                     </div>
                    </div>
                    <p class = "opinions-text">
                    "Miau Miau"
                    </p>
                    </div>
                  <div class = "opinions-card">
                     <div class = "opinions-header">
                     <img src= "/img/coche.png" alt= "Q2 color verde manzana" class = "opinions-icon">
                     <div class = "user-info">
                     <h3> Q2 Verde Manzana</h3>
                     <div class = "stars"> ★★ </div>
                     </div>
                    </div>
                    <p class = "opinions-text">
                    "A la que lleves 2.000km te dejo tirado en la cuneta desgraciado."
                    </p>
                    </div>

                      <div class = "opinions-card">
                     <div class = "opinions-header">
                     <img src= "/img/durisimo.jpeg" alt= "A strange face" class = "opinions-icon">
                     <div class = "user-info">
                     <h3> Strange Face</h3>
                     <div class = "stars"> ★★★ </div>
                     </div>
                    </div>
                    <p class = "opinions-text">
                    "Durisimo hermano"
                    </p>
                    </div>
                    <div class="opinions-nav">
            <button class="nav-arrow"><</button>
            <button class="nav-arrow">></button>
        </div>
            </section>
            <!-- Aquí irían las secciones de Features y Testimonios de la imagen -->
        </main>
    `;
  return container;
}
