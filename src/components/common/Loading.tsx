type LoadingProps = {
  message?: string;
};

function Loading({ message }: LoadingProps) {
  return (
    <div className="w-gull h-80 bg-gray-600 flex justify-center items-center ">
      {message ? message : "불러오는 중"}
    </div>
  );
}

export default Loading;
