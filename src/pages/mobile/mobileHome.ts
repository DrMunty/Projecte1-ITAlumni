export function createMobileHomeLayout(): string {
    return `
     <main class="mobile-main-content">
            
            <div class="mobile-card">
                <div class="card-image-placeholder">
                <img src ="img/Networking.jpg" alt = "People talking to each other" class = "card-image">
                </div>
                <div class="card-info">
                    <h2>Networking</h2>
                    <p>Connect with professionals in your field.</p>
                    <button id= "btn-networking" class="btn-mobile-action">Explore</button>
                </div>
            </div>

            <div class="mobile-card">
                <div class="card-image-placeholder"> 
                <img src = "img/JobOpportunities.jpeg" alt = "Person working on his computer" class = "card-image">
                </div>
                <div class="card-info">
                    <h2>Job Opportunities</h2>
                    <p>Discover openings tailored to your skills.</p>
                    <button id= "btn-jobs" class="btn-mobile-action">Search Jobs</button>
                </div>
            </div>
        </main>
        `
    }

    export function MobileHomeLogic(): void {
    const btnNetworking = document.getElementById('btn-go-networking') as HTMLButtonElement | null;
    const btnJobs = document.getElementById('btn-go-jobs') as HTMLButtonElement | null;

    if (btnNetworking) {
        btnNetworking.addEventListener('click', () => {
            window.location.hash = '#networking'; 
        });
    }

    if (btnJobs) {
        btnJobs.addEventListener('click', () => {
            window.location.hash = '#jobs';
        });
    }
}