import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`mx-auto w-full justify-center${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

