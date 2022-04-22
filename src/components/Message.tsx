import { MessageFilled } from "@ant-design/icons";

interface Props {
  size?: string;
  ammount?: number;
}

const Like = ({size="text-2xl", ammount = 0}:Props) => {
  return (
    <div className="flex items-baseline">
      <MessageFilled className={`text-gray-400 mr-2 ${size} hover:text-gray-500`} onClick={() => {}} />
      <h2 className="font-bold text-gray-400">{ammount}</h2>
    </div>
  );
};

export default Like;
