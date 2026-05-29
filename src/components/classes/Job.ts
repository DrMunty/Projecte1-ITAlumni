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
