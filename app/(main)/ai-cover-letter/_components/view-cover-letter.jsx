"use client";

import React, { useEffect, useState } from "react";
import { getCoverLetter } from "@/actions/cover-letter";
import MDEditor from "@uiw/react-md-editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";

export default function ViewCoverLetter({ id }) {
  const [letter, setLetter] = useState(null);
  const [content, setContent] = useState("");
  const [tab, setTab] = useState("preview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLetter() {
      setLoading(true);
      const data = await getCoverLetter(id);
      if (data) {
        setLetter(data);
        setContent(data.content);
      } else {
        setLetter(null);
        setContent("");
      }
      setLoading(false);
    }

    fetchLetter();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <BarLoader color="#3b82f6" width={200} />
      </div>
    );
  }

  if (!letter) {
    return <p className="p-6">Cover letter not found.</p>;
  }

  return (
    <main className="p-6 w-full mx-auto">
      <Link href="/ai-cover-letter">
        <Button variant="link" className="gap-2 pl-0 text-white hover:text-gray-300">
          <ArrowLeft className="h-4 w-4" />
          Back to Cover Letters
        </Button>
      </Link>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {letter.jobTitle} at {letter.companyName}
        </h1>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit">
          <div className="mt-4">
            <MDEditor
              value={content}
              onChange={setContent}
              height={500}
              data-color-mode="dark"
            />
          </div>
        </TabsContent>

        <TabsContent value="preview">
  <div className="border rounded-lg overflow-hidden">
    <MDEditor
      value={content}
      onChange={() => {}} // read-only, you can pass empty function
      height={800}
      preview="preview"
      data-color-mode="dark"
    />
  </div>
</TabsContent>

      </Tabs>
    </main>
  );
}
