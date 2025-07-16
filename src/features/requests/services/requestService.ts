import REQUEST_STATUS from "../../../enums/request";
import { API_URL } from "../../../utils/constants";
import { getCurrentDate } from "./../../../utils/helpers";
import type { Request, NewRequest } from "../types/request";

export const fetchRequests = async (): Promise<Request[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch requests");
  return res.json();
};

export const fetchRequestById = async (id: string): Promise<Request> => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch request ${id}`);
  return res.json();
};

export const createRequest = async (newReq: NewRequest): Promise<Request> => {
  const payload = {
    ...newReq,
    status: REQUEST_STATUS.PENDING,
    createdAt: getCurrentDate(),
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create request");
  return res.json();
};

export const updateRequest = async (req: Request): Promise<Request> => {
  const res = await fetch(`${API_URL}/${req.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error(`Failed to update request ${req.id}`);
  return res.json();
};

export const deleteRequest = async (id: number): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`Failed to delete request ${id}`);
};
