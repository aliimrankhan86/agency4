import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import { Article as ArticleType } from "@/types/article";

const articlesDirectory = path.join(process.cwd(), "posts");

export const getSortedArticles = (): ArticleType[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      image: matterResult.data.image,
      title: matterResult.data.title,
      description: matterResult.data.description,
      time: matterResult.data.time,
      date: moment(matterResult.data.date, "YYYY-MM-DD").format("MMM D, YYYY"),
    };
  });

  return allArticlesData.sort((a, b) => {
    const format = "MMM D, YYYY";
    const dateA = moment(a.date, format);
    const dateB = moment(b.date, format);
    if (dateA.isBefore(dateB)) {
      return -1;
    } else if (dateB.isAfter(dateA)) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const getArticleData = async (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    image: matterResult.data.image,
    title: matterResult.data.title,
    description: matterResult.data.description,
    time: matterResult.data.time,
    date: moment(matterResult.data.date, "YYYY-MM-DD").format("MMM D, YYYY"),
  };
};
