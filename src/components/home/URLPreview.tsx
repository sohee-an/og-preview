"use client";

import { useRef, useState } from "react";
import Input from "@/components/Input";
import { fetchMeta } from "@/app/actions/fetchMeta";

export default function OGPreview() {
  const urlRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<any>(null);

  const handlePreview = async () => {
    const url = urlRef.current?.value;
    if (!url) return alert("URL을 입력해주세요");

    const data = await fetchMeta(url);
    setPreview(data);
  };

  return (
    <div className="space-y-4">
      <Input ref={urlRef} placeholder="https://example.com" type="url" />
      <button
        onClick={handlePreview}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        미리보기 생성
      </button>

      {preview && (
        <div className="border rounded p-3 mt-4">
          {preview.image && (
            <img src={preview.image} alt="preview" className="mb-2" />
          )}
          <h2 className="font-bold">{preview.title}</h2>
          <p className="text-sm text-gray-600">{preview.description}</p>
        </div>
      )}
    </div>
  );
}
