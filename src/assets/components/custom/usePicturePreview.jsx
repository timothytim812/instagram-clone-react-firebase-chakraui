import { useState } from "react";
import useShowToast from "./useShowToast";

const usePicturePreview = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSize = 2 * 1024 * 1024; // 2MB

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSize) {
        showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);

    } else {
      showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };

  return {
    selectedFile,
    handleFileChange,
    setSelectedFile
  };
};

export default usePicturePreview;
