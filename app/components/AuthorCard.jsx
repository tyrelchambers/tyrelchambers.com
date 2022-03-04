import React from "react";
import SocialList from "./SocialList";

const AuthorCard = () => {
  return (
    <div className="w-full rounded-3xl border-2 border-zinc-800  p-10">
      <div className="flex gap-20">
        <img
          src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/me.webp"
          alt=""
          className="w-full max-w-[200px] rounded-lg object-cover shadow-lg"
        />
        <div className="flex flex-col">
          <h3 className="h3">Tyrel Chambers</h3>
          <p className="mt-4 mb-10 text-xl text-gray-400">
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
