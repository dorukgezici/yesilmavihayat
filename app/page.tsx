import coverImg from "@/public/img/cover.webp";
import meltemImg from "@/public/img/meltem.jpg";
import wavesImg from "@/public/img/waves.jpg";
import { Charmonman, Gotu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const headerFont = Charmonman({ weight: "700", subsets: ["latin-ext"] });
const header2Font = Gotu({ weight: "400", subsets: ["latin-ext"] });

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between space-y-8">
      <section className="items-center">
        <div className="carousel carousel-center p-8 space-x-8 bg-primary">
          <div className="carousel-item">
            <Image
              src={wavesImg}
              alt="Waves"
              className="rounded-box"
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              src={wavesImg}
              alt="Waves"
              className="rounded-box"
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              src={wavesImg}
              alt="Waves"
              className="rounded-box"
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              src={wavesImg}
              alt="Waves"
              className="rounded-box"
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              src={wavesImg}
              alt="Waves"
              className="rounded-box"
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              src={wavesImg}
              alt="Waves"
              className="rounded-box"
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center">
        <div className="flex w-auto m-8">
          <Image
            src={coverImg}
            alt="Yeşil Mavi Hayat"
            width={256}
            height={403}
          />
        </div>
        <div className="w-2/3 prose">
          <p>
            Günümüzün modern dünyasında çoğumuz hedef odaklı, hızlı, oldukça da
            bireyselleşmiş hayatlar yaşıyoruz. Yaşamdaki “anlam”, genellikle
            başarı ve toplumsal statü ile ilişkilendirilirken, insanı insan
            yapan erdemler ise burun kıvrılan demode değerler haline geldiler.
          </p>
          <p>
            Büyük resmi kaybetmeden “gerçek kendimiz”i keşfedebilmek, sadece
            bireysel hırs ve tüketme odaklı bir şekilde bencilce yaşamamak,
            doğanın sahibi değil de onun bir parçası olduğumuzu unutmamak,
            “ben-öteki”, “insan-doğa”, “insan-hayvan” tarzında ayrımları
            törpüleyebilmek gibi kavramlar üzerine düşündürücü bir yapıt...
          </p>
          <ul className="list-inside list-disc">
            <li>D&R mağazaları ve tüm kitapçılarda!</li>
            <li>
              <Link
                href="https://destekdukkan.com/magaza/urun/yesil-mavi-hayat"
                target="_blank"
                className="font-medium hover:underline"
              >
                destekdukkan.com
              </Link>{" "}
              üzerinde %40 indirimli
            </li>
            <li>
              Avrupa’dan temin için{" "}
              <Link
                href="https://www.tikla24.de/kitap/meltem-soguk-stropoli/yesil-mavi-hayat-ve-50-yas/"
                target="_blank"
                className="font-medium hover:underline"
              >
                tikla24.de
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-wrap flex-row-reverse items-center justify-center">
        <div className="flex w-auto m-8">
          <Image
            src={meltemImg}
            alt="Meltem Soğuk Stropoli"
            className="rounded-2xl"
            width={333}
            height={500}
          />
        </div>
        <div className="w-2/3 prose">
          <h2>Yazar Hakkında</h2>
          <p>
            1972 yılının Nisan ayında İstanbul’da dünyaya geldi. Kadıköy Anadolu
            Lisesi ve İstanbul Üniversitesi Eczacılık Fakültesi’nin ardından
            İlaç Endüstrisi’nde pazarlama alanında toplam on sekiz yıl boyunca
            Türkiye, İsviçre ve İrlanda’da yöneticilik görevlerinde bulunan{" "}
            <b>Meltem Soğuk Stropoli</b>, ek olarak da altı yıl sahibi olduğu
            kreatif ajansın iki kurucu ortağından biri olarak yöneticilik
            görevini yürüttü.
          </p>
          <p>
            Uzun yıllar kurumsal hayatta –kendi tanımıyla– büyüme odaklı,
            öğütücü bir düzenin parçası olarak yer aldıktan sonra hayatının
            akışına farklı bir yön vermek istedi ve 2020 yılında yaşanan pandemi
            sırasında kurumsal hayatı bırakma kararı aldı. 2021 yılında, merkezi
            New York’ta bulunan Institute for Integrative Nutrition’da Bütünsel
            Beslenme Danışmanlığı ve Sağlık Koçluğu eğitimini tamamladı. Hayatta
            hiçbir yaşın öğrenmek ve kendini geliştirmek için geç olmadığına
            inanan Soğuk Stropoli, öğrenme hevesinin artarak devam ettiği
            bilinçli, iyi ve sağlıklı yaşama yolculuğuna 2022 yılında, merkezi
            Chicago’da bulunan Functional Medicine Coaching Academy’de
            Fonksiyonel Tıp Sağlık Koçluğu eğitimi ile devam etti.
          </p>
          <p>
            2013 yılında İtalyan olan eşi ile evlenip İsviçre’ye taşınan yazar,
            bu süre içinde iki yıl Dublin’de yaşadıktan sonra 2022 yılında
            tekrar İsviçre’ye döndü. Şu anda hayatını eşi ve köpeğiyle birlikte
            İsviçre’de sürdürmekte ve bireysel Sağlık Koçluğu yapmaktadır.
          </p>
        </div>
      </section>
    </main>
  );
}
