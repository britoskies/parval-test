import React from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Button from "../components/common/Button";
import RequestInfoGrid from "../features/requests/components/RequestInfoGrid";

import { useParams } from "react-router";
import {
  useRequest,
  useUpdateRequest,
} from "../features/requests/hooks/useRequests";
import type { Request } from "../features/requests/types/request";
import { removeTimeZone } from "../utils/helpers";
import type { InfoItem } from "../features/requests/types/grid";
import toast from "react-hot-toast";

const RequestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: request, isLoading, isError } = useRequest(id);
  const updateReq = useUpdateRequest();

  if (isLoading) {
    return <Loading message="Loading request details…" />;
  }

  if (isError || !request) {
    return <Error message="Failed to load request or request not found." />;
  }

  const {
    id: requestId,
    name,
    email,
    type,
    status,
    createdAt,
    description,
    updatedAt,
    priority,
  } = request as Request & {
    updatedAt?: string;
    priority?: string;
  };

  const infoItems: InfoItem[] = [
    { label: "Request Number", value: `#${requestId}` },
    { label: "Requester Name", value: name },
    { label: "Email", value: email },
    { label: "Request Type", value: type },
    { label: "Status", value: status },
    { label: "Created Date", value: removeTimeZone(createdAt) },
    { label: "Last Updated", value: removeTimeZone(updatedAt) },
    { label: "Priority", value: priority ?? "Normal" },
  ];

  const handleTake = () => {
    updateReq.mutate(
      { ...request, id: requestId, status: "In Progress" },
      {
        onSuccess: () => toast.success("Request set to In Progress"),
        onError: () => toast.error("Failed to update status"),
      }
    );
  };

  const handleClose = () => {
    updateReq.mutate(
      { ...request, id: requestId, status: "Closed" },
      {
        onSuccess: () => toast.success("Request closed successfully"),
        onError: () => toast.error("Failed to close request"),
      }
    );
  };

  return (
    <div className="px-4 flex justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px]">
        <Header
          title="Request Details"
          description="View and manage the details of this customer request."
          pageName={"Request Details"}
          addBreadCrumbs={true}
        />
        <h2 className="px-4 pt-5 pb-3 text-[22px] font-bold text-[#111418]">
          Request Information
        </h2>

        <RequestInfoGrid items={infoItems} />

        <h2 className="px-4 pt-5 pb-3 text-[22px] font-bold text-[#111418]">
          Description
        </h2>
        <p className="px-4 pb-3 text-[#111418] text-base">{description}</p>

        <h2 className="px-4 pt-5 pb-3 text-[22px] font-bold text-[#111418]">
          Actions
        </h2>

        <div className="flex gap-3 px-4 py-3 flex-wrap">
          <Button variant="secondary" onClick={handleTake}>
            Take Request
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailPage;
