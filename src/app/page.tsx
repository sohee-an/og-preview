import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Input placeholder="링크를 입력해주세요" label="URL 입력" />
    </div>
  );
}
