export interface Request {
    id: number;
    name: string;
    email: string;
    type: string;
    description: string;
    status: 'Pending' | 'In Progress' | 'Closed';
    createdAt: string;
  }
  