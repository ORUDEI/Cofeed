import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction, getProfileAction } from "./redux/actions/dataAction";

import {
  HomeFilled,
  MessageFilled,
  MehFilled,
  UpCircleFilled,
  SettingFilled,
  BellFilled,
  CloudFilled,
} from "@ant-design/icons";

import cofeedSmall from "./img/cofeedSmall.png";
import cofeed from "./img/cofeed.png";
import guy1 from "./img/guy1.jpg";
import guy2 from "./img/guy2.jpg";
import guy3 from "./img/guy3.jpg";
import guy4 from "./img/guy4.jpg";

import background4 from "./img/background4.png";
import cofeedFreeApp from "./img/cofeedFreeApp.png";

import MenuOptions from "./components/MenuOptions";
import ProfileImage from "./components/ProfileImage";
import Title from "./components/Title";
import Image from "./components/Image";
import HistoriesImage from "./components/HistoriesImage";
import FeedImage from "./components/FeedImage";
import FollowButton from "./components/FollowButton";
import Like from "./components/Like";
import Message from "./components/Message";
import Save from "./components/Save";
import Link from "./components/Link";
import { FeedLinks } from "./components/FeedLinks";

import { idGenerator } from "../src/helpers";

interface RootState {
  data: {
    data: [];
    error: null;
    loading: boolean;
    profile: [];
  };
}

interface dataInterface {
  background: string;
  name: string;
  likes: number;
  messages: number;
  image: string;
}

interface profileData {
  name: string;
  image: string;
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = () => dispatch(getDataAction() as any);
    const loadProfileData = () => dispatch(getProfileAction() as any);
    loadData();
    loadProfileData();
  }, []);

  const data = useSelector((state: RootState) => state.data.data);
  const profileData = useSelector((state: RootState) => state.data.profile);

  return (
    <div className="md:flex sm:min-h-screen min-w-full">
      <div className="w-full bg-white px-5 py-5 md:w-1/4 drop-shadow-lg">
        <div className=" flex justify-center md:items-center w-full m-5">
          <div className=" w-20 h-20 md:flex md:items-center">
            <img
              src={cofeedSmall}
              className="rounded-full object-cover w-20 h-20 md:w-10 md:h-10 drop-shadow-xl"
            />
          </div>
          <div className="hidden md:block">
            <img src={cofeed} className="md:w-28" />
          </div>
        </div>
        <div className="md:px-3 hidden md:block">
          <Title title="Menu" />
        </div>
        <nav className="md:mt-5 flex flex-wrap justify-center md:flex-col">
          <MenuOptions
            title="Home"
            isActive={true}
            icon={<HomeFilled className="text-purple-500" />}
          />
          <MenuOptions
            title="Messages"
            isActive={false}
            icon={<MessageFilled className="text-purple-500" />}
          />
          <MenuOptions
            title="Profile"
            isActive={false}
            icon={<MehFilled className="text-purple-500" />}
          />
          <MenuOptions
            title="Saved Post"
            isActive={false}
            icon={<UpCircleFilled className="text-purple-500" />}
          />
          <MenuOptions
            title="Settings"
            isActive={false}
            icon={<SettingFilled className="text-purple-500" />}
          />
        </nav>
        <div className="flex flex-row md:flex-col md:items-start justify-center items-center">
          <div className="px-3 mt-5 hidden md:block">
            <Title title="Account" />
          </div>
          <div className="flex space-x-2 mt-5 items-center px-3">
            <ProfileImage
              name="Michael"
              socialNetwork="@michaelsco_"
              image={guy1}
            />
          </div>
        </div>
        <div className="mt-10 m-3 md:w-4/4 hover:animate-pulse hidden md:block">
          <Image image={cofeedFreeApp} size="h-64 w-30" />
        </div>
      </div>

      <div className="flex flex-col w-full bg-slate-100 ">
        <div className="p-10 flex flex-row overflow-auto">
          {profileData.length === 0
            ? "No Data"
            : profileData.map((data: profileData) => (
                <div key={idGenerator()}>
                  <HistoriesImage image={data.image} name={data.name} />
                </div>
              ))}
        </div>
        <div className="p-8 flex flex-row justify-between">
          <div>
            <Title title="Feeds" />
          </div>
          <div className="flex space-x-4">
            <FeedLinks name="All" />
            <FeedLinks name="Following" />
            <FeedLinks name="Newest" />
            <FeedLinks
              name="Popular"
              colour="text-purple-400 hover:text-purple-500"
            />
          </div>
        </div>
        <div className="flex md:flex-wrap md:place-content-around overflow-auto md:p-7">
          {data.length === 0
            ? "No Data"
            : data.map((data: dataInterface) => (
                <div className="m-8 md:m-0 md:mb-4" key={idGenerator()}>
                  <Image image={data.background} />
                  <FeedImage
                    image={data.image}
                    name={data.name}
                    likes={data.likes}
                    message={data.messages}
                  />
                </div>
              ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4 bg-slate-100 md:divide-x divide-slate-300">
        <div className="mt-8 flex flex-row justify-center md:justify-start">
          <div className="w-2/4">
            <input
              className="appearance-none border-2 rounded-full h-12 w-full py-2 px-3 border-slate-200 hover:border-slate-300 bg-slate-100 text-slate-400  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </div>
          <a
            href="#"
            className="rounded-full border-2 border-slate-200 hover:border-slate-300 mx-5 w-12 h-12 flex justify-center "
          >
            <BellFilled className="text-gray-300 hover:text-gray-400 text-2xl" />
          </a>
          <a
            href="#"
            className="bg-blue-300 hover:bg-blue-400 rounded-full w-12 h-12 flex justify-center"
          >
            <CloudFilled className="text-white text-2xl" />
          </a>
        </div>

        <div className="mt-8 flex flex-row pl-3">
          <Title title="Suggestions For You" />
        </div>
        <div className="w-11/12">
          <div className="flex flex-row space-x-2 mt-5 px-3">
            <div className="w-3/4 flex">
              <ProfileImage
                name="Alfred"
                socialNetwork="@alfred_00"
                image={guy2}
              />
            </div>
            <div className="w-1/4">
              <FollowButton />
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-5 px-3">
            <div className="w-3/4 flex">
              <ProfileImage name="Rene" socialNetwork="@rene99" image={guy3} />
            </div>
            <div className="w-1/4">
              <FollowButton />
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-5 px-3">
            <div className="w-3/4 flex">
              <ProfileImage
                name="Nicolás"
                socialNetwork="@nicola_56"
                image={guy4}
              />
            </div>
            <div className="w-1/4">
              <FollowButton />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8 my-8 flex flex-row px-3">
            <Title title="Latest Post Activity" />
          </div>
          <div className="pl-3">
            <div className="bg-slate-50 w-11/12 h-64 rounded-xl border-2 border-white drop-shadow-xl">
              <div className="flex flex-row h-3/4 ">
                <div className="w-1/2 h-full flex justify-center items-center ">
                  <div className="w-3/4 h-1/2 rounded-xl">
                    <Image image={background4} size="h-full w-full" />
                  </div>
                </div>
                <div className="w-2/4 flex flex-col items-left justify-center">
                  <div className="flex w-1/4 ">
                    <Title title="Minimalist Stairs" />
                  </div>
                  <div className="flex flex-row space-x-2 ">
                    <Like size="text-md" />
                    <Message size="text-md" />
                    <Save size="text-md" />
                  </div>
                </div>
              </div>
              <div className="flex  justify-center">
                <Link
                  name="See All Posts"
                  colour="text-purple-400 hover:text-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" h-10 flex space-x-6 items-end mr-8 pl-3 md:h-72 pt-18">
          <Link name="About" />
          <Link name="Help" />
          <Link name="Terms" />
          <Link name="Popular" />
          <Link name="Language" />
        </div>
      </div>
    </div>
  );
};

export default App;
