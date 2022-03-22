import { Link, useLoaderData } from "remix";

import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import PostItem from "~/components/PostItem";
import Project from "~/components/Project";
import ScrollIcon from "~/components/ScrollIcon";
import SectionHero from "../layouts/SectionHero";
import SocialList from "~/components/SocialList";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import { motion } from "framer-motion";
import { projects } from "~/constants/projects";
import { supabase } from "~/utils/supabase";

export const loader = async () => {
  const { data: posts } = await supabase.from("posts").select();
  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });

  return suggestions;
};

export default function Index() {
  const posts = useLoaderData();

  const container = {
    hidden: { opacity: 1, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      <Header />

      <main className="mt-4 ml-auto mr-auto max-w-screen-xl py-8 desktop:mt-14">
        <SectionHero
          leftCol={
            <>
              <h1 className="h1">
                Building software and teaching people about what I love the most
              </h1>
              <div className="mt-10 flex w-full flex-col items-center gap-6 desktop:flex-row">
                <Link to="/blog" className="link-button primary large w-full">
                  Read my blog
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
                <Link
                  to="/resources"
                  className="link-button secondary large w-full"
                >
                  View some resources
                </Link>
              </div>
            </>
          }
          rightCol={
            <img
              src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/me2.webp"
              alt=""
              className="w-full rounded-lg"
            />
          }
        />

        <section className="mt-20 flex flex-col items-center justify-center">
          <ScrollIcon />
        </section>
        <Gap />
        <section className="p-4">
          <div className="flex flex-col gap-8 tablet:flex-row desktop:gap-20">
            <img
              src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/me.webp"
              alt=""
              className="ml-auto mr-auto w-full rounded-lg object-cover tablet:max-w-xs"
            />
            <div className="flex flex-col gap-8">
              <h2 className="h2">Hey, I'm Tyrel Chambers 👋</h2>
              <p className="text-normal font-thin text-gray-400 desktop:text-2xl">
                I'm a programmer at heart and that's what you can usually find
                me doing as a profession and a hobby.
              </p>
              <p className="text-normal text-gray-400  desktop:text-2xl">
                Outside of programming I enjoy playing music, video games and
                taking photographs. I also have a{" "}
                <a href="https://youtube.com/storiesaftermidnight">
                  Youtube channel
                </a>{" "}
                where I flex and grow my narration skills!
              </p>
              <SocialList />
              <Link to="/about" className="link-button outline">
                Learn more about me
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </section>
        <Gap />
        <section className="p-4">
          <h2 className="h2">I've made some pretty cool things!</h2>
          <p className="subtitle">
            These are entirely made up of personal projects or technical
            challenges.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8  tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-20">
            {projects.map((project, index) => (
              <Project project={project} key={index} />
            ))}
          </div>
        </section>
        <Gap />
        <section className="p-4">
          <div className="flex flex-col tablet:flex-row tablet:items-center">
            <div className="flex w-full flex-col justify-between">
              <h2 className="h2">Recently published posts</h2>
              <p className="subtitle">Take a look at these recent articles</p>
            </div>
            <Link
              to="/blog"
              className="link-button small secondary mt-6 tablet:mt-0"
            >
              See all posts
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
            {posts.map((post, index) => (
              <PostItem post={post} key={index} />
            ))}
          </div>
        </section>
        <Gap />
        <section className="p-4">
          <h2 className="h2">I love taking photos</h2>
          <p className="subtitle">
            If you'd like to see more, check out my{" "}
            <a
              href="https://instagram.com/imtyrelchambers"
              rel="noopenner noreferrer"
              target="_blank"
              className="underline"
            >
              instagram
            </a>
            .
          </p>
          <figure>
            <img
              src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/mtn.webp"
              alt=""
              className="mt-8 h-[500px] w-full rounded-lg object-cover"
            />
            <figcaption className="mt-4 text-center font-thin text-white opacity-40">
              Taken in 2019 in Thunder Bay, Ontario
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2">
            <figure>
              <img
                src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/cousin.webp"
                alt=""
                className="mt-8 h-[500px] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-4 text-center font-thin text-white opacity-40">
                Taken in 2021. My cousin and I hiking in our home town
              </figcaption>
            </figure>

            <figure>
              <img
                src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/papa.webp"
                alt=""
                className="mt-8 h-[500px] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-4 text-center font-thin text-white opacity-40">
                Taken in 2018. My papa and I hiking by his house
              </figcaption>
            </figure>
          </div>
        </section>
        <Gap />
        <section className="p-4">
          <div className="flex flex-col justify-between gap-8 tablet:flex-row tablet:items-center">
            <div className="flex max-w-3xl flex-col">
              <h2 className="h2">Resources I've collected</h2>
              <p className="subtitle">
                If you're looking for some handy links to helpful resources,
                check them out
              </p>
            </div>
            <Link to="/resources" className="link-button small secondary h-fit">
              See resources
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </section>
        <Gap />
      </main>
      <Footer />
    </div>
  );
}
