export function createMobileSearchBar(placeholderText: string = "Search..."): string {
    return `
    <div class="mobile-search-section">
            <div class="search-bar-wrapper">
                <span class="search-icon">🔍</span>
                <input type="text" placeholder= "${placeholderText}" class="search-input">
            </div>
        </div>
            `
 }