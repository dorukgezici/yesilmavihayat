import ArticleCard from "@/components/ArticleCard";
import coverImg from "@/public/img/cover.webp";

export default function Media() {
  const articles: Article[] = [
    {
      source: "Bidünya Haber",
      url: "https://www.bidunyahaber.net/meltem-soguk-stropoli-nin-yazdigi-yesil-mavi-hayat-destek-yayinlari-ndan-cikti-h112265.html",
      img: coverImg.src,
      pubDate: "2023-08-09",
      title:
        "Meltem Soğuk Stropoli’nin yazdığı Yeşil Mavi Hayat Destek Yayınları’ndan çıktı.",
      description:
        '"Sadece kendimi ve hayatı keşfetme yolculuğuna durmaksızın devam eden pek çok kişiden biriyim ve hayatın –eğer iyi okumayı öğrenebilirsek– bizlere tüm sorularının yanında, cevapları da birlikte sunduğuna inanıyorum."',
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between space-y-8">
      <section className="prose w-5/6 mt-8">
        <h1>Medyada Yeşil Mavi Hayat</h1>
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </section>
    </main>
  );
}
