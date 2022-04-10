import { Link, useLoaderData, useSearchParams } from "remix";

import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import React from "react";
import SectionHero from "~/layouts/SectionHero";
import { getImage } from "~/utils/getImage";
import { resources as resourceList } from "~/constants/resources";
import { useUpdateQueryStringValueWithoutNavigation } from "~/utils/misc";

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
      <main className="ml-auto mr-auto mt-10 max-w-screen-2xl p-4">
        <SectionHero
          maxWidth="max-w-screen-3xl"
          leftCol={
            <>
              <h1 className="h1">A curated list of resources</h1>
              <p className="subtitle">
                These lists consist of my favourite bookmarks, services and
                other helpful stuff
              </p>

              <p className="mt-8 text-gray-400">
                If there are any resources that you love and would like to see
                in this list. I'd love it if you'd open an issue or submit a PR
                over on the{" "}
                <a
                  href="https://github.com/tyrelchambers/tyrelchambers.com"
                  className="text-blue-300 underline"
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  Github repo.
                </a>
              </p>
            </>
          }
        />

        <div className="mt-16 mb-16 flex flex-wrap items-center gap-6">
          {filteredList.map((item) => (
            <button
              className={`whitespace-nowrap rounded-full  py-2 px-4  transition-all  hover:text-white ${
                queryValue === item
                  ? "bg-yellow-300 text-gray-800 hover:bg-red-300"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
              <section key={resource.title}>
                <h2 className="h2 coloured">{resource.title}</h2>
                <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
                  {resource.children.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      target="_blank"
                      className="flex flex-col items-center gap-6 rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300 mobile:flex-row tablet:items-start"
                    >
                      {item.imageURL && (
                        <img
                          src={item.imageURL}
                          alt=""
                          className="aspect-[4/6] w-32  rounded-lg object-cover"
                        />
                      )}
                      <div className="flex flex-col">
                        <h3 className="h3 text-center mobile:text-left">
                          {item.title}
                        </h3>
                        {item.author && (
                          <p className="mt-4 text-center text-xl text-gray-400 mobile:text-left">
                            {item.author}
                          </p>
                        )}
                        {item.description && (
                          <p className="mt-4 text-center text-xl text-gray-400 mobile:text-left">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default resources;
