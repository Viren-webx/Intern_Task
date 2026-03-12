import { useState } from "react";

export default function ImageUploadPreview({ images, setImages }) {
  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 3) {
      alert("Maximum 3 images allowed");
      return;
    }

    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages([...images, ...previews]);
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleChange} />

      <div className="flex gap-2 mt-3">
        {images.map((img, i) => (
          <div key={i} className="relative">
            <img src={img.url} className="w-20 h-20 object-cover rounded" />
            <button
              onClick={() => removeImage(i)}
              className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}