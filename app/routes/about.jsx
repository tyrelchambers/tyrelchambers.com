import React from "react";
import Gap from "~/components/Gap";
import SocialList from "~/components/SocialList";
import Header from "~/layouts/Header";
import img1 from "../../public/images/890717F1-8B22-4767-89CF-897A7B0209EF_1_105_c.jpeg";
import img2 from "../../public/images/821F0F1E-A38C-4939-A04C-EEB7DA2109FB_1_105_c.jpeg";
import img3 from "../../public/images/81EEA478-6EC4-4817-B9FA-47D0B5638095_1_105_c.jpeg";
import img4 from "../../public/images/1FBEB87D-AFA9-4D12-AAEE-94027686A3EA_1_105_c.jpeg";

import Footer from "~/layouts/Footer";
import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import PostItem from "~/components/PostItem";

export const loader = async () => {
  const posts = await getPosts();
  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return suggestions;
};

const about = () => {
  const suggestions = useLoaderData();
  return (
    <div>
      <Header />

      <main className="w-full max-w-screen-xl ml-auto mr-auto mt-20">
        <section className="flex gap-20">
          <div className="flex flex-col max-w-screen-sm">
            <h1 className="h1">Hey, I'm Tyrel Chambers 👋</h1>
            <p className="text-xl text-blue-300 mt-4">
              Software Engineer &amp; DevRel @ This Dot Labs
            </p>
            <p className="subtitle">
              I'm a full-stack developer living in Ontario, Canada. I'm a
              self-taught indie developer and I love day-dreaming new ideas and
              using my free time to bring them to life.
            </p>

            <SocialList className="mt-10" />
          </div>
          <img
            src={img1}
            alt=""
            className="w-full max-w-[450px] object-cover rounded-lg "
          />
        </section>

        <Gap />

        <figure>
          <img
            src={img2}
            alt=""
            className="w-full h-[800px] object-cover rounded-lg"
          />
          <figcaption className="text-gray-400 text-center mt-4 max-w-xl ml-auto mr-auto">
            My cousin on the tallest cliffs in Ontario in Thunder Bay, Ontario.
            It was a 28km round trip hike that took us all day to complete.
          </figcaption>
        </figure>
        <Gap />
        <section>
          <div className="flex gap-20">
            <iframe
              width="600"
              height="700"
              src="https://youtube.com/embed/uJiLFua0cww"
              className="w-full h-[800px] object-cover rounded-lg"
            ></iframe>
            <div className="flex flex-col max-w-screen-sm">
              <h2 className="h1">How I got here</h2>
              <p className="subtitle">
                I love playing music, video games and taking pictures. I'm also
                interesting in writing blogs and teaching people about what I
                enjoy.
              </p>
              <p className="subtitle">
                The video here shows me and my cousin walking across the longest
                foot suspension bridge in Canada (about 700 feet long). It was
                incredibly windy up at that height (about 150 meters), but it
                was an amazing experience.
              </p>
            </div>
          </div>
        </section>
        <Gap />
        <section>
          <div className="flex flex-col">
            <h2 className="h1">Where it began</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-4">
              <p className="text-gray-400 leading-loose">
                When I graduated from college with a Law and Security
                Administration diploma, I wanted to go back to school for a
                better degree. My original plan was to go to university for
                Computer Hardware Engineering, but while getting a few missing
                high-school courses, I stumbled upon web development. I ditched
                my plans for university and pursued this career for the last 8-9
                years.
              </p>

              <p className="text-gray-400 leading-loose">
                My career began working as a security guard for about 9 months;
                it was probably the worst experience in my life 😆. I then moved
                into retail as a cashier at a sporting-goods store. After about
                4 years I went into IT as a support rep in elementary schools
                for the schoolboard here. I learned a lot in that job and was
                happy to be near tech. After 2.5 years I finally fell into the
                career I've been working toward in 2021.
              </p>
            </div>
          </div>
        </section>
        <Gap />
        <section>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="h1">I enjoy writing and teaching others</h2>
                <p className="subtitle">
                  If you'd like, here are a few articles I've wrote...
                </p>
              </div>
              <Link to="/blog" className="link-button small secondary">
                Read more
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-10">
              {suggestions.map((post) => (
                <PostItem post={post} />
              ))}
            </div>
          </div>
        </section>
        <Gap />
        <section>
          <div className="flex gap-10">
            <figure className="w-full max-w-[500px]">
              <img
                src={img3}
                alt=""
                className="w-full  rounded-lg object-cover"
              />
              <figcaption className="text-gray-400 mt-4">
                Just before the void. Thunder Bay, Ontario
              </figcaption>
            </figure>

            <div className="flex flex-col">
              <h2 className="h1">Some fun facts about me</h2>
              <div className="flex flex-col mt-10 gap-10">
                <div className="flex flex-col">
                  <p className="text-white text-2xl">I can play guitar</p>
                  <p className="text-gray-400 mt-4">
                    I've been playing guitar since I was a little kid. I've
                    picked up a few instruments since then such as drums, piano,
                    bass and vocals. I would love to learn the cello or violin
                    next.
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-white text-2xl">
                    I narrate thriller stories
                  </p>
                  <p className="text-gray-400 mt-4">
                    I've been told I have a great narrating voice. So, I gave it
                    a go and upload videos occassionally to my youtube channel{" "}
                    <a
                      href="https://youtube.com/storiesaftermidnight"
                      className="text-blue-300 underline"
                      target="_blank"
                      rel="noopenner noreferrer"
                    >
                      Stories After Midnight.
                    </a>
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-white text-2xl">
                    I enjoy going for walks and runs
                  </p>
                  <p className="text-gray-400 mt-4">
                    Enjoying the outdoors and being in nature is something I've
                    really come to enjoy. Taking pictures and taking in the
                    scenery are a favourite past-time of mine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <img src={img4} alt="" className="w-full rounded-lg h-[600px] mt-20" />
        <Gap />
        <section>
          <h2 className="h1 mb-6">Some of my music I enjoy</h2>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameborder="0"
            height="450"
            style={{
              width: "100%",
              overflow: "hidden",
              background: "transparent",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/ca/playlist/untitled-playlist/pl.u-mJy8gdrtGv0RXm"
          ></iframe>
        </section>
        <Gap />
      </main>
      <Footer />
    </div>
  );
};

export default about;
