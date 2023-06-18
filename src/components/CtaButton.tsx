import { ReactNode } from "react";

const CtaButton = ({
  children,
  className,
  onClick,
  type,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`primary-colour p-2 rounded-md text-white font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default CtaButton;
