import { useState } from "react";

interface Props {
  image: string;
  name: string;
}

const HistoriesImage = ({ image, name }: Props) => {
  const [saw, setSaw] = useState(false);

  const handleClick = () => {
    setSaw(!saw);
  };

  return (
    <div className="w-20 h-20 flex items-center justify-center rounded-full ml-4">
      <a
        href="#"
        className="relative w-16 h-16 border-white"
        onClick={() => {
          handleClick();
        }}
      >
        <img
          src={image}
          alt="image"
          className={
            saw
              ? "rounded-full shadow-sm h-16 w-16 object-cover ring-2 ring-blue-200 ring-offset-4 ring-offset-white hover:opacity-80"
              : "rounded-full shadow-sm h-16 w-16 object-cover ring-2 ring-purple-400 ring-offset-4 ring-offset-white hover:opacity-80"
          }
        />
        <h2 className="font-bold text-blue-900 text-center mt-5">{name}</h2>
      </a>
    </div>
  );
};

export default HistoriesImage;
