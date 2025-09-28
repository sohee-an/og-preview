"use client";

import { useRef, useState, FormEvent } from "react";
import Input from "@/components/Input";
import { fetchMeta } from "@/app/actions/fetchMeta";
import Loading from "../common/Loading";

type PreviewProps = {
  preview: any;
  isLoading: boolean;
};

export function Preview({ preview, isLoading }: PreviewProps) {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="border rounded p-3 mt-4">
      {preview.image && (
        <img src={preview.image} alt="preview" className="mb-2" />
      )}
      a<h2 className="font-bold">{preview.title}</h2>
      <p className="text-sm text-gray-600">{preview.description}</p>
    </div>
  );
}

export default function OGPreview() {
  const urlRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePreview = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const url = urlRef.current?.value;
    if (!url) return alert("URL을 입력해주세요");

    const data = await fetchMeta(url);
    setIsLoading(false);
    setPreview(data);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold mb-4">OG Preview Generator</h1>
      <form onSubmit={handlePreview}>
        <Input
          ref={urlRef}
          placeholder="https://example.com"
          type="url"
          className="w-full mb-4"
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          {isLoading ? "로딩중" : "미리보기 생성"}
        </button>
      </form>

      {preview && <Preview preview={preview} isLoading={isLoading} />}
    </div>
  );
}
