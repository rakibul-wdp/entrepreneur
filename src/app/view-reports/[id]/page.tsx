import ViewReportPage from "@/components/view-report/view-report-page";
import { notFound } from "next/navigation";
import prisma from "../../../../prisma/db";

const getReport = async (id: string) => {
  return await prisma.report.findFirst({
    where: {
      id: id,
    },
    include: {
      bodyMap: true,
      reporter: true,
    },
  });
};

const ViewReport = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getReport(id);

  if (!data) {
    return notFound();
  }

  return <ViewReportPage data={data} />;
};

export default ViewReport;
