import Article from "@/components/Article";
import { Article as ArticleType } from "@/types/article";

type ArticlesProps = {
  news: ArticleType[];
};

const Articles = ({ news }: ArticlesProps) => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
          {news.map((item) => (
            <Article key={item.title} item={item} className="animate" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
