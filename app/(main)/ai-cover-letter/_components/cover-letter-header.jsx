"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BarLoader } from "react-spinners";

export default function CoverLetterHeader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/ai-cover-letter/new");
    }, 300);
  };

  return (
    <div className="flex items-center justify-between mb-5">
      <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>
      <Button
        onClick={handleCreate}
        className="btn-primary px-4 py-2 text-lg rounded-lg hover:bg-muted hover:text-primary cursor-pointer"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center w-24 ">
            <BarLoader color="#3b82f6" height={6} width={80} />
          </div>
        ) : (
          "+ Create Cover Letter"
        )}
      </Button>
    </div>
  );
}
