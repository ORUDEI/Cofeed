import { UpCircleFilled } from "@ant-design/icons";
import { useState } from "react";

interface Props {
  size: string;
}

const Like = ({ size = "text-2xl" }: Props) => {
  const [save, setSave] = useState(false);

  const handleClick = () => {
    setSave(!save);
  };

  return (
    <div className="flex items-baseline">
      <UpCircleFilled
        className={
          save
            ? `text-yellow-400 hover:text-yellow-500 mr-2 ${size}`
            : `text-gray-400 hover:text-gray-500 mr-2 ${size}`
        }
        onClick={() => handleClick()}
      />
      <h2 className={save ? `text-yellow-400  font-bold` : `text-gray-400 `}>
        7
      </h2>
    </div>
  );
};

export default Like;
