import Like from "./Like";
import Message from "./Message";


interface Props {
  image: string;
  name: string;
  likes: number;
  message: number;
}



const HistoriesImage = ({ image, name, likes, message }: Props) => {



  return (
    <div className="flex place-content-evenly mt-5 items-center ">
      <div className="flex flex-row items-center">
        <div className=" relative w-8 h-8 border-white">
          <img
            src={image}
            alt="image"
            className="rounded-full border-2 border-gray-100 shadow-sm h-8 w-8 object-cover"
          />
        </div>
        <div className="w-max">
          <a href="#" className="font-bold text-blue-900 mx-3">
            {name}
          </a>
        </div>
      </div>
      <div className="flex flex-row ml-5 items-center">
        <div className="ml-5 items-center">
          <Like ammount={likes}/>
        </div>
        <div className="ml-5 items-center">
          <Message ammount={message}/>
        </div>
      </div>
    </div>
  );
};

export default HistoriesImage;
