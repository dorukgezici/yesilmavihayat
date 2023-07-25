import coverImg from '@/public/img/cover.webp'
import meltemImg from '@/public/img/meltem.jpg'
import classNames from 'classnames'
import { Charmonman, Gotu } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const headerFont = Charmonman({ weight: "700", subsets: ['latin-ext'] })
const header2Font = Gotu({ weight: "400", subsets: ['latin-ext'] })


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <section className='bg-[--background-rgb] my-12 mx-1'>
        <div className="border-4 border-black rounded-lg p-12 text-center">
          <h1 className={classNames("text-9xl my-12", headerFont.className)}>Yeşil Mavi Hayat</h1>
          <p className={classNames("text-3xl my-12", header2Font.className)}>MELTEM SOĞUK STROPOLI</p>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center py-12">
        <div className='flex w-auto m-7'>
          <Image src={coverImg} alt='Yeşil Mavi Hayat' width={256} height={403} />
        </div>
        <div className='w-2/3 md:w-1/3 right-0'>
          <p>Günümüzün modern dünyasında çoğumuz hedef odaklı, hızlı, oldukça da bireyselleşmiş hayatlar yaşıyoruz. Yaşamdaki “anlam”, genellikle başarı ve toplumsal statü ile ilişkilendirilirken, insanı insan yapan erdemler ise burun kıvrılan demode değerler haline geldiler.</p>
          <br />
          <p>Büyük resmi kaybetmeden “gerçek kendimiz”i keşfedebilmek, sadece bireysel hırs ve tüketme odaklı bir şekilde bencilce yaşamamak, doğanın sahibi değil de onun bir parçası olduğumuzu unutmamak, “ben-öteki”, “insan-doğa”, “insan-hayvan” tarzında ayrımları törpüleyebilmek gibi kavramlar üzerine düşündürücü bir yapıt...</p>
          <br />
          <ul className='list-inside list-disc'>
            <li>D&R mağazaları ve tüm kitapçılarda! 📌</li>
            <li><Link href="https://destekdukkan.com/magaza/urun/yesil-mavi-hayat" target='_blank' className='font-medium hover:underline'>destekdukkan.com</Link> üzerinde %40 indirimli</li>
            <li>Avrupa’dan temin için <Link href="https://www.tikla24.de/kitap/meltem-soguk-stropoli/yesil-mavi-hayat-ve-50-yas/" target='_blank' className='font-medium hover:underline'>tikla24.de</Link></li>
          </ul>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center py-12">
        <div className='w-2/3 md:w-1/3 right-0'>
          <h2 className='text-2xl'>Yazar Hakkında</h2>
          <br />
          <p>1972 yılının Nisan ayında İstanbul’da dünyaya geldi. Kadıköy Anadolu Lisesi ve İstanbul Üniversitesi Eczacılık Fakültesi’nin ardından İlaç Endüstrisi’nde pazarlama alanında toplam on sekiz yıl boyunca Türkiye, İsviçre ve İrlanda’da yöneticilik görevlerinde bulunan Meltem Soğuk Stropoli, ek olarak da altı yıl sahibi olduğu kreatif ajansın iki kurucu ortağından biri olarak yöneticilik görevini yürüttü.</p>
          <br />
          <p>Uzun yıllar kurumsal hayatta –kendi tanımıyla– büyüme odaklı, öğütücü bir düzenin parçası olarak yer aldıktan sonra hayatının akışına farklı bir yön vermek istedi ve 2020 yılında yaşanan pandemi sırasında kurumsal hayatı bırakma kararı aldı. 2021 yılında, merkezi New York’ta bulunan Institute for Integrative Nutrition’da Bütünsel Beslenme Danışmanlığı ve Sağlık Koçluğu eğitimini tamamladı. Hayatta hiçbir yaşın öğrenmek ve kendini geliştirmek için geç olmadığına inanan Soğuk Stropoli, öğrenme hevesinin artarak devam ettiği bilinçli, iyi ve sağlıklı yaşama yolculuğuna 2022 yılında, merkezi Chicago’da bulunan Functional Medicine Coaching Academy’de Fonksiyonel Tıp Sağlık Koçluğu eğitimi ile devam etti.</p>
          <br />
          <p>2013 yılında İtalyan olan eşi ile evlenip İsviçre’ye taşınan yazar, bu süre içinde iki yıl Dublin’de yaşadıktan sonra 2022 yılında tekrar İsviçre’ye döndü. Şu anda hayatını eşi ve köpeğiyle birlikte İsviçre’de sürdürmekte ve bireysel Sağlık Koçluğu yapmaktadır.</p>
        </div>
        <div className='flex w-auto m-6'>
          <Image src={meltemImg} alt='Meltem Soğuk Stropoli' className='rounded-2xl' width={300} height={450} />
        </div>
      </section>
    </main>
  )
}
