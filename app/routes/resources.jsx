import * as resourcesList from "~/constants/resources";

import { Link, useLoaderData } from "remix";

import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import React from "react";
import { getImage } from "~/utils/getImage";

export const loader = async () => {
  const data = resourcesList;

  for (let index = 0; index < data.books.length; index++) {
    const element = data.books[index];
    element.imageURL = await getImage(element.img);
  }

  return data;
};

const resources = () => {
  const {
    photography,
    tutorials,
    codeResources,
    sourceControl,
    cheatSheets,
    colourPickers,
    articles,
    servers,
    communication,
    designSoftware,
    projectManagement,
    books,
  } = useLoaderData();

  return (
    <div>
      <Header />
      <main className="ml-auto mr-auto mt-10 max-w-screen-2xl p-4">
        <div className="w-full max-w-3xl">
          <h1 className="h1">A curated list of resources</h1>
          <p className="subtitle">
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
        </div>

        <Gap />
        <div className="flex flex-col gap-20">
          <section>
            <h2 className="h2 coloured">Photography</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {photography.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Tutorials</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {tutorials.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Code resources</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {codeResources.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Source control</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {sourceControl.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Cheet sheets</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {cheatSheets.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Colour pickers</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {colourPickers.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Articles</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {articles.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">VPS</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {servers.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Communication</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {communication.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Design software</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {designSoftware.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Project management</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {projectManagement.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Books</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {books.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="flex flex-col items-center gap-6 rounded-lg border-2 border-gray-700 p-6 transition-all hover:border-yellow-300 mobile:flex-row tablet:items-start"
                >
                  <img
                    src={item.imageURL}
                    alt=""
                    className="aspect-[4/6] w-32  rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="h3 text-center mobile:text-left">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-center text-xl text-gray-400 mobile:text-left">
                      {item.author}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default resources;
