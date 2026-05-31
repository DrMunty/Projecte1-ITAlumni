import type { Job } from '../classes/Job';
import type { JobFilters } from '../classes/JobFilters';

export function filterJobs(jobs: Job[], currentFilters: JobFilters): Job[] {
    return jobs.filter(job => {
        const matchName = job.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        
        const filterStackLower = currentFilters.stack.toLowerCase();
        const matchStack = filterStackLower === 'all' || job.stack.toLowerCase().includes(filterStackLower);
        
        const filterContractLower = currentFilters.contract.toLowerCase();
        const matchContract = filterContractLower === 'all' || job.contract.toLowerCase() === filterContractLower;

        let matchRemote = true;
        if (currentFilters.remote === 'Yes') {
            matchRemote = job.remote === true;
        } else if (currentFilters.remote === 'No') {
            matchRemote = job.remote === false;
        }

        return matchName && matchStack && matchContract && matchRemote;
    });
}