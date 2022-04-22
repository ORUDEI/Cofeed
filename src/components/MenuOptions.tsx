import { HomeFilled } from "@ant-design/icons";

interface Props {
    title: string;
    isActive: boolean;
    icon: any;
}

const MenuOptions = ({title, isActive, icon}:Props) => {
  return (
    <div className="flex flex-row items-center m-3">
        {icon}
        <a href="#" className={isActive ? "ml-3 font-bold text-blue-900 hover:text-gray-900" : "ml-3 font-bold text-gray-400 hover:text-gray-500 "}>{title}</a>
    </div>
  )
}


export default MenuOptions;
