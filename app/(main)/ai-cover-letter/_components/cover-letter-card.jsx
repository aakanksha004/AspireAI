"use client";

import { deleteCoverLetter } from "@/actions/cover-letter";
import { useRouter } from "next/navigation";
import { Eye, Trash2 } from "lucide-react";
import { useState } from "react";
import { BarLoader } from "react-spinners"; // npm install react-spinners

export default function CoverLetterCard({ letter }) {
  const router = useRouter();
  const [isLoadingView, setIsLoadingView] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this letter?")) return;
    await deleteCoverLetter(letter.id);
    router.refresh();
  };

  const handleView = () => {
    setIsLoadingView(true);
    // Slight delay to show loader before navigation
    setTimeout(() => {
      router.push(`/ai-cover-letter/${letter.id}`);
    }, 300);
  };

  return (
    <div className="relative border p-4 rounded shadow w-full">
      {/* Show BarLoader fixed at top when loading view */}
      {isLoadingView && (
        <div className="fixed top-0 left-0 w-full z-50">
          <BarLoader color="#3b82f6" />
        </div>
      )}

      {/* Icons container top right */}
      <div className="absolute top-4 right-4 flex gap-3">
        <button
          onClick={handleView}
          aria-label="View cover letter"
          className="text-white hover:text-gray-500 cursor-pointer"
          disabled={isLoadingView}
        >
          <Eye size={20} />
        </button>
        <button
          onClick={handleDelete}
          aria-label="Delete cover letter"
          className="text-white hover:text-gray-500 cursor-pointer"
          disabled={isLoadingView}
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Content below */}
      <h2 className="font-semibold text-lg">
        {letter.jobTitle} at {letter.companyName}
      </h2>
      <p className="text-sm text-muted-foreground mb-2">
        Created: {new Date(letter.createdAt).toLocaleDateString()}
      </p>
      <p className="text-sm text-muted-foreground mb-2">{letter.jobTitle}</p>
    </div>
  );
}
