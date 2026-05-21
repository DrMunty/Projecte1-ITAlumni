export interface RecentActivity {
  timeStamp: string;
  activity: string;
}

export interface User {
  name: string;
  role: string;
  location: string;
  friends: number;
  hoursConnected: number;
  recentActivity: RecentActivity;
}

export type SortOption = 'recent' | 'popular' | 'connected'

export function sortUsersByName (users: User[], searchTerm: string): User[]{
    
    if (!searchTerm.trim()) return users;

    return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

export function sortUsersByOption (users: User[], sortOption: SortOption): User[]{
    const result = [... users];

    if (sortOption === 'recent'){
        result.sort((a, b) => b.recentActivity.timeStamp.localeCompare(a.recentActivity.timeStamp));
    }

    else if (sortOption === 'popular'){
        result.sort ((a,b) => b.friends - a.friends);
    }

    else if (sortOption === 'connected'){
        result.sort ((a,b) => b.hoursConnected - a.hoursConnected);
    }

    return result
}
