import clsx from "clsx";
type ButtonProps = {
  text: string;
  value?: string;
  className?: string;
  isActive?: boolean;
  onClick: () => void;
};

function TabButton({ text, className, value, isActive, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-t-md border-b-2",
        isActive
          ? "border-blue-500 text-blue-500 font-semibold"
          : "border-transparent text-gray-600",
        className
      )}
    >
      {text}
    </button>
  );
}
export default TabButton;
