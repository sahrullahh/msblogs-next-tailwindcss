import getPostMetadata from "@/app/utils/getPostMetadata";
import getPostContent from "../../utils/getPostContent";
import type { Metadata } from "next";
import PostPage from "@/app/components/PostPage";

export async function generateStaticParams() {
  const posts = getPostMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = params.slug;
  const post = getPostContent(slug);

  if (!post) {
    return {
      title: "Not Found",
      description:
        "The post you are looking for no longer exists, may have been moved or deleted",
    };
  }
  return {
    title: `${post.data.title} | MS - Blog`,
    description: post.data.subtitle || post.content.slice(0, 150),
    openGraph: {
      title: post.data.title,
      description: post.data.subtitle || post.content.slice(0, 150),
      type: "article",
      publishedTime: post.data.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.subtitle || post.content.slice(0, 150),
    },
  };
}

const Page = ({ params }: Params) => {
  const slug = params.slug;
  const post = getPostContent(slug);

  return <PostPage post={post} />;
};

export default Page;
