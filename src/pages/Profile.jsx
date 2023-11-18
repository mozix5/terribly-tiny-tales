import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Posts from "../components/Posts";
import { FaEye, FaRegHeart, FaRegStar } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { TbDiamondFilled } from "react-icons/tb";

const Profile = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("userData.json"); // Adjust the path accordingly
      const data = await response.json();
      setData(data.user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="h-[33vh] w-full bg-no-repeat opacity-80 bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${data?.background_url})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex justify-center gap-4 pr-6 relative -top-6">
        <div className="rounded-full border-2 border-black h-32 w-32 ">
          <img
            src={data?.user_image}
            className="object-cover rounded-full h-full w-full"
            alt="User"
          />
        </div>

        <div className="relative top-6">
          <div className="flex items-center gap-2">
            <div className="py-3 text-xl font-bold capitalize">
              {data?.fullName}
            </div>

            <div className="flex items-center">
              <TbDiamondFilled className="text-purple-500 text-xl" />
              <MdVerified className="text-green-500 text-lg" />
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <div>
              <div className="border-2 border-slate-400 text-center rounded-md font-bold text-lg text-slate-400 w-20">
                {data?.followers}
              </div>
              <div className="text-sm text-center">followers</div>
            </div>

            <div>
              <div className="border-2 border-slate-400 text-center rounded-md font-bold text-lg text-slate-400 w-20">
                {data?.following}
              </div>
              <div className="text-sm text-center">following</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-10 mt-4 py-2">
        <div>{data?.bio}</div>

        <a
          href={data?.insta_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 py-1"
        >
          {data?.insta_link}
        </a>

        <div className="flex gap-3 items-center py-2">
          <div className="rounded-full bg-blue-300 p-1 text-white">
            <FaRegStar />
          </div>
          <div className="text-sm">{data?.stats.stars}</div>

          <div className="rounded-full bg-yellow-400 p-1 text-white">
            <LuThumbsUp />
          </div>
          <div className="text-sm">{data?.stats.likes}</div>

          <div className="rounded-full bg-gray-400 p-1 text-white">
            <FaEye />
          </div>
          <div className="text-sm">{data?.stats.views}</div>

          <div className="rounded-full bg-red-500 p-1 text-white">
            <FaRegHeart />
          </div>
          <div className="text-sm">{data?.stats.hearts}</div>
        </div>
      </div>

      <div className="pt-4">
        <Tabs variant="enclosed-colored" colorScheme="yellow">
          <TabList>
            <Tab fontWeight="bold" color="#2b8dd8" paddingX="20px">
              {data?.posts.length} Posts
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {data?.posts.map((item, index) => (
                <Posts
                  key={index}
                  userName={data?.username}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  createdAt={item.createdAt}
                  readAt={item.readAt}
                  views={item.postViews}
                />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
