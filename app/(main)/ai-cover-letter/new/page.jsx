"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateCoverLetter } from "@/actions/cover-letter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { BarLoader } from "react-spinners";

export default function NewCoverLetter() {
  const [form, setForm] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
  });
  const [loading, setLoading] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateCoverLetter(form);
      router.push(`/ai-cover-letter/${result.id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to generate cover letter");
    } finally {
      setLoading(false);
    }
  };

  const handleBackClick = () => {
    setLoadingBack(true);
    router.push("/ai-cover-letter");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* Top-left Heading */}
      <div className="mb-10 max-w-4xl">
        <Button
          variant="link"
          className="gap-2 pl-0 text-white font-bold hover:text-gray-300 flex items-center"
          onClick={handleBackClick}
          disabled={loadingBack}
        >
          {loadingBack ? (
            <BarLoader color="#3b82f6" width={80} height={6} />
          ) : (
            <>
              <ArrowLeft className="h-5 w-5" />
              Back to Cover Letters
            </>
          )}
        </Button>

        <h1 className="text-6xl font-bold gradient-title mb-5">Create Cover Letter</h1>
        <p className="text-gray-400 mt-2">
          Generate a tailored cover letter for your job application
        </p>
      </div>

      {/* Centered Form */}
      <form onSubmit={handleSubmit} className="flex justify-center items-center">
        <div className="w-full border border-zinc-800 shadow-xl rounded-lg p-8 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">Job Details</h2>
            <p className="text-sm text-gray-400 mb-4">
              Provide information about the position you’re applying for
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Company Name</label>
                <input
                  name="companyName"
                  placeholder="Enter company name"
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-black border border-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Job Title</label>
                <input
                  name="jobTitle"
                  placeholder="Enter job title"
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-black border border-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Job Description</label>
            <textarea
              name="jobDescription"
              placeholder="Paste the job description here"
              onChange={handleChange}
              rows={6}
              className="w-full p-3 rounded bg-black border border-zinc-800 text-white resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-muted hover:text-primary transition cursor-pointer"
            >
              {loading ? "Generating..." : "Generate Cover Letter"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
