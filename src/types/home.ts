import type { Request } from "../features/requests/types/request";

type Filter = {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
};

export type FilterBarProps = {
  filters: Filter[];
};

export type SearchBarProps = {
  value: string;
  onChange: (v: string) => void;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
};

export interface TableProps {
  data: Request[];
}
