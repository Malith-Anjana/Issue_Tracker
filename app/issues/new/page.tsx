"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const [error, setError] = useState<String>();

  const router = useRouter();
  const { register, control, handleSubmit, formState: {errors}} = useForm<IssueForm>(
    {resolver:zodResolver(createIssueSchema)}
  );
  return (
    <div className="max-w-xl">
      {error && <Callout.Root className="mb-3" color="red">
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occured!");
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && <Text color="red" as="p">{errors.description.message}</Text>}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
