import { ImageResponse } from "@vercel/og";

export const runtime = "edge"; // Edge runtime 추천 (빠름)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Default Title";
  const desc = searchParams.get("desc") || "Default Description";
  const domain = searchParams.get("domain") || "example.com";
  const template = searchParams.get("template") || "classic";
  const font = searchParams.get("font") || "Pretendard";
  const color = searchParams.get("color") || "#000000";
  const bg = searchParams.get("bg") || "#ffffff";
  const logoUrl = searchParams.get("logoUrl");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#fff",
          fontSize: 48,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b>{title}</b>
        <p style={{ fontSize: 24, color: "#666" }}>{desc}</p>
        <small>{domain}</small>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
