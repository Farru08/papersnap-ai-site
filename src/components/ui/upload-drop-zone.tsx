
import { Upload } from "lucide-react";
import { Button } from "./button";

export function UploadDropZone() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
      <Button variant="outline" className="mb-4">
        <Upload className="w-4 h-4 mr-2" />
        Choose PDF
      </Button>
      <p className="text-sm text-gray-500">or drop file here</p>
    </div>
  );
}
