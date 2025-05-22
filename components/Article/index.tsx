import Image from "next/image";
import { Article as ArticleType } from "@/types/article";
import Link from "next/link";

type ArticleProps = {
  item: ArticleType;
  className: string;
};

const Article = ({ item, className }: ArticleProps) => {
  return (
    <div className={`${className}`}>
      <Link key={item.id} href={`/news/${item.id}`}>
        <div className="relative w-full h-80">
          <Image
            src={item.image}
            alt="About Image"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </Link>

      <div className="mt-6 flex items-center gap-2">
        <div className="font-figtree text-xs text-neutral-500 uppercase">
          {item.time}
        </div>
        <div className="font-figtree text-xs text-neutral-500 uppercase">•</div>
        <div className="font-figtree text-xs text-neutral-500 uppercase">
          {item.date}
        </div>
      </div>

      <h6 className="mt-4 font-onest text-2xl font-medium text-neutral-950">
        {item.title}
      </h6>
      <p className="mt-2 font-figtree text-base text-neutral-500">
        {item.description}
      </p>
    </div>
  );
};

export default Article;
