import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1300px] mx-auto py-0 px-5 md:px-10">{children}</div>
  );
};

export default Container;
