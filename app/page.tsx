// app/page.js (or wherever your component is)
"use ";
import fs from "fs";
import path from "path";

export default function Home() {
  // Fetching the data inside the component
  const filePath = path.join(process.cwd(), "app", "jsondata", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  console.log("data", data.navBarItems);

  return (
    <div>
     
    </div>
  );
}
