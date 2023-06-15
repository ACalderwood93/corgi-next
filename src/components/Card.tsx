import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <div className={"bg-white shadow-md " + className}>{children}</div>;
};

export default Card;
