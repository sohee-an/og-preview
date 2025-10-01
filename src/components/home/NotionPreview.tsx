type Props = { title: string; description: string; image?: string };

export default function NotionPreview({ title, description, image }: Props) {
  return (
    <div className="p-4 border rounded bg-gray-50">
      {image && <img src={image} alt="thumbnail" className="mb-2 rounded" />}
      <h3 className="font-medium text-black">{title || "제목 없음"}</h3>
      <p className="text-sm text-gray-600">{description || "설명 없음"}</p>
    </div>
  );
}
