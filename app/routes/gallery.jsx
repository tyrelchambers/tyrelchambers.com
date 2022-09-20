import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "remix";
import Header from "../layouts/Header";
import Section from "../layouts/Section";
import { motion } from "framer-motion";
import { CloudinaryContext } from "cloudinary-react";
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";
import { cld } from "../utils/cloudinary";

export const loader = async () => {
  const cloudinary = require("cloudinary");
  cloudinary.v2.config({
    cloud_name: process.env.CLD_CLOUD_NAME, // add your cloud_name
    api_key: process.env.CLD_KEY, // add your api_key
    api_secret: process.env.CLD_SECRET, // add your api_secret
  });

  const photos = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: "gallery",
    max_results: 100,
  });
  return photos.resources;
};

export default function gallery() {
  const photos = useLoaderData();
  const [selectedPicture, setSelectedPicture] = useState("");

  useEffect(() => {
    if (document) {
      document.addEventListener("keydown", keyHandler);
    }
  }, []);

  const keyHandler = (e) => {
    if (e.code === "Escape") {
      setSelectedPicture("");
    }
  };

  return (
    <div>
      <Header />
      <AnimatePresence initial={false}>
        {selectedPicture !== "" && (
          <motion.div
            className="fixed top-0 z-20 flex h-screen w-screen items-center bg-gray-900 bg-opacity-80 p-10 blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute top-6 right-4"
              onClick={() => setSelectedPicture("")}
            >
              <i class="fa-sharp fa-solid fa-circle-xmark text-3xl text-white"></i>
            </motion.div>
            <AdvancedImage
              plugins={[
                responsive({ steps: "200" }),
                lazyload(),
                placeholder({ mode: "predominant-color" }),
              ]}
              cldImg={cld.image(selectedPicture)}
              className="ml-auto mr-auto h-screen overflow-hidden rounded-xl object-cover py-10 hover:shadow-lg"
            ></AdvancedImage>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="ml-auto mr-auto w-full max-w-screen-2xl">
        <Section className="max-w-3xl gap-4">
          <h1 className="text-3xl font-bold leading-normal text-gray-700 tablet:text-6xl ">
            Welcome to the Gallery
          </h1>
          <p className="text-xl leading-relaxed text-gray-500">
            This gallery serves as a showcase for some of the photo that I've
            taken.
          </p>
          <p className="text-xl leading-relaxed text-gray-500">
            I've always wanted to sell a print, so if there is a photo that
            catches your eye, let me know!{" "}
            <span className="font-bold">tychambers3@gmail.com</span>
          </p>
        </Section>

        <Section>
          <CloudinaryContext
            cloud_name="dslcticcq"
            className="mb-20 grid grid-cols-1 gap-6 tablet:grid-cols-3 "
          >
            {photos.map((p, i) => (
              <div key={i} onClick={() => setSelectedPicture(p.public_id)}>
                <AdvancedImage
                  plugins={[
                    lazyload(),
                    responsive({ steps: 200 }),
                    placeholder({ mode: "predominant-color" }),
                  ]}
                  cldImg={cld.image(p.public_id)}
                  className="h-[500px] w-full overflow-hidden rounded-xl object-cover hover:shadow-lg"
                ></AdvancedImage>
              </div>
            ))}
          </CloudinaryContext>
        </Section>
      </main>
    </div>
  );
}
