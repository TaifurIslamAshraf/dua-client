"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "../use-toast";

export const useCreateProject = () => {
  const toast = useToast();
  const router = useRouter();

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: (createData: { title: string }) => {
      return createProject(createData);
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.toast({
          title: "Success",
          description: data?.message,
        });

        router.replace("/create-project/:projectId");
      }
    },
    onError: (error: any) => {
      toast.toast({
        variant: "destructive",
        title: "Error",
        description: error.data?.message || "Something went wrong",
      });
    },
  });

  return { createProject: mutate, isPending, isSuccess, error };
};
