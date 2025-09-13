import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const shouldDownload = searchParams.get("download") === "1";

    const filePath = path.join(process.cwd(), "src", "Testing_Facilites_Brochure-RCTF-RPCP.pdf");

    const fileStat = fs.statSync(filePath);
    const fileBuffer = fs.readFileSync(filePath);

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Length", String(fileStat.size));
    headers.set(
      "Content-Disposition",
      `${shouldDownload ? "attachment" : "inline"}; filename="Testing_Facilities.pdf"`
    );

    return new NextResponse(fileBuffer, { status: 200, headers });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}


