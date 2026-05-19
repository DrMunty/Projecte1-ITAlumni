export function createMobileHomeLayout(): string {
    return `
     <main class="mobile-main-content">
            
            <div class="mobile-card">
                <div class="card-image-placeholder">
                <img src = "img/Networking.jpg" alt = "People talking to each other" class = "card-image">
                </div>
                <div class="card-info">
                    <h2>Networking</h2>
                    <p>Connect with professionals in your field.</p>
                    <button class="btn-mobile-action">Explore</button>
                </div>
            </div>

            <div class="mobile-card">
                <div class="card-image-placeholder"> 
                <img src = "img/JobOpportunities.jpeg" alt = "Person working on his computer" class = "card-image">
                </div>
                <div class="card-info">
                    <h2>Job Opportunities</h2>
                    <p>Discover openings tailored to your skills.</p>
                    <button class="btn-mobile-action">Search Jobs</button>
                </div>
            </div>

        </main>
        `
    }
