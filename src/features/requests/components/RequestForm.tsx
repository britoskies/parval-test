import toast from "react-hot-toast";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useCreateRequest } from "../hooks/useRequests";
import { formatCedula } from "./../../../utils/helpers";
import type { NewRequest } from "../types/request";

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewRequest>();

  const navigate = useNavigate();
  const { mutate, isPending } = useCreateRequest();
  const [cedula, setCedula] = useState<string>("");

  const selectOptions = [
    { selectOption: "Select a request type", selectValue: "" },
    { selectOption: "Inquiry", selectValue: "Inquiry" },
    { selectOption: "Complaint", selectValue: "Complaint" },
    { selectOption: "Suggestion", selectValue: "Suggestion" },
    { selectOption: "Feature Request", selectValue: "Feature Request" },
    { selectOption: "Technical Support", selectValue: "Technical Support" },
  ];

  const onSubmit = (data: NewRequest) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
        toast.success("Request submitted!", { duration: 2000 });
      },
      onError: () => {
        toast.error("Failed to submit request");
      },
    });
  };

  const handleChange = (value: string) => {
    setCedula(formatCedula(value.replace(/[^0-9-]/g, "")));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 space-y-4">
      <Input
        id="name"
        type="text"
        label="Your Name"
        placeholder="Enter your full name"
        errorMessage={errors.name && errors.name.message}
        register={register("name", { required: "Name is required" })}
      />
      <Input
        id="cedula"
        type="text"
        label="Identification Number (ID)"
        value={cedula}
        placeholder="___-_______-_"
        errorMessage={errors.cedula?.message}
        register={register("cedula", {
          required: "Cedula is required",
          pattern: {
            value: /^\d{3}-\d{7}-\d$/,
            message: "Formato inválido: debe ser 000-0000000-0",
          },
        })}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Input
        id="email"
        type="text"
        label="Email Address"
        placeholder="Enter your email address"
        errorMessage={errors.email && errors.email.message}
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
      />
      <Input
        id="type"
        type="select"
        label="Request Type"
        placeholder="Enter your full name"
        selectOptions={selectOptions}
        errorMessage={errors.type && errors.type.message}
        register={register("type", { required: "Please select a type" })}
      />
      <Input
        id="description"
        type="textarea"
        label="Description"
        placeholder="Describe your request in detail"
        errorMessage={errors.description && errors.description.message}
        register={register("description", {
          required: "Description is required",
        })}
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={isPending} variant="primary">
          {isPending ? "Submitting…" : "Submit Request"}
        </Button>
      </div>
    </form>
  );
};

export default RequestForm;
