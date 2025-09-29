"use server";

import { load as cherrioLoad } from "cheerio";

export async function fetchMeta(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" }); // 최신꺼 가지고오기
    if (!res.ok) throw new Error("사이트에 연결할 수 없습니다.");

    const html = await res.text();
    const $ = cherrioLoad(html);

    // og 태그 파싱
    const title =
      $('meta[property="og:title"]').attr("content") || $("title").text() || "";
    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") ||
      "";
    const image = $('meta[property="og:image"]').attr("content") || "";

    return { title, description, image, url };
  } catch (e) {
    console.error("fetchMeta error:", e);
    return null;
  }
}
