import { Link, Meta, useLoaderData } from "remix";

import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import PostItem from "~/components/PostItem";
import SectionHero from "~/layouts/SectionHero";
import SocialList from "~/components/SocialList";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import { getBlogPosts } from "~/utils/getBlogPosts";

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

      <main className="ml-auto mr-auto mt-20 w-full max-w-screen-xl">
        <SectionHero
          leftCol={
            <>
              <h1 className="h1">Hey, I'm Tyrel Chambers 👋</h1>
              <p className="mt-4 text-xl text-blue-300">
                Software Engineer &amp; DevRel @ This Dot Labs
              </p>
              <p className="subtitle">
                I'm a full-stack developer living in Ontario, Canada. I'm a
                self-taught indie developer and I love day-dreaming new ideas
                and using my free time to bring them to life.
              </p>

              <SocialList className="mt-10" />
            </>
          }
          rightCol={
            <img
              src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/890717F1-8B22-4767-89CF-897A7B0209EF_1_105_c.webp"
              alt=""
              className="w-full rounded-lg object-cover "
            />
          }
        />

        <Gap height="h-20" />
        <section className="p-4">
          <h2 className="h2">My tech stack</h2>
          <p className="subtitle">
            These technologies are ones I work with on a regular basis
          </p>
          <ul className="mt-10 grid grid-cols-2 justify-between gap-10 tablet:grid-cols-4 desktop:grid-cols-7 ">
            <li className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </li>
            <li className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4">
              <p className="text-xl text-white">Remix.run</p>
            </li>
            <li className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4">
              <p className="text-xl text-white">Express.js</p>
            </li>
            <li className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4">
              <img
                src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/docker-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </li>
            <li className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4">
              <img
                src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/nodejs-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </li>
            <li className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4">
              <img
                src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/sequelize-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </li>
            <li className="flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4">
              <img
                src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/tailwind-css-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </li>
          </ul>
        </section>
        <Gap />

        <figure className="p-4">
          <img
            src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/821F0F1E-A38C-4939-A04C-EEB7DA2109FB_1_105_c.webp"
            alt=""
            className="w-full rounded-lg object-cover desktop:h-[800px]"
          />
          <figcaption className="mt-4 ml-auto mr-auto max-w-xl text-center text-gray-400">
            My cousin on the tallest cliffs in Ontario in Thunder Bay, Ontario.
            It was a 28km round trip hike that took us all day to complete.
          </figcaption>
        </figure>
        <Gap />
        <section className="p-4">
          <div className="flex flex-col gap-20 tablet:flex-row">
            <iframe
              src="https://youtube.com/embed/uJiLFua0cww"
              className="w-full rounded-lg object-cover desktop:h-[800px]"
            ></iframe>
            <div className="flex max-w-screen-sm flex-col gap-8">
              <h2 className="h2 mb-4">How I got here</h2>
              <p className="text-xl leading-loose text-gray-400 tablet:text-2xl">
                I love playing music, video games and taking pictures. I'm also
                interesting in writing blogs and teaching people about what I
                enjoy.
              </p>
              <p className="text-xl leading-loose text-gray-400 tablet:text-2xl">
                The video here shows me and my cousin walking across the longest
                foot suspension bridge in Canada (about 700 feet long). It was
                incredibly windy up at that height (about 150 meters), but it
                was an amazing experience.
              </p>
            </div>
          </div>
        </section>
        <Gap />
        <section className="p-4">
          <div className="flex flex-col">
            <h2 className="h2">Where it began</h2>
            <div className="mt-4 grid grid-cols-1 gap-20 sm:grid-cols-2">
              <p className="leading-loose text-gray-400">
                When I graduated from college with a Law and Security
                Administration diploma, I wanted to go back to school for a
                better degree. My original plan was to go to university for
                Computer Hardware Engineering, but while getting a few missing
                high-school courses, I stumbled upon web development. I ditched
                my plans for university and pursued this career for the last 8-9
                years.
              </p>

              <p className="leading-loose text-gray-400">
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
        <section className="p-4">
          <div className="flex flex-col">
            <div className="flex flex-col justify-between tablet:flex-row  tablet:items-center">
              <div className="flex flex-col">
                <h2 className="h2">I enjoy writing and teaching others</h2>
                <p className="subtitle">
                  If you'd like, here are a few articles I've wrote...
                </p>
              </div>
              <Link
                to="/blog"
                className="link-button small secondary mt-6 tablet:mt-0"
              >
                Read more
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {suggestions.map((post) => (
                <PostItem post={post} />
              ))}
            </div>
          </div>
        </section>
        <Gap />
        <section className="p-4">
          <div className="flex flex-col gap-10 tablet:flex-row">
            <figure className="w-full max-w-[500px]">
              <img
                src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/81EEA478-6EC4-4817-B9FA-47D0B5638095_1_105_c.webp"
                alt=""
                className="w-full  rounded-lg object-cover"
              />
              <figcaption className="mt-4 text-gray-400">
                Just before the void. Thunder Bay, Ontario
              </figcaption>
            </figure>

            <div className="flex flex-col">
              <h2 className="h2">Some fun facts about me</h2>
              <div className="mt-10 flex flex-col gap-10">
                <div className="flex flex-col">
                  <p className="text-2xl text-white">I can play guitar</p>
                  <p className="mt-4 text-gray-400">
                    I've been playing guitar since I was a little kid. I've
                    picked up a few instruments since then such as drums, piano,
                    bass and vocals. I would love to learn the cello or violin
                    next.
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-2xl text-white">
                    I narrate thriller stories
                  </p>
                  <p className="mt-4 text-gray-400">
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
                  <p className="text-2xl text-white">
                    I enjoy going for walks and runs
                  </p>
                  <p className="mt-4 text-gray-400">
                    Enjoying the outdoors and being in nature is something I've
                    really come to enjoy. Taking pictures and taking in the
                    scenery are a favourite past-time of mine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <figure className="p-4">
          <img
            src="https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/1FBEB87D-AFA9-4D12-AAEE-94027686A3EA_1_105_c.webp"
            alt=""
            className="mt-20 w-full rounded-lg desktop:h-[600px]"
          />
        </figure>

        <Gap />
      </main>
      <Footer />
    </div>
  );
};

export default about;
