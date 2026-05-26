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
        const matchName = job.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        
        const matchStack = currentFilters.stack === 'All' || job.stack.toLowerCase() === currentFilters.stack.toLowerCase();
        
        const matchContract = currentFilters.contract === 'All' || job.contract.toLowerCase() === currentFilters.contract.toLowerCase();
        
        let matchRemote = true;
        if (currentFilters.remote === 'Yes') {
            matchRemote = job.remote === true;
        } else if (currentFilters.remote === 'No') {
            matchRemote = job.remote === false;
        }

        return matchName && matchStack && matchContract && matchRemote;
    });
}