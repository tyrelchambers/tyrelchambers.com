import React from "react";
import { Link, useLoaderData } from "remix";
import Gap from "~/components/Gap";
import * as resourcesList from "~/constants/resources";
import { getImage } from "~/imgLoader";
import Header from "~/layouts/Header";

export const loader = async () => {
  const data = resourcesList;

  data.books.map(async (book) => {
    const image = await getImage(book.img);
    const base64Str = image.toString("base64");
    book.imgUrl = base64Str;
    return book;
  });

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
      <main className="max-w-screen-2xl ml-auto mr-auto mt-10">
        <div className="w-full max-w-3xl">
          <h1 className="h1">A curated list of resources</h1>
          <p className="subtitle">
            These lists consist of my favourite bookmarks, services and other
            helpful stuff
          </p>

          <p className="text-gray-400 mt-8">
            If there are any resources that you love and would like to see in
            this list. I'd love it if you'd open an issue or submit a PR over on
            the{" "}
            <a
              href="https://github.com/tyrelchambers/tyrelchambers.com"
              className="underline text-blue-300"
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
            <div className="grid grid-cols-3 mt-8 gap-10">
              {photography.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Tutorials</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {tutorials.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Code resources</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {codeResources.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Source control</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {sourceControl.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Cheet sheets</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {cheatSheets.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Colour pickers</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {colourPickers.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Articles</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {articles.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">VPS</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {servers.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Communication</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {communication.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Design software</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {designSoftware.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Project management</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {projectManagement.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all"
                >
                  <h3 className="h3">{item.title}</h3>
                  <p className="text-gray-400 text-xl mt-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h2 coloured">Books</h2>
            <div className="grid grid-cols-3 mt-8 gap-10">
              {books.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="border-2 border-gray-700 rounded-lg p-6 hover:border-yellow-300 transition-all flex gap-6"
                >
                  <img
                    src={`data:image/${item.img.match(/\.[\S]+/g)};base64,${
                      item.imgUrl
                    }`}
                    alt=""
                    className="w-32 object-cover  rounded-lg aspect-[4/6]"
                  />
                  <div className="flex flex-col">
                    <h3 className="h3">{item.title}</h3>
                    <p className="text-gray-400 text-xl mt-4">{item.author}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default resources;
