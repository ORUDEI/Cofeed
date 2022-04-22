import { useEffect, useState } from "react";


const FollowButton = () => {
  const [isFollow, setIsFollow] = useState(false);
  const [name, setName] = useState("");


  useEffect(() => {
    if(isFollow) {
      setName("Followed")
    } else {
      setName("Follow")
    }
  }, [isFollow])
  
  const handleClick = () => { 
    setIsFollow(!isFollow)
  }

  return (
    <>
      <button
        className={
          isFollow
            ? "bg-slate-100 hover:bg-slate-300 text-gray-500 py-2 w-full rounded-xl text-sm border-gray-300 border-2"
            : "bg-purple-400 hover:bg-purple-500 text-white py-2 w-full rounded-xl text-sm"
            
        }
        onClick={() => handleClick()}
      >
        {name}
      </button>
    </>
  );
};

export default FollowButton;
