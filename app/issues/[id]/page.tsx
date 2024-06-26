import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import AsigneeSelect from "./AsigneeSelect";
import { cache } from "react";
interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId:number)=> prisma.issue.findUnique({where:{id:issueId}}));

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchUser(parseInt(params.id));

  if (!issue) return notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4 ">
        <IssueDetails issue={issue} session={session}/>
      </Box>
        <Box>
          <Flex direction="column" gap="4">
            <AsigneeSelect issue={issue}/>
            <EditIssueButton issueId={issue.id} session={session}/>
            <DeleteIssueButton issueId={issue.id} session={session}/>
          </Flex>
        </Box>
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({params}:Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: 'Details of issue' + issue?.id
  }
}