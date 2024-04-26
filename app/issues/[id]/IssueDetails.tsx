import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Session } from "next-auth";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({
  issue,
  session,
}: {
  issue: Issue;
  session: Session | null;
}) => {
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
      {!session && (
        <Callout.Root color="red" role="alert" mt='5'>
          <Callout.Icon>
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>
            Access denied. Please Signin to access this page.
          </Callout.Text>
        </Callout.Root>
      )}
    </div>
  );
};

export default IssueDetails;
