import type { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  text: string;
}

const Cards = ({ title, text, icon }: Props) => {
  return (
    <div className="flex flex-col items-center  md:border-r border-honey pb-5 md:pr-5 text-center">
      <div className="icon pb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
};

export default Cards;
