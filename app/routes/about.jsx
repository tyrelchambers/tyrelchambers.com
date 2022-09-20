import { Link, Meta, useLoaderData } from "@remix-run/react";

import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import PostItem from "~/components/PostItem";
import SectionHero from "~/layouts/SectionHero";
import SocialList from "~/components/SocialList";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import { getBlogPosts } from "~/utils/getBlogPosts";
import Section from "../layouts/Section";
import { techStack } from "../constants";
import Main from "../layouts/Main";

export const meta = () => {
  return {
    title: "Tyrel Chambers | About",
    description: `I'm a full-stack developer living in Ontario, Canada. I'm a self-taught indie developer and I love day-dreaming new ideas and using my free time to bring them to life.`,
  };
};

export const loader = async () => {
  const posts = await getBlogPosts();
  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return suggestions;
};

const about = () => {
  const suggestions = useLoaderData();
  return (
    <div>
      <Header />

      <Main className="mr-auto ml-auto w-full max-w-screen-2xl">
        <Section className="max-w-4xl ">
          <h1 className="mb-4 text-2xl font-bold leading-normal text-gray-700 tablet:text-6xl">
            I'm Tyrel Chambers. I'm a Software Developer from Ontario, Canada.
          </h1>
          <p className="mb-6 text-xl text-indigo-400">
            Software Engineer @ This Dot Labs
          </p>
          <SocialList />
        </Section>
        <Gap height="h-20" />
        <section className="flex flex-col gap-10 p-6 tablet:grid tablet:grid-cols-12">
          <Section
            className="col-span-4 p-0"
            title="My tech stack"
            subtitle="These technologies are ones I work with on a regular basis"
          >
            <ul className="flex flex-wrap gap-4">
              {techStack.map((t) => (
                <li className="rounded-full bg-gray-100 py-2 px-4 text-gray-600">
                  {t}
                </li>
              ))}
            </ul>
          </Section>
          <Section
            className="col-span-8 flex h-fit flex-col rounded-3xl p-0 tablet:bg-gray-100 tablet:p-10"
            title="Where it began"
          >
            <div className="flex flex-col gap-6">
              <p className="leading-loose text-gray-600">
                When I graduated from college with a Law and Security
                Administration diploma, I wanted to go back to school for a
                better degree. My original plan was to go to university for
                Computer Hardware Engineering, but while getting a few missing
                high-school courses, I stumbled upon web development. I ditched
                my plans for university and pursued this career for the last 8-9
                years.
              </p>

              <p className="leading-loose text-gray-600">
                My career began working as a security guard for about 9 months;
                it was probably the worst experience in my life 😆. I then moved
                into retail as a cashier at a sporting-goods store. After about
                4 years I went into IT as a support rep in elementary schools
                for the schoolboard here. I learned a lot in that job and was
                happy to be near tech. After 2.5 years I finally fell into the
                career I've been working toward in 2021.
              </p>
            </div>
          </Section>
        </section>

        <Gap />
        <section className="p-4">
          <div className="flex flex-col gap-20 tablet:flex-row">
            <iframe
              src="https://youtube.com/embed/uJiLFua0cww"
              className="w-full rounded-lg object-cover desktop:h-[800px]"
            ></iframe>
            <div className="flex max-w-screen-sm flex-col gap-8">
              <h2 className="text-3xl font-bold text-gray-800">
                How I got here
              </h2>
              <p className="text-lg leading-loose text-gray-600 tablet:text-2xl">
                I love playing music, video games and taking pictures. I'm also
                interesting in writing blogs and teaching people about what I
                enjoy.
              </p>
              <p className="text-lg leading-loose text-gray-600 tablet:text-2xl">
                The video here shows me and my cousin walking across the longest
                foot suspension bridge in Canada (about 700 feet long). It was
                incredibly windy up at that height (about 150 meters), but it
                was an amazing experience.
              </p>
            </div>
          </div>
        </section>

        <Section
          title="Recent articles"
          className="mt-20"
          headerPaddingBottom="mb-4"
        >
          <div className=" grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
            {suggestions.map((post) => (
              <PostItem key={post.title} post={post} />
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-6 w-fit justify-end rounded-full border-2 border-indigo-400 py-2 px-6 text-indigo-500"
          >
            Read more
            <i className="fa-solid fa-arrow-right-long ml-4"></i>
          </Link>
        </Section>

        <Gap />
      </Main>
      <Footer />
    </div>
  );
};

export default about;
