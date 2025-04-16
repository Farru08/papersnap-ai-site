
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UploadDropZone } from "@/components/ui/upload-drop-zone";
import { Navbar } from "@/components/navbar";
import {
  BookOpen,
  BrainCircuit,
  FileSearch,
  Github,
  GraduationCap,
  ScrollText,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            PaperSnap
          </h1>
          <p className="text-lg md:text-xl mb-2 text-gray-600">Fast, simple, and Gen Z coded</p>
          <p className="text-sm md:text-base mb-8 text-gray-500">
            AI-driven Metadata Extraction from Research Documents using Deep Learning
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#try-it">Try Now</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About PaperSnap</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">What is PaperSnap?</h3>
              <p className="text-gray-600">
                PaperSnap uses AI to automatically extract metadata like titles,
                authors, and abstracts from research papers, making literature
                review and citation management effortless.
              </p>
            </Card>
            <Card className="p-6">
              <ScrollText className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Why Use It?</h3>
              <p className="text-gray-600">
                Manual extraction is time-consuming and error-prone. PaperSnap
                automates this process, letting you focus on your research instead
                of data entry.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Challenges</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Rule-based Tools Fall Short</h3>
              <p className="text-gray-600">
                Traditional tools struggle with varying paper layouts and formats,
                leading to inconsistent results.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">OCR Limitations</h3>
              <p className="text-gray-600">
                Standard OCR tools often fail to accurately process scanned PDFs,
                especially with complex formatting.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Lack of Understanding</h3>
              <p className="text-gray-600">
                Current tools don't comprehend document context, missing crucial
                metadata and relationships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Solution</h2>
          <Card className="p-8">
            <div className="flex items-center justify-center mb-8">
              <BrainCircuit className="w-16 h-16 text-primary" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Advanced AI Pipeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tesseract / PaddleOCR for text extraction</li>
                  <li>• LayoutLMv2 for document understanding</li>
                  <li>• NER for entity recognition</li>
                  <li>• Generative AI for completion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automatic metadata extraction</li>
                  <li>• Smart layout analysis</li>
                  <li>• Missing info completion</li>
                  <li>• Multi-format support</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">System Architecture</h2>
          <Card className="p-4 aspect-video flex items-center justify-center">
            <FileSearch className="w-24 h-24 text-gray-300" />
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Python", "HuggingFace", "Tesseract", "PaddleOCR", "Gen AI"].map(
              (tech) => (
                <Card
                  key={tech}
                  className="p-4 flex items-center justify-center text-center aspect-square"
                >
                  <span className="font-medium">{tech}</span>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* Try It Section */}
      <section id="try-it" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Try PaperSnap</h2>
          <UploadDropZone />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container max-w-4xl text-center">
          <p className="text-gray-600 mb-4">Made with ❤️ by Students</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://university.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
