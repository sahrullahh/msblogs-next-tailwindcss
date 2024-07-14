import getPostMetadata from "./utils/getPostMetadata";
import PostPreview from "./components/PostPreview";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"] });
const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview
      key={post.slug}
      {...post}
    />
  ));

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start  p-5">
        <div>
          <Link
            href="https://www.youtube.com/watch?v=qfxDEZX9K0os"
            rel="stylesheet"
          >
            <img
              src="./pictures/Cat-darkmode.jpg"
              alt=""
              className="max-w-[100px] border dark:block hidden "
            />
            <img
              src="./pictures/Cat-Lightmode.jpg"
              alt=""
              className="max-w-[100px] border dark:hidden block "
            />
          </Link>
        </div>
        <div className="pb-5 pt-5 space-y-5">
          <h2
            className={`text-5xl max-w-lg font-bold ${lexend.className} tracking-tighter`}
          >
            Hi, Mwehehehe 👋
          </h2>
          <p className="">
            I'm just a human writing a blog, living with experience and peace
          </p>
        </div>
      </div>
      <div className="grid gap-5 lg:p-0 p-5 grid-cols-1  ">{postPreviews}</div>
    </div>
  );
};

export default Home;
