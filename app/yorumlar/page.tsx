import Carousel from "@/components/Carousel";
import Disqus from "@/components/Disqus";
import img1 from "@/public/img/you/1.jpg";
import img10 from "@/public/img/you/10.jpg";
import img11 from "@/public/img/you/11.jpg";
import img12 from "@/public/img/you/12.jpg";
import img13 from "@/public/img/you/13.jpg";
import img14 from "@/public/img/you/14.jpg";
import img15 from "@/public/img/you/15.jpg";
import img16 from "@/public/img/you/16.jpg";
import img17 from "@/public/img/you/17.jpg";
import img18 from "@/public/img/you/18.jpg";
import img19 from "@/public/img/you/19.jpg";
import img2 from "@/public/img/you/2.jpg";
import img20 from "@/public/img/you/20.jpg";
import img21 from "@/public/img/you/21.jpg";
import img22 from "@/public/img/you/22.jpg";
import img23 from "@/public/img/you/23.jpg";
import img24 from "@/public/img/you/24.jpg";
import img25 from "@/public/img/you/25.jpg";
import img26 from "@/public/img/you/26.jpg";
import img27 from "@/public/img/you/27.jpg";
import img28 from "@/public/img/you/28.jpg";
import img29 from "@/public/img/you/29.jpg";
import img3 from "@/public/img/you/3.jpg";
import img30 from "@/public/img/you/30.jpg";
import img4 from "@/public/img/you/4.jpg";
import img5 from "@/public/img/you/5.jpg";
import img6 from "@/public/img/you/6.jpg";
import img7 from "@/public/img/you/7.jpg";
import img8 from "@/public/img/you/8.jpg";
import img9 from "@/public/img/you/9.jpg";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

export const metadata: Metadata = {
  title: "Yorumlar | Yeşil Mavi Hayat",
  authors: [{ name: "Meltem Soğuk Stropoli" }],
  description:
    "Yeşil Mavi Hayat okuyucularının kitap hakkındaki yorumları ve gönderdikleri resimler",
};

export default function Reviews() {
  const { imgs1, imgs2 } = getImgs();

  return (
    <main className="flex flex-col items-center justify-between space-y-8">
      <section className="flex flex-col">
        <Carousel imgs={imgs1} />
        <Carousel imgs={imgs2} />
      </section>

      <section className="w-5/6">
        <Disqus />
      </section>
    </main>
  );
}

function getImgs(): { imgs1: StaticImageData[]; imgs2: StaticImageData[] } {
  return {
    imgs1: [
      img2,
      img26,
      img4,
      img22,
      img7,
      img23,
      img8,
      img29,
      img10,
      img5,
      img28,
      img3,
      img9,
      img1,
      img6,
    ],
    imgs2: [
      img25,
      img11,
      img12,
      img30,
      img13,
      img14,
      img24,
      img18,
      img15,
      img16,
      img17,
      img19,
      img20,
      img21,
      img27,
    ],
  };
}
