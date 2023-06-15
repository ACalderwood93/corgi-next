import { ReactNode } from "react";

const Cta = ({
  children,
  ...rest
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <button className="primary-button" {...rest}>
      {children}
    </button>
  );
};

export default Cta;
