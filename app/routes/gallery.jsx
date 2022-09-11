import React, { useState } from "react";
import { useLoaderData } from "remix";
import { getGalleryPhotos } from "../images.server";
import Header from "../layouts/Header";
import Section from "../layouts/Section";

export const loader = async () => {
  const photos = await getGalleryPhotos();

  return photos;
};

export default function gallery() {
  const photos = useLoaderData();
  const [filter, setFilter] = useState(false);

  return (
    <div>
      <Header />

      <main className="ml-auto mr-auto w-full max-w-screen-2xl">
        <Section className="max-w-3xl gap-6">
          <h1 className="text-6xl font-bold leading-normal text-gray-700 ">
            Welcome to the Gallery
          </h1>
          <p className="text-xl leading-relaxed text-gray-500">
            This gallery serves as a showcase for some of the photo that I've
            taken.
          </p>
          <p className="text-xl leading-relaxed text-gray-500">
            I've always wanted to see a print, so if there is a photo that
            catches your eye, let me know!{" "}
            <span className="font-bold">tychambers3@gmail.com</span>
          </p>
          <div className="flex">
            <div className="flex items-center gap-4 rounded-full bg-green-50 py-2 px-6">
              <i className="fa-solid fa-camera-retro text-green-700"></i>
              <p className="text-green-700">Printable</p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mb-4 flex w-full justify-end">
            <button
              type="button"
              className={`rounded-full bg-gray-100 py-2 px-4  ${
                filter ? "bg-green-600 text-white" : "text-gray-600"
              }`}
              onClick={() => setFilter(!filter)}
            >
              Filter by <i className={`fa-solid fa-camera-retro ml-2 `}></i>
            </button>
          </div>
          <div className="mb-20 grid grid-cols-4 gap-6">
            {photos
              .filter((p) => (filter ? p.printable : p))
              .map((p, i) => (
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={`data:image/webp;base64, ${p.image}`}
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute top-3 right-3 flex gap-2">
                    {p.printable && (
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                        <i className="fa-solid fa-camera-retro text-green-700"></i>
                      </span>
                    )}
                    <caption className=" flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-gray-600 shadow-md">
                      {i + 1}
                    </caption>
                  </div>
                </div>
              ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
