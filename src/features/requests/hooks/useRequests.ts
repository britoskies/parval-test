import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchRequests,
  fetchRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
} from "../services/requestService";

import type { Request, NewRequest } from "../types/request";

export const useRequests = () =>
  useQuery<Request[]>({
    queryKey: ["requests"],
    queryFn: fetchRequests,
  });

export const useRequest = (id?: string) =>
  useQuery<Request>({
    queryKey: ["request", id],
    queryFn: () => fetchRequestById(id!),
    enabled: Boolean(id),
  });

export const useCreateRequest = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: NewRequest) => createRequest(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["requests"] });
    },
  });
};

export const useUpdateRequest = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: Request) => updateRequest(data),
    onSuccess: (_data, variables) => {
      client.invalidateQueries({ queryKey: ["requests"] });
      client.invalidateQueries({ queryKey: ["request", String(variables.id)] });
    },
  });
};

export const useDeleteRequest = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteRequest(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["requests"] });
    },
  });
};
