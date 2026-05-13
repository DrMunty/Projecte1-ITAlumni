export function createHomePage(): HTMLElement {
    const container = document.createElement('div'); // Cambiado a div para evitar main dentro de main
    container.className = 'home-page-wrapper';
    
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
                        <img class="main-image" src="../icons/Image 28.png" alt="Alumnes col·laborant" />
                    </div>
                </div>
            </section>
            
            <!-- Aquí irían las secciones de Features y Testimonios de la imagen -->
        </main>
    `;
    return container;
}