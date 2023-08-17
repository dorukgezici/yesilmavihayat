import ArticleCard from "@/components/ArticleCard";
import coverImg from "@/public/img/cover.webp";

export default function Media() {
  const articles: Article[] = [
    {
      source: "Gerçek Gündem",
      url: "https://www.gercekgundem.com/amp/guncel/meltem-soguk-stropolinin-ilk-kitabi-yesil-mavi-hayatla-insan-yasama-yoluna-cikmak-433067",
      img: coverImg.src,
      pubDate: "2023-08-15",
      title:
        "Meltem Soğuk Stropoli’nin ilk kitabı: Yeşil Mavi Hayat’la “insan yaşama” yoluna çıkmak",
      description:
        "Meltem Soğuk Stropoli Yeşil Mavi Hayat adlı kitabıyla yaşamın değeri ve insan olmak üzerine fikir yürütmeyi seven herkese kendilerinden ve düşüncelerinden bulabilecekleri bir izlek sunuyor.",
    },
    {
      source: "Kısa Dalga",
      url: "https://kisadalga.net/haber/detay/meltem-soguk-stropolinin-yesil-mavi-hayati-okurla-bulustu_78573",
      img: coverImg.src,
      pubDate: "2023-08-14",
      title: "Meltem Soğuk Stropoli’nin 'Yeşil Mavi Hayat'ı okurla buluştu...",
      description:
        'Meltem Soğuk Stropoli, kitabında "Bu hayattaki günlerimiz sayılı olduğuna göre, yaşamımızı daha anlamlı hale getirebilmemiz mümkün mü?" sorusunun yanıtını arıyor.',
    },
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
      <section className="prose max-w-none w-5/6 mt-8">
        <h1 className="text-center text-2xl sm:text-4xl">
          Medyada Yeşil Mavi Hayat
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}
