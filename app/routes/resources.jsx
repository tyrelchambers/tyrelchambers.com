import Footer from "~/layouts/Footer";
import Header from "~/layouts/Header";
import React from "react";
import SectionHero from "~/layouts/SectionHero";
import { resources as resourceList } from "~/constants/resources";
import { useUpdateQueryStringValueWithoutNavigation } from "~/utils/misc";

import { getImage } from "../images.server.js";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import Main from "../layouts/Main.jsx";
import Section from "../layouts/Section.jsx";
import Gap from "../components/Gap";

export const meta = () => {
  return {
    "og:image":
      "https://images.unsplash.com/photo-1499744349893-0c6de53516e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    "og:url": `https://tyrelchambers.com/resources`,
    "twitter:card": "summary_large_image",
    "twitter:title": "Wonderfully curated resources",
    "twitter:description": "A helpful list of resources to get you started",
    "twitter:image":
      "https://images.unsplash.com/photo-1499744349893-0c6de53516e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    "twitter:site": "@imtyrelchambers",
    "twitter:creator": "@imtyrelchambers",
    "og:site_name": "Tyrel Chambers",
    "og:locale": "en_US",
    "og:type": "article",
    "og:title": "Wonderfully curated resources",
    "og:description": "A helpful list of resources to get you started",
  };
};

export const loader = async () => {
  const data = resourceList;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    for (let j = 0; j < element.children.length; j++) {
      const child = element.children[j];
      if (child.img) {
        child.imageURL = await getImage(child.img);
      }

      element.children[j] = child;
    }
  }

  return data;
};

const resources = () => {
  const data = useLoaderData();
  let [searchParams] = useSearchParams();

  const filteredList = data
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .map((item) => item.title);

  const [queryValue, setQuery] = React.useState(() => {
    return searchParams.get("q") ?? "";
  });

  useUpdateQueryStringValueWithoutNavigation("q", queryValue);

  return (
    <div>
      <Header />
      <Main>
        <Section>
          <h1 className=" text-6xl font-bold leading-normal text-gray-700">
            A curated list of resources
          </h1>
          <p className=" text-xl text-gray-700">
            These lists consist of my favourite bookmarks, services and other
            helpful stuff
          </p>

          <p className="mt-8 text-gray-400">
            If there are any resources that you love and would like to see in
            this list. I'd love it if you'd open an issue or submit a PR over on
            the{" "}
            <a
              href="https://github.com/tyrelchambers/tyrelchambers.com"
              className="text-blue-300 underline"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Github repo.
            </a>
          </p>
        </Section>

        <div className="mt-16 mb-16 flex flex-wrap items-center gap-6">
          {filteredList.map((item) => (
            <button
              className={`whitespace-nowrap rounded-full  py-2 px-4  transition-all  hover:text-gray-800 ${
                queryValue === item
                  ? "bg-yellow-300 text-gray-800"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() =>
                queryValue === item ? setQuery("") : setQuery(item)
              }
              key={item}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-20">
          {data
            .filter((item) => (queryValue ? item.title === queryValue : item))
            .map((resource) => (
              <Section
                headerPaddingBottom="mb-4"
                title={resource.title}
                key={resource.title}
              >
                <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
                  {resource.children.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      target="_blank"
                      className="flex flex-col items-center gap-6 rounded-2xl border-2 border-gray-200 p-6 transition-all hover:border-indigo-500 mobile:flex-row tablet:items-start"
                    >
                      {item.imageURL && (
                        <img
                          src={`data:image/webp;base64, ${item.imageURL}`}
                          alt=""
                          className="aspect-[4/6] w-32  rounded-lg object-cover"
                        />
                      )}
                      <div className="flex flex-col">
                        <h3 className="text-center text-2xl font-bold text-gray-800 mobile:text-left">
                          {item.title}
                        </h3>
                        {item.author && (
                          <p className="mt-4 text-center text-gray-400 mobile:text-left">
                            {item.author}
                          </p>
                        )}
                        {item.description && (
                          <p className="mt-4 text-center text-gray-400 mobile:text-left">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </Section>
            ))}
        </div>
      </Main>
      <Gap />
      <Footer />
    </div>
  );
};

export default resources;
