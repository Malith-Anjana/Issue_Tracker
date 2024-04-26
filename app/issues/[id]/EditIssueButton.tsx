import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { Session } from "next-auth";
import Link from "next/link";
import React from "react";

const EditIssueButton = ({issueId, session}: {issueId: number, session: Session | null}) => {
  return (
    <Button disabled={session ? false:true}>
      <Pencil2Icon />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
