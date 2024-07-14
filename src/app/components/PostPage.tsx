"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { Icon } from "@iconify/react";
import { Skeleton } from "@/components/ui/skeleton";
import TransitionPage from "@/app/components/TransitionPage";

const lexend = Lexend({ subsets: ["latin"] });

const PostPage = ({ post }: { post: any }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="p-5 max-w-4xl mx-auto">
          <div className="">
            <Skeleton className="h-5 w-32 mb-5" />
            <Skeleton className="h-10 w-1/2 mb-5" />
            <Skeleton className="h-6 w-1/4 mb-5" />
          </div>
          <Skeleton className="h-6 w-2/4 mb-5" />
          <Skeleton className="h-6 w-full mb-5" />
          <Skeleton className="h-6 w-full mb-5" />
          <Skeleton className="h-6 w-full mb-5" />
          <Skeleton className="h-6 w-2/4 mb-5" />
        </div>
      ) : (
        <>
          {post ? (
            post.data.public ? (
              <TransitionPage>
                <div>
                  <div className="lg:flex justify-center lg:p-0 p-5">
                    <div className="space-y-5">
                      <Link
                        href="/"
                        className="flex gap-5 items-center hover:text-yellow-600 transition-colors"
                      >
                        <Icon icon="jam:arrow-left" />
                        Back to home
                      </Link>
                      <h2
                        className={`text-5xl font-bold max-w-2xl ${lexend.className} tracking-tighter`}
                      >
                        {post.data.title}
                        <span className="text-red-500">*</span>
                      </h2>

                      <div className="flex lg:flex-row flex-col lg:gap-5 gap-3">
                        <p className="flex gap-3 items-center">
                          <Icon icon="solar:calendar-linear" /> Published:{" "}
                          <b>{post.data.date}</b>
                        </p>
                      </div>

                      <article className="prose lg:prose-xl dark:prose-invert border-t">
                        <Markdown>{post.content}</Markdown>
                      </article>
                    </div>
                  </div>
                </div>
              </TransitionPage>
            ) : (
              <div className="p-5">
                <div className="flex justify-center pt-20 pb-5">
                  <div className="space-y-5 text-center">
                    <h1 className="text-5xl font-bold tracking-tighter">
                      The post was currently private!
                    </h1>
                    <p className="font-medium text-lg text-gray-500 max-w-lg mx-auto">
                      This post is available but is no longer viewable publicly
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href="/">
                    <button className="px-5 py-2 dark:bg-gray-800 dark:text-white bg-gray-100 font-semibold  text-gray-500 rounded-md">
                      Back to home
                    </button>
                  </Link>
                </div>
              </div>
            )
          ) : (
            <div className="p-5">
              <div className="flex justify-center pt-20 pb-5">
                <div className="space-y-5 text-center">
                  <h1 className="text-5xl font-bold tracking-tighter">
                    Not Found!
                  </h1>
                  <p className="font-medium text-lg text-gray-500 max-w-lg mx-auto">
                    The post you are looking for is no longer there, perhaps it
                    has been moved or deleted
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="/">
                  <button className="px-5 py-2 dark:bg-gray-800 dark:text-white bg-gray-100 font-semibold text-gray-500 rounded-md">
                    Back to home
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostPage;
