"use client";

import { Button } from "@/components/ui/button";

export default function TestingFacilitiesPage() {
  const viewerUrl = "/api/files/testing-facilities";
  const downloadUrl = "/api/files/testing-facilities?download=1";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Testing Facilities</h1>
        <a href={downloadUrl}>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">Download PDF</Button>
        </a>
      </div>
      <div className="rounded-lg overflow-hidden border shadow-sm bg-white">
        <iframe
          src={viewerUrl}
          className="w-full"
          style={{ minHeight: "72vh" }}
          title="Testing Facilities PDF"
        />
      </div>
    </div>
  );
}


