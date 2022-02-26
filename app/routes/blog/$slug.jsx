import React from "react";
import { Link, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import Header from "~/layouts/Header";
import { getPost, getPosts } from "~/post";
import { getMDXComponent } from "mdx-bundler/client";
import { format } from "date-fns";
import Gap from "~/components/Gap";
import PostItem from "~/components/PostItem";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import PostFooter from "~/layouts/PostFooter";
import Footer from "~/layouts/Footer";

export const loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const posts = await getPosts();
  const post = await getPost(params.slug);
  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return { post, suggestions };
};

const PostSlug = () => {
  const {
    post: {
      code,
      slug,
      frontmatter: { title, banner, date },
    },
    suggestions,
  } = useLoaderData();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div>
      <Header />
      <div className="max-w-screen-md ml-auto mr-auto mt-20">
        <Link to="/blog" className="text-white">
          <i className="fa-solid fa-arrow-left-long mr-8"></i>
          Back to blogs
        </Link>
        <Gap height="h-20" />
        <img
          src={banner}
          alt=""
          className="w-full object-cover h-[500px] rounded-lg mb-10 shadow-lg"
        />
        <h1 className="h1 ">{title}</h1>
        <p className="mb-10 text-teal-400">
          {format(new Date(date), "MMMM do, yyyy")}
        </p>
        <div className="prose prose-p:text-gray-400 prose-h2:text-white prose-h3:text-white prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-red-300 prose-h2:font-thin prose-h3:font-thin">
          <Component />
        </div>
      </div>
      <Gap />
      <PostFooter postTitle={title} slug={slug} />
      <Gap />
      <div className="flex flex-col max-w-screen-xl ml-auto mr-auto">
        <h2 className="h2">If you enjoyed this article</h2>
        <p className="subtitle">You might enjoy one of these suggestions</p>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {suggestions.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div>
      <Gap />
      <Footer />
    </div>
  );
};

export default PostSlug;
