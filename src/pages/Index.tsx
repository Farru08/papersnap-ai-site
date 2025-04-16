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
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-primary to-blue-600 bg-clip-text text-transparent animate-fade-in">
              PaperSnap
            </h1>
            <Sparkles className="absolute -right-8 -top-8 w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl mb-3 text-gray-600 animate-fade-in delay-100">
            Smart Research Paper Analysis
          </p>
          <p className="text-base md:text-lg mb-10 text-gray-500 max-w-2xl mx-auto animate-fade-in delay-200">
            Leverage AI to extract insights from research papers in seconds
          </p>
          <div className="flex justify-center gap-6 animate-fade-in delay-300">
            <Button size="lg" className="group" asChild>
              <a href="#try-it">
                Try Now
                <Zap className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="#about">
                Learn More
                <Star className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-white via-purple-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About PaperSnap
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur border-purple-100">
              <BookOpen className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">What is PaperSnap?</h3>
              <p className="text-gray-600 leading-relaxed">
                PaperSnap uses AI to automatically extract metadata like titles,
                authors, and abstracts from research papers, making literature
                review and citation management effortless.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur border-purple-100">
              <ScrollText className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Why Use It?</h3>
              <p className="text-gray-600 leading-relaxed">
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
      <section id="try-it" className="py-20 px-4 bg-gradient-to-r from-purple-50 via-white to-blue-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Try PaperSnap
          </h2>
          <Card className="p-8 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <UploadDropZone />
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-white/50 backdrop-blur">
        <div className="container max-w-4xl text-center">
          <p className="text-gray-600 mb-6">Made with ❤️ by Fareeha</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
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
