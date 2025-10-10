import Icon from "@/components/Icon";
import { socials } from "@/mocks/footer";
import { Article as ArticleType } from "@/types/article";

type MarkdownProps = {
  article: ArticleType;
};

const Markdown = ({ article }: MarkdownProps) => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <article
          className="prose prose-lg prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml ?? "" }}
        />

        <div className="mt-20 bg-neutral-200 w-full h-px" />

        <div className="mt-20 flex flex-col items-start justify-between gap-y-10 lg:flex-row lg:items-center">
          <div className="flex items-center gap-x-3">
            <div className="font-figtree font-medium text-neutral-950 text-sm uppercase">
              POST TAGS:
            </div>

            <div className="font-figtree font-medium text-neutral-500 text-sm uppercase">
              SUSTAINABILITY, ELECTRIC VEHICLES, GREEN ENERGY
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="font-figtree font-medium text-neutral-950 text-sm uppercase">
              SHARE:
            </div>

            <div className="flex items-center gap-x-2">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-neutral-900 w-11 h-11 flex items-center justify-center border border-neutral-700 rounded-full text-blue-500 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                >
                  <Icon name={item.icon} weight="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
