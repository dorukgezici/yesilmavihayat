import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default async function ArticleCard({ article }: { article: Article }) {
  return (
    <article
      className={classNames(styles.card, "w-full lg:w-2/5 max-w-[400px]")}
    >
      <Link href={article.url} target="_blank" className="no-underline">
        <div className="flex justify-center not-prose m-[-2rem] mb-2 shadow">
          {/* img overlay */}
          <div className="h-[250px] w-full bg-black/10 z-10 fixed" />
          <Image
            src={article.img}
            alt={article.title}
            className="rounded-t object-cover h-[250px]"
            height={250}
            width={400}
          />
        </div>

        <div className="flex flex-col lg:justify-between lg:h-[400px]">
          <h2 className="text-2xl lg:text-4xl my-4">{article.title}</h2>
          <h4 className="text-xl my-4">
            {new Date(article.pubDate).toLocaleDateString()}
          </h4>
          <h4 className="text-md my-4 flex flex-wrap justify-center gap-2">
            <span className={styles.source}>#{article.source}</span>
          </h4>
        </div>

        <div className={classNames(styles.description, "my-4")}>
          {article.description}
        </div>
      </Link>
    </article>
  );
}
