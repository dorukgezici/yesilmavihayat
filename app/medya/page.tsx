import ArticleCard from "@/components/ArticleCard";
import bidunyaImg from "@/public/img/media/bidunya.webp";
import birgunImg from "@/public/img/media/birgun.jpeg";
import gercekGundemImg from "@/public/img/media/gercekgundem.webp";
import kisaDalgaImg from "@/public/img/media/kisadalga.png";
import hakanBirolImg from "@/public/img/media/ropartaj-hakan-birol.jpeg";
import serbestGorusImg from "@/public/img/media/serbestgorus.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medya | Yeşil Mavi Hayat",
  authors: [{ name: "Meltem Soğuk Stropoli" }],
  description:
    "Yeşil Mavi Hayat hakkında çıkan haberler, röportajlar ve yazılar",
};

export default async function Media() {
  const articles = getArticles();

  return (
    <main className="flex flex-col items-center justify-between space-y-8">
      <section className="prose max-w-none w-5/6 mt-8">
        <h1 className="text-center text-2xl sm:text-4xl mb-12">
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

function getArticles(): Article[] {
  return [
    {
      source: "BirGün",
      url: "https://clips.medyatakip.com/pm/clip/LeVFmsA0QlF7JRMaDVzwp",
      img: birgunImg.src,
      pubDate: "2023-08-20",
      title: "Filozoflarla yaşamın değeri ve insan olmak üzerine",
      description:
        "Hepimizin aklından geçen soruların yanıtlarını ararken Arthur Schopenhauer, Carl Gustav Jung, Engin Geçtan, Viktor E. Frankl, Wilhelm Schmid, Henry David Thoreau, Carl Sagan, Gündüz Vassaf ile Sokrates, Aristoteles, Epikür, Seneca, Farabi gibi Antik Yunan, Roma ve İslam filozoflarının fikirlerinden de yararlanıyor.",
    },
    {
      source: "Fethiye Haber",
      url: "https://www.fethiyehaber.com/yazarlarla-roportaj-hakan-birol-soruyor-56/",
      img: hakanBirolImg.src,
      pubDate: "2023-08-18",
      title: "Yazarlarla Röportaj / Hakan Birol Soruyor",
      description:
        "Merhaba değerli okuyucularımız. Her hafta bir yazarla röportaj köşemizde bu hafta “Yeşil Mavi Hayat – Ve 50 Yaş” kitabıyla tanıdığımız “Meltem Soğuk Stropoli” var.",
    },
    {
      source: "Gerçek Gündem",
      url: "https://www.gercekgundem.com/amp/guncel/meltem-soguk-stropolinin-ilk-kitabi-yesil-mavi-hayatla-insan-yasama-yoluna-cikmak-433067",
      img: gercekGundemImg.src,
      pubDate: "2023-08-15",
      title:
        "Meltem Soğuk Stropoli’nin ilk kitabı: Yeşil Mavi Hayat’la “insanca yaşama” yoluna çıkmak",
      description:
        "Meltem Soğuk Stropoli Yeşil Mavi Hayat adlı kitabıyla yaşamın değeri ve insan olmak üzerine fikir yürütmeyi seven herkese kendilerinden ve düşüncelerinden bulabilecekleri bir izlek sunuyor.",
    },
    {
      source: "Serbest Görüş",
      url: "https://serbestgorus.com/2023/08/meltem-soguk-stropolinin-ilk-kitabi-yesil-mavi-hayatla-insan-yasama-yoluna-cikmak/",
      img: serbestGorusImg.src,
      pubDate: "2023-08-15",
      title:
        "Meltem Soğuk Stropoli’nin ilk kitabı: Yeşil Mavi Hayat’la “insanca yaşama” yoluna çıkmak",
      description:
        "“Kulağa, şifresi çözülmeyi bekleyen bir sır gibi gelen ‘yaşamın hakkını vermek’ fikrinin, aslında ‘daha fazla insan olmak’ ve ‘insanca yaşamaktan’ çok da farklı bir şey olmadığını biliyorum artık.”",
    },
    {
      source: "Kısa Dalga",
      url: "https://kisadalga.net/haber/detay/meltem-soguk-stropolinin-yesil-mavi-hayati-okurla-bulustu_78573",
      img: kisaDalgaImg.src,
      pubDate: "2023-08-14",
      title: "Meltem Soğuk Stropoli’nin 'Yeşil Mavi Hayat'ı okurla buluştu...",
      description:
        'Meltem Soğuk Stropoli, kitabında "Bu hayattaki günlerimiz sayılı olduğuna göre, yaşamımızı daha anlamlı hale getirebilmemiz mümkün mü?" sorusunun yanıtını arıyor.',
    },
    {
      source: "Bidünya Haber",
      url: "https://www.bidunyahaber.net/meltem-soguk-stropoli-nin-yazdigi-yesil-mavi-hayat-destek-yayinlari-ndan-cikti-h112265.html",
      img: bidunyaImg.src,
      pubDate: "2023-08-09",
      title:
        "Meltem Soğuk Stropoli’nin yazdığı Yeşil Mavi Hayat Destek Yayınları’ndan çıktı.",
      description:
        '"Sadece kendimi ve hayatı keşfetme yolculuğuna durmaksızın devam eden pek çok kişiden biriyim ve hayatın –eğer iyi okumayı öğrenebilirsek– bizlere tüm sorularının yanında, cevapları da birlikte sunduğuna inanıyorum."',
    },
  ];
}
