import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import { FaEye, FaRegHeart, FaRegStar } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { TbDiamondFilled } from "react-icons/tb";

const Profile = () => {
  const [data, setData] = useState(null);

  // Function to fetch user data
  const fetchData = async () => {
    try {
      const response = await fetch("userData.json");
      const data = await response.json();
      setData(data.user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Background Image */}
      <div className="h-[30vh] xl:h-[40vh] xl:w-[80vw] mx-auto ">
        <div
          className="h-full w-full bg-no-repeat opacity-90 bg-fixed bg-cover"
          style={{
            backgroundImage: `url(${data?.background_url})`,
            backgroundPosition: "center 64px",
            backgroundSize: "100% 45%",
            // backgroundSize: "contain",
          }}
        ></div>
      </div>

      {/* User Info Section */}
      <div className="flex justify-center ">
        <div className="shadow-2xl lg:mb-6 lg:w-[75vw] rounded-xl">
          <div className="flex justify-center gap-4 pr-6 relative -top-8">
            <div className="rounded-full border-2 border-[#808080] h-36 w-36 shadow-2xl">
              <img
                src={data?.user_image}
                className="object-cover rounded-full h-full w-full"
                alt="User"
              />
            </div>

            <div className="relative top-10">
              <div className="flex items-center gap-2">
                <div className="py-3 text-2xl font-bold capitalize">
                  {data?.fullName}
                </div>

                <div className="flex items-center">
                  <TbDiamondFilled className="text-purple-500 text-xl" />
                  <MdVerified className="text-green-500 text-lg" />
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <div>
                  <div className="border-2 border-[#808080] text-center rounded-lg font-semibold text-lg text-[#808080] w-20 shadow-md">
                    {data?.followers}
                  </div>
                  <div className="text-sm text-center capitalize py-2  text-[#808080]">
                    followers
                  </div>
                </div>

                <div>
                  <div className="border-2 border-[#808080] text-center rounded-md font-semibold text-lg text-[#808080] w-20 shadow-md">
                    {data?.following}
                  </div>
                  <div className="text-sm text-center capitalize py-2  text-[#808080]">
                    following
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio and Stats Section */}
          <div className="pl-10 mt-1 pb-6 sm:text-xl  text-[#808080]">
            <div>{data?.bio}</div>
            <a
              href={data?.insta_link}
              target="_blank"
              className="text-[#64c5d9] py-1"
            >
              {data?.insta_link}
            </a>

            {/* User Stats Section */}
            <div className="flex gap-3 items-center py-2">
              <div className="rounded-full bg-blue-300 p-1 text-white">
                <FaRegStar />
              </div>
              <div className="text-sm sm:text-md">{data?.stats.stars}</div>

              <div className="rounded-full bg-yellow-400 p-1 text-white">
                <LuThumbsUp />
              </div>
              <div className="text-sm sm:text-md">{data?.stats.likes}</div>

              <div className="rounded-full bg-gray-400 p-1 text-white">
                <FaEye />
              </div>
              <div className="text-sm sm:text-md">{data?.stats.views}</div>

              <div className="rounded-full bg-red-500 p-1 text-white">
                <FaRegHeart />
              </div>
              <div className="text-sm sm:text-md">{data?.stats.hearts}</div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="flex py-4">
            <div
              className="font-bold text-center border-t-2 border-r-2 rounded-tr-lg w-36 pt-2 px-1 text-[#489ddd] text-lg cursor-pointer
           "
            >
              {data?.posts.length} Posts
            </div>
            <div className="w-full border-b-2 border-l-2 rounded-bl-lg relative -bottom-2 -left-0.5"></div>
          </div>
          <div className=" px-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
