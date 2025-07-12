import { useQuery } from '@tanstack/react-query';
import { fetchRequests } from '../services/requestService';

import type { Request } from '../types/request';

export const useRequests = () => {
  return useQuery<Request[]>({
    queryKey: ['requests'],
    queryFn: fetchRequests,
  });
};
