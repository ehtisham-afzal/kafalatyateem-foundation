"use client";
import { useState } from "react";
import { pdfjs, Document, Page as ImportedPage } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

type PDFFile = string | File | null;

const Page = () => {
  const [file, setFile] = useState<PDFFile>("/40-hadiths.pdf");
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    if (scale > 0.1) {
      setScale(scale - 0.1);
    }
  };

  return (
    <section className="w-full min-h-[50dvh] min-w-full prose prose-lg md:prose-xl px-1">
      <h1>40 Hadiths</h1>
      <Document
        className="relative flex flex-col items-center justify-center w-full h-full max-w-full overflow-hidden max-h-fit min-h-96"
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <div className="flex items-center justify-between w-full mt-4 md:w-auto">
          <Button onClick={prevPage} disabled={pageNumber <= 1}>
            Previous
          </Button>
          <p className="mx-4">
            Page {pageNumber} of {numPages}
          </p>
          <Button onClick={nextPage} disabled={pageNumber >= numPages}>
            Next
          </Button>
        </div>
        
        
          <ImportedPage
            className="flex items-center justify-center w-full h-full p-0 m-0"
            width={350}
            pageNumber={pageNumber}
            scale={scale}
          />

        <div className="flex items-center justify-between w-full mt-4 md:w-auto">
          <Button onClick={zoomOut} disabled={scale <= 0.1}>
            Zoom Out
          </Button>
          <div className="mx-4">Zoom: {Math.round(scale * 100)}%</div>
          <Button onClick={zoomIn}>Zoom In</Button>
        </div>
      </Document>
    </section>
  );
};

export default Page;
