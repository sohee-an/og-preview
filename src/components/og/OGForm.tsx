"use client";

import { useState } from "react";

export default function OGForm() {
  const [form, setForm] = useState({
    title: "내 블로그",
    desc: "웹 개발자의 기록",
    domain: "myblog.com",
    template: "classic",
    font: "Pretendard",
    color: "#000000",
    bg: "#ffffff",
    logoUrl: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const ogUrl = `/api/og?${new URLSearchParams(form as any).toString()}`;
  return (
    <section className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">OG 이미지 커스터마이저</h1>

      <div className="space-y-4">
        <label className="block text-gray-300">
          제목
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className=" mt-1 border p-2 w-full rounded text-white"
          />
        </label>

        <label className="block text-gray-300">
          설명
          <input
            type="text"
            value={form.desc}
            onChange={(e) => handleChange("desc", e.target.value)}
            className="border p-2 w-full rounded"
          />
        </label>

        <label className="block text-gray-300">
          도메인
          <input
            type="text"
            value={form.domain}
            onChange={(e) => handleChange("domain", e.target.value)}
            className="border p-2 w-full rounded"
          />
        </label>

        <div className="grid grid-cols-2 gap-2 text-gray-300">
          <label>
            템플릿
            <select
              value={form.template}
              onChange={(e) => handleChange("template", e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="minimal">Minimal</option>
            </select>
          </label>

          <label className="text-gray-300">
            폰트
            <select
              value={form.font}
              onChange={(e) => handleChange("font", e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="Pretendard">Pretendard</option>
              <option value="Noto Sans">Noto Sans</option>
              <option value="Roboto">Roboto</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2 ">
          <label className="text-gray-300">
            배경색
            <input
              type="color"
              value={form.bg}
              onChange={(e) => handleChange("bg", e.target.value)}
              className="border p-1 w-full h-10 rounded"
            />
          </label>

          <label className="text-gray-300">
            글자색
            <input
              type="color"
              value={form.color}
              onChange={(e) => handleChange("color", e.target.value)}
              className="border p-1 w-full h-10 rounded"
            />
          </label>
        </div>

        <label className="block text-gray-300">
          로고 URL
          <input
            type="text"
            value={form.logoUrl}
            onChange={(e) => handleChange("logoUrl", e.target.value)}
            placeholder="https://example.com/logo.png"
            className="border p-2 w-full rounded"
          />
        </label>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold mb-2">미리보기</h2>
        <img
          src={ogUrl}
          alt="OG 미리보기"
          className="border rounded w-full h-auto"
        />
      </div>
    </section>
  );
}
