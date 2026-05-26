export interface Job {
    name: string;
    contract: string;         
    remote: boolean;          
    posted: number;
    location: string;
    stack: string;           
    experienceLevel: boolean; 
}


export interface JobFilters {
    searchTerm: string;
    stack: string;      
    contract: string;   
    remote: string;     
}


export function filterJobs(jobs: Job[], currentFilters: JobFilters): Job[] {
    return jobs.filter(job => {
        // 1. Barra de cerca (Nom)
        const matchName = job.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        
        // 2. Filtre de Stack (.includes per acceptar llistes de tecnologies)
        const filterStackLower = currentFilters.stack.toLowerCase();
        const matchStack = filterStackLower === 'all' || job.stack.toLowerCase().includes(filterStackLower);
        
        // 3. Filtre de Contracte (Exacte)
        const filterContractLower = currentFilters.contract.toLowerCase();
        const matchContract = filterContractLower === 'all' || job.contract.toLowerCase() === filterContractLower;
        
        // 4. Filtre de Remot (Super blindat per evitar confusions amb el valor 'All')
        let matchRemote = true;
        if (currentFilters.remote === 'Yes') {
            matchRemote = job.remote === true;
        } else if (currentFilters.remote === 'No') {
            matchRemote = job.remote === false;
        }

        // Només si compleix els 4 filtres alhora es mostrarà la targeta
        return matchName && matchStack && matchContract && matchRemote;
    });
}