/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request: NextRequest,res:NextResponse) {
  const filePath = path.join(process.cwd(), "app", "jsondata", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const userData = JSON.parse(jsonData);

  return NextResponse.json(userData);
}
