import React from "react";
import REQUEST_STATUS from "../../enums/request";
import { Link } from "react-router";
import type { TableProps } from "../../types/home";

const RequestTable: React.FC<TableProps> = ({ data }) => (
  <div className="px-4 py-3 w-full">
    <div className="flex overflow-x-auto rounded-lg border border-[#dbe0e6] bg-white">
      <table className="flex-1 table-auto">
        <thead>
          <tr className="bg-white">
            <th className="col-1 px-4 py-3 text-left text-[#111418] text-sm font-medium w-[400px]">
              Requester
            </th>
            <th className="col-2 px-4 py-3 text-left text-[#111418] text-sm font-medium w-[240px]">
              Type
            </th>
            <th className="col-3 px-4 py-3 text-left text-[#111418] text-sm font-medium w-60">
              Status
            </th>
            <th className="col-4 px-4 py-3 text-left text-[#111418] text-sm font-medium w-[400px]">
              Created Date
            </th>
            <th className="px-4 py-3 text-left text-[#111418] text-sm font-medium">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((request) => (
            <tr
              key={request.id}
              className="border-t border-[#dbe0e6] hover:bg-gray-50"
            >
              <td className="col-1 h-[72px] px-4 py-2 text-[#111418] text-sm">
                {request.name}
              </td>
              <td className="col-2 h-[72px] px-4 py-2 text-[#60758a] text-sm">
                {request.type}
              </td>
              <td className="col-3 h-[72px] px-4 py-2 text-sm">
                <span
                  className={`inline-flex min-w-[84px] h-8 items-center justify-center px-4 text-sm font-semibold rounded-lg whitespace-nowrap ${
                    request.status === REQUEST_STATUS.PENDING
                      ? "bg-yellow-100 text-yellow-800"
                      : request.status === REQUEST_STATUS.IN_PROGRESS
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="col-4 h-[72px] px-4 py-2 text-[#60758a] text-sm">
                {new Date(request.createdAt).toISOString().split("T")[0]}
              </td>
              <td className="h-[72px] px-4 py-2 text-blue-600 text-sm">
                <Link to={`/request/${request.id}`} className="hover:underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <style>{`@container (max-width:120px) { .col-1{display:none;} } @container (max-width:240px) { .col-2{display:none;} } @container (max-width:360px) { .col-3{display:none;} } @container (max-width:480px) { .col-4{display:none;} }`}</style>
  </div>
);

export default RequestTable;
