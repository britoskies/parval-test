import React, { useState, useMemo, useEffect } from "react";
import Header from "../components/common/Header";
import SearchBar from "../components/home/SearchBar";
import FilterBar from "../components/home/FilterBar";
import RequestTable from "../components/home/RequestTable";
import Pagination from "../components/home/Pagination";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";

import { useRequests } from "../features/requests/hooks/useRequests";
import { ITEMS_PER_PAGE } from "../utils/constants";
import type { Request } from "../features/requests/types/request";

const HomePage: React.FC = () => {
  const { data: requests = [], isLoading, isError } = useRequests();

  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState<"All" | string>("All");
  const [filterStatus, setFilterStatus] = useState<"All" | string>("All");
  const [filterDate, setFilterDate] = useState<"All" | string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const types = useMemo(
    () => ["All", ...new Set(requests.map((r) => r.type))],
    [requests]
  );
  const statuses = useMemo(
    () => ["All", ...new Set(requests.map((r) => r.status))],
    [requests]
  );

  const filtered = useMemo(() => {
    return requests
      .filter((r) =>
        [r.name, r.type, r.status].some((f) =>
          f.toLowerCase().includes(searchText.toLowerCase())
        )
      )
      .filter((r) => filterType === "All" || r.type === filterType)
      .filter((r) => filterStatus === "All" || r.status === filterStatus)
      .filter(
        (r) =>
          filterDate !== "Last 7 days" ||
          (new Date().getTime() - new Date(r.createdAt).getTime()) /
            (1000 * 60 * 60 * 24) <=
            7
      );
  }, [requests, searchText, filterType, filterStatus, filterDate]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  useEffect(
    () => setCurrentPage(1),
    [searchText, filterType, filterStatus, filterDate]
  );

  if (isLoading) return <Loading message="Loading requests…" />;
  if (isError) return <Error message="Error loading requests." />;

  return (
    <div className="px-4 flex justify-center py-5">
      <div className="flex flex-col max-w-[960px] w-full">
        <Header
          title="Request Management"
          description="Manage and track all customer requests efficiently."
        />
        <SearchBar value={searchText} onChange={setSearchText} />
        <FilterBar
          filters={[
            {
              label: "Type",
              value: filterType,
              options: types,
              onChange: setFilterType,
            },
            {
              label: "Status",
              value: filterStatus,
              options: statuses,
              onChange: setFilterStatus,
            },
            {
              label: "Date",
              value: filterDate,
              options: ["All", "Last 7 days"],
              onChange: setFilterDate,
            },
          ]}
        />
        <RequestTable data={paginated as Request[]} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default HomePage;
