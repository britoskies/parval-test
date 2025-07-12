import type { Request } from '../types/request';

export const fetchRequests = async (): Promise<Request[]> => {
  const response = await fetch('http://localhost:3000/requests');
  if (!response.ok) throw new Error('Failed to fetch requests');
  return await response.json();
};
