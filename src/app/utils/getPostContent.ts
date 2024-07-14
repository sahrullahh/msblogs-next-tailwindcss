import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "./src/app/posts/";
  const file = `${folder}${slug}.md`;

  if (!fs.existsSync(file)) return null;

  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export default getPostContent;
