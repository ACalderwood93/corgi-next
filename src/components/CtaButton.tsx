import { ReactNode } from "react";

const CtaButton = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`primary-colour p-2 rounded-md text-white font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default CtaButton;
