export default function ArticleCard({ article }: { article: Article }) {
  return (
    <a href={article.url} target="_blank" className="no-underline not-prose">
      <div className="card w-96 bg-base-200 shadow-xl">
        <figure>
          <img
            src={article.img}
            alt={article.title}
            className="object-cover h-[250px] w-[384px]"
            height={250}
            width={384}
          />
        </figure>
        <div className="card-body prose">
          <h2 className="card-title">{article.title}</h2>
          <p>{article.description}</p>
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline">#{article.source}</div>
            <div className="badge badge-outline">{new Date(article.pubDate).toLocaleDateString("tr")}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
