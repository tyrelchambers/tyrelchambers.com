import { Link, useLoaderData } from "remix";
import ScrollIcon from "~/components/ScrollIcon";
import Header from "~/layouts/Header";
import me2 from "../../public/images/me2.jpeg";
import me1 from "../../public/images/me.jpeg";
import SocialList from "~/components/SocialList";
import Gap from "~/components/Gap";
import { projects } from "~/constants/projects";
import Project from "~/components/Project";
import { getPosts } from "~/post";
import PostItem from "~/components/PostItem";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import mtn from "../../public/images/mtn.jpeg";
import cousin from "../../public/images/cousin.jpeg";
import papa from "../../public/images/papa.jpeg";
import Footer from "~/layouts/Footer";

export const loader = async () => {
  const posts = await getPosts();
  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return suggestions;
};

export default function Index() {
  const posts = useLoaderData();

  return (
    <div>
      <Header />

      <main className="mt-14 max-w-screen-xl ml-auto mr-auto py-8">
        <section className=" w-full grid grid-cols-2 items-center max-w-screen-xl ml-auto mr-auto gap-20">
          <div className="flex flex-col items-start">
            <h1 className="max-w-2xl text-white text-5xl mt-2 leading-snug ">
              Building software and teaching people about what I love the most
            </h1>
            <div className="flex items-center mt-10 w-full gap-6">
              <Link to="/blog" className="link-button primary large">
                Read my blog
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link to="/resources" className="link-button secondary large">
                View some resources
              </Link>
            </div>
          </div>
          <img
            src={me2}
            alt=""
            className="w-full max-w-lg ml-auto mr-auto rounded-lg"
          />
        </section>
        <section className="mt-20 flex justify-center items-center flex-col">
          <ScrollIcon />
        </section>
        <Gap />
        <section>
          <div className="flex gap-20">
            <img src={me1} alt="" className="rounded-lg w-full max-w-xs" />
            <div className="flex flex-col gap-8">
              <h2 className="h2">Hey, I'm Tyrel Chambers 👋</h2>
              <p className="text-2xl font-thin text-gray-400">
                I'm a programmer at heart and that's what you can usually find
                me doing as a profession and a hobby.
              </p>
              <p className="text-2xl font-thin text-gray-400">
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
        <section>
          <h2 className="h2">I've made some pretty cool things!</h2>
          <p className="subtitle">
            These are entirely made up of personal projects or technically
            challenges.
          </p>
          <div className="grid grid-cols-3 gap-20 mt-16">
            {projects.map((project, index) => (
              <Project project={project} key={index} />
            ))}
          </div>
        </section>
        <Gap />
        <section>
          <div className="flex items-center">
            <div className="flex flex-col w-full justify-between">
              <h2 className="h2">Recently published posts</h2>
              <p className="subtitle">Take a look at these recent articles</p>
            </div>
            <Link to="/blog" className="link-button small secondary">
              See all posts
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-10">
            {posts.map((post, index) => (
              <PostItem post={post} key={index} />
            ))}
          </div>
        </section>
        <Gap />
        <section>
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
              src={mtn}
              alt=""
              className="w-full h-[500px] object-cover rounded-lg mt-8"
            />
            <figcaption className="text-center text-white opacity-40 font-thin mt-4">
              Taken in 2019 in Thunder Bay, Ontario
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-10">
            <figure>
              <img
                src={cousin}
                alt=""
                className="w-full h-[500px] object-cover rounded-lg mt-8"
              />
              <figcaption className="text-center text-white opacity-40 font-thin mt-4">
                Taken in 2021. My cousin and I hiking in our home town
              </figcaption>
            </figure>

            <figure>
              <img
                src={papa}
                alt=""
                className="w-full h-[500px] object-cover rounded-lg mt-8"
              />
              <figcaption className="text-center text-white opacity-40 font-thin mt-4">
                Taken in 2018. My papa and I hiking by his house
              </figcaption>
            </figure>
          </div>
        </section>
        <Gap />
        <section>
          <div className="flex items-center justify-between">
            <div className="flex flex-col max-w-3xl">
              <h2 className="h2">Resources I've collected</h2>
              <p className="subtitle">
                If you're looking for some handy links to helpful resources,
                check them out
              </p>
            </div>
            <Link to="/resources" className="link-button small outline h-fit">
              See resources
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </section>
        <Gap />
        <section>
          <h2 className="h2">Some media I listen to</h2>
          <div className="mt-10">
            <iframe
              className="rounded-lg"
              src="https://open.spotify.com/embed/show/4kYCRYJ3yK5DQbP5tbfZby?utm_source=generator&theme=0"
              width="100%"
              height="232"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </section>
        <Gap />
      </main>
      <Footer />
    </div>
  );
}
