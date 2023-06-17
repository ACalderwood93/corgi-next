import { ReactNode } from "react";

const CtaButton = ({
  children,
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`primary-colour p-2 rounded-md text-white font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default CtaButton;
