import React from "react";
import RequestForm from "../features/requests/components/RequestForm";
import Header from "./../components/common/Header";

const CreateRequestPage: React.FC = () => {
  return (
    <div className="px-4 flex justify-center py-5">
      <div className="flex flex-col w-[512px] max-w-full py-5">
        <Header
          title="Submit a Request"
          description="Please fill out the form below to submit your request. We will get back to you as soon as possible."
        />
        <RequestForm />
      </div>
    </div>
  );
};

export default CreateRequestPage;
