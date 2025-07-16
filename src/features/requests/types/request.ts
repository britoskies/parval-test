export interface Request {
  id: number;
  name: string;
  email: string;
  type: string;
  description: string;
  status: "Pending" | "In Progress" | "Closed";
  createdAt: string;
}

// To omit when creating a new request
export type NewRequest = Omit<Request, "id" | "status" | "createdAt">;
