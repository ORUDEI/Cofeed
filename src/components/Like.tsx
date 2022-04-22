import { HeartFilled } from "@ant-design/icons";
import { useState } from "react";


interface Props {
  size?: string;
  ammount?: number;
}

const Like = ({ size = "text-2xl", ammount = 0}: Props) => {


  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);

  };

  return (
    <div className="flex items-baseline">
      <HeartFilled
        className={
          like
            ? `text-red-500 hover:text-red-600 mr-2 ${size}`
            : `text-gray-400  hover:text-gray-500 mr-2 ${size}`
        }
        onClick={() => handleClick()}
      />
      <h2
        className={
          like
            ? `text-red-500 hover:text-red-600 font-bold`
            : `text-gray-400 hover:text-gray-500 font-bold`
        }
      >
        {ammount}
      </h2>
    </div>
  );
};

export default Like;
