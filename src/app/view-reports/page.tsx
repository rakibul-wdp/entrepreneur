import ViewReportsPage from "@/components/view-report/view-reports-page";
import prisma from "../../../prisma/db";

export const dynamic = "force-dynamic";

async function getData() {
  const res = await prisma.report.findMany();
  return res;
}
export default async function ViewReport() {
  return <ViewReportsPage reports={await getData()} />;
}
