import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./postMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "./src/app/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `./src/app/posts/${fileName}`,
      "utf-8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      publish: matterResult.data.publish,
      public: matterResult.data.public,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default getPostMetadata;
