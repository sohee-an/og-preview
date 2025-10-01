type Props = { title: string; description: string; image?: string };

export default function KakaoPreview({ title, description, image }: Props) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded shadow-sm bg-yellow-50">
      {image && (
        <img src={image} alt="thumbnail" className="w-16 h-16 rounded" />
      )}
      <div>
        <h3 className="font-bold text-gray-900">{title || "제목 없음"}</h3>
        <p className="text-sm text-gray-600">{description || "설명 없음"}</p>
      </div>
    </div>
  );
}
