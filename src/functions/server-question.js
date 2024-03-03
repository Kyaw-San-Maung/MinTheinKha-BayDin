import { readFileSync } from "fs";
import { join } from "path";

export default (req, res) => {
  try {
    const jsonFilePath = join(process.cwd(), "http://localhost:3000/questions"); // Specify the correct path to your questions JSON file
    const jsonData = readFileSync(jsonFilePath, "utf-8");
    const parsedData = JSON.parse(jsonData);

    res.status(200).json(parsedData);
  } catch (error) {
    console.error("Error reading questions JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
