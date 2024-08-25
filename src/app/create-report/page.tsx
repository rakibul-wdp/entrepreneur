"use client";

import CreateReportPage from "@/components/create-report/create-report-page";
import { Spin } from "antd";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const CreateReport = () => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-[calc(100vh-100px)] flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  } else if (status === "authenticated") {
    return <CreateReportPage />;
  }

  return redirect("/sign-in");
};
export default CreateReport;
