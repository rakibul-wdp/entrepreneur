"use client";

import { Table, message } from "antd";
import { useState } from "react";

import useTable from "@/hooks/useTable";
import { Report } from "@prisma/client";
import Container from "../shared/container";

const ViewReportsPage = ({ reports }: { reports: Report[] }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState(
    reports.map((data) => {
      return {
        ...data,
        key: data.id,
      };
    })
  );

  const { columns } = useTable({ messageApi, setData });

  return (
    <>
      {contextHolder}
      <Container className="py-8 max-w-[100vw] md:max-w-7xl overflow-x-auto min-h-[calc(100vh-76px-300px)]">
        <h1 className="mb-6 text-xl font-semibold">All reports</h1>
        <Table pagination={false} dataSource={data} columns={columns} />
      </Container>
    </>
  );
};

export default ViewReportsPage;
