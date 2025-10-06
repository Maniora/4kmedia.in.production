import { useEffect } from "react";

const Toast = ({ open, onClose, message, variant = "success", duration = 3000 }) => {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  const colors =
    variant === "success"
      ? "bg-green-500 text-white"
      : variant === "error"
      ? "bg-red-500 text-white"
      : "bg-gray-800 text-white";

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="flex justify-center mt-6">
        <div className={`pointer-events-auto px-4 py-2 rounded-lg shadow-lg ${colors}`}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Toast;


