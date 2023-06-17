import { ReactNode } from "react";

const BackgroundImageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-cover bg-no-repeat 
    bg-[url('https://d33wubrfki0l68.cloudfront.net/3d5448b4a37819916359b2cd218ec1b3fdae6d4b/44972/static/protect_your_home-e9fe5f637189b186fb3a40bde7e25ef0.png')] flex justify-center pt-6 w-screen ${className}`}
    >
      {children}
    </div>
  );
};

export default BackgroundImageContainer;
