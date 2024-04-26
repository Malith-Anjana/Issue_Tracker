import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Isssues", value: closed, status: "CLOSE" },
  ];
  return (
    <Flex gap='4'>
      {containers.map((container) => (
        <Card key={container.label} >
          <Flex gap='1' direction="column">
            <Link className="text-sm font-medium" href={`/issues/lists?status=${container.status}`}>
              {container.label}
            </Link>
            <Text size='5' className="font-bold">{container.value}</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
