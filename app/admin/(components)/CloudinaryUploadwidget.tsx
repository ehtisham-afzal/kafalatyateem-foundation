import { uploadHeroImage } from "@/actions/actions";
import { Upload } from "lucide-react";
import { createContext, useEffect, useState } from "react";

// Declare the 'cloudinary' property on the 'Window' interface
declare global {
  interface Window {
    cloudinary: any;
  }
}

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext({ loaded: false });

function CloudinaryUploadWidget({
  uwConfig,
  className,
}: {
  uwConfig: any;
  className: string;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        async (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            uploadHeroImage(result.info.secure_url).then(() => {
                window.location.reload();
            });
          }
        }
      );

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        className={className}
        id="upload_widget"
        onClick={initializeCloudinaryWidget}
      >
        <Upload className="h-4 w-4 text-muted-foreground" />
        <span className="sr-only">Upload</span>
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
