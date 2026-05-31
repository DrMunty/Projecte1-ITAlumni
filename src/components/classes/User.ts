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
  avatar?: string
}
