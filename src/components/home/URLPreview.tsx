"use client";

import { useRef, useState, FormEvent } from "react";
import Input from "@/components/Input";
import { fetchMeta } from "@/app/actions/fetchMeta";
import Loading from "../common/Loading";
import NoImage from "../common/NoImage";
import { TAB_ITEMS, TabType } from "../../constants/previewMenu";
import TabButton from "../common/TabButton";
import KakaoPreview from "./KakoPreview";
import SlackPreview from "./SlackPreview";
import NotionPreview from "./NotionPreview";

type PreviewProps = {
  preview: any;
  isLoading: boolean;
};

const PREVIEW_CATEGORY = [
  { id: 0, label: "카카오", value: "kakao", isActive: true },
  { id: 1, label: "슬랙", value: "slack", isActive: false },
  { id: 2, label: "노션", value: "노션", isActive: false },
];

export function Preview({ preview, isLoading }: PreviewProps) {
  if (isLoading) {
    return <Loading />;
  }
  if (!preview)
    return (
      <div className="border rounded p-3 mt-4 bg-red-50 text-red-600">
        메타데이터를 불러올 수 없습니다. <br />
        URL을 확인해주세요.
      </div>
    );

  return (
    <div className="border rounded p-3 mt-4">
      {preview.image ? (
        <img src={preview.image} alt="preview" className="mb-2" />
      ) : (
        <NoImage />
      )}

      <h2 className="font-bold">
        {preview.title || <span className="text-gray-400">제목 없음</span>}
      </h2>

      <p className="text-sm text-gray-600">
        {preview.description || (
          <span className="text-gray-400">설명 없음</span>
        )}
      </p>
    </div>
  );
}

export default function OGPreview() {
  const urlRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("kakao");

  const handlePreview = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const url = urlRef.current?.value;
    if (!url) return alert("URL을 입력해주세요");
    try {
      const data = await fetchMeta(url);
      setIsLoading(false);
      setPreview(data);
    } catch (err) {
      console.log("ddd", err);
      alert(err);
    }
  };

  return (
    <section className="space-y-4">
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

      <div className="flex gap-2">
        {TAB_ITEMS.map((tab) => (
          <TabButton
            key={tab}
            text={tab.toUpperCase()}
            value={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {preview && (
        <div className="mt-4">
          {isLoading && <Loading />}
          {!isLoading && (
            <>
              {activeTab === "kakao" && <KakaoPreview {...preview} />}

              {activeTab === "slack" && <SlackPreview {...preview} />}
              {activeTab === "notion" && <NotionPreview {...preview} />}
            </>
          )}
        </div>
      )}
    </section>
  );
}
