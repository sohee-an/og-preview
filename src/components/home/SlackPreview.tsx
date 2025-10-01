type Props = { title: string; description: string; image?: string };

export default function SlackPreview({ title, description, image }: Props) {
  return (
    <div className="p-3 border-l-4 border-purple-500 bg-white rounded shadow">
      <h3 className="font-semibold text-purple-600">{title || "제목 없음"}</h3>
      <p className="text-sm text-gray-700">{description || "설명 없음"}</p>
      {image && <img src={image} alt="thumbnail" className="mt-2 rounded" />}
    </div>
  );
}
