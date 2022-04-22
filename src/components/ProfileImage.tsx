import guy1 from "../img/guy1.jpg";

interface Props {
    name: string;
    socialNetwork: string;
    image: string;
}

const ProfileImage = ({name, socialNetwork, image}:Props) => {
  return (
    <>
      <div className="relative w-8 h-8">
        <img
          src={image}
          alt="image"
          className="rounded-full border border-gray-100 shadow-sm h-8 w-8 object-cover"
        />
      </div>
      <div className="flex flex-col px-3">
        <a href="#" className="font-bold text-blue-900">{name}</a>
        <h3 className="font-normal text-xs text-gray-400">{socialNetwork}</h3>
      </div>
    </>
  );
};

export default ProfileImage;
