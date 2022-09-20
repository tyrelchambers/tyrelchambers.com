import { Link, useLoaderData } from "@remix-run/react";

import Header from "~/layouts/Header";
import PostItem from "~/components/PostItem";
import SocialList from "~/components/SocialList";
import { supabase } from "~/utils/supabase";
import Section from "../layouts/Section";
import Newsletter from "../components/Newsletter";
import { projects } from "../constants/projects";
import Project from "../components/Project";
import { format } from "date-fns";
import ResumeWidget from "../components/ResumeWidget";
import { jobXp } from "../constants/jobXp";
import { getIGPhotos, getJobLogo } from "../images.server";
import Footer from "../layouts/Footer";

export const loader = async () => {
  const { data: posts } = await supabase
    .from("posts")
    .select()
    .order("views", {
      ascending: false,
    })
    .limit(3);

  const { data: recentPost } = await supabase
    .from("posts")
    .select()
    .order("created_at", {
      ascending: false,
    })
    .limit(1)
    .single();

  const IGphotos = await getIGPhotos();

  const jobs = jobXp;
  jobs.map(async (j) => {
    j.logoUrl = await getJobLogo(j.logo);

    return j;
  });

  return { posts, recentPost, jobs };
};

export default function Index() {
  const { posts, recentPost, jobs } = useLoaderData();

  return (
    <div>
      <Header />

      <main className="ml-auto mr-auto w-full max-w-screen-2xl">
        <Section className="max-w-4xl gap-6">
          <h1 className="text-2xl font-bold leading-normal text-gray-700 tablet:text-6xl ">
            Software developer, runner, and photographer.
          </h1>
          <p className="text-xl leading-relaxed text-gray-500">
            I'm a programmer at heart and that's what you can usually find me
            doing as a profession and a hobby. Outside of programming I enjoy
            playing music, video games and taking photographs.
          </p>
          <SocialList />
        </Section>

        <Section className="my-20">
          <div className="rounded-3xl tablet:bg-gray-50 tablet:p-10">
            <div className="flex flex-col gap-10 tablet:flex-row">
              <img
                src={recentPost.cover_img}
                alt=""
                className="w-full max-w-sm rounded-3xl shadow-lg"
              />

              <div className="flex w-full max-w-2xl flex-col gap-4">
                <p className="text-sm text-indigo-300">
                  {format(new Date(recentPost.created_at), "MMM do, yyyy")}
                </p>
                <h3 className="mb-4 text-xl font-bold tablet:text-3xl">
                  {recentPost.title}
                </h3>
                <p className="text-gray-500">{recentPost.description}</p>

                <Link
                  to={`/blog/${recentPost.slug}`}
                  prefetch="intent"
                  className="mt-4 flex w-fit items-center gap-4 rounded-full border-[1px] border-indigo-400 py-2 px-4 text-sm text-indigo-400 transition-all hover:bg-indigo-400 hover:text-white"
                >
                  <i class="fa-solid fa-link-simple"></i>
                  Read article
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section className="my-32" title="Most popular articles">
          <div className=" grid w-full grid-cols-1 gap-10 tablet:grid-cols-3">
            {posts.map((p) => (
              <PostItem post={p} />
            ))}
          </div>
          <div className="mt-20">
            <Newsletter />
          </div>
        </Section>

        <Section
          title="Some projects I've worked on"
          subtitle="These are entirely made up of personal projects or technical challenges."
        >
          <div className="grid grid-cols-1 gap-10 tablet:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <Project project={p} />
            ))}
          </div>
        </Section>

        <Section className="my-20">
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-12">
            <div className="w-full tablet:col-span-4">
              <ResumeWidget jobs={jobs} />
            </div>

            <div className="roudned-3xl flex h-fit flex-col justify-between gap-6 rounded-3xl bg-gray-50 p-10 tablet:col-span-8 tablet:flex-row">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-700">
                  Resources I've collected
                </h3>
                <p className="mt-2 text-gray-500">
                  If you're looking for some handy links to helpful resources,
                  check them out
                </p>
              </div>
              <Link
                to="/resources"
                className="mt-6 h-fit w-fit rounded-full bg-indigo-400  py-3 px-6 text-center text-white"
              >
                See resources
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
