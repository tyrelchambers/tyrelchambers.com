import React from "react";
import me from "../../public/images/me.jpeg";
import SocialList from "./SocialList";

const AuthorCard = () => {
  return (
    <div className="w-full border-2 border-zinc-800 rounded-3xl  p-10">
      <div className="flex gap-20">
        <img
          src={me}
          alt=""
          className="w-full max-w-[200px] object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col">
          <h3 className="h3">Tyrel Chambers</h3>
          <p className="text-gray-400 text-xl mt-4 mb-10">
            I'm a software engineer and indie developer living in Ontario,
            Canada. I love day-dreaming new ideas and using my free time to
            bring them to life.
          </p>
          <SocialList />
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
