import prisma from '@/prisma/client'
import IssueSummary from './IssueSummary'
import IssueCharts from './IssueCharts';

export default async function Home() {
  const open = await prisma.issue.count({
    where:{status: "OPEN"}
  });
  const inProgress = await prisma.issue.count({
    where:{status: "IN_PROGRESS"}
  });
  const closed = await prisma.issue.count({
    where:{status: "CLOSE"}
  });
  return (
    <>
    <IssueSummary open={open} inProgress={inProgress} closed={closed}/>
    <IssueCharts  open={open} inProgress={inProgress} closed={closed}/>
    </>
  )
}
