"use client";
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
import img3 from "@/public/img/you/3.jpg";
import img4 from "@/public/img/you/4.jpg";
import img5 from "@/public/img/you/5.jpg";
import img6 from "@/public/img/you/6.jpg";
import img7 from "@/public/img/you/7.jpg";
import img8 from "@/public/img/you/8.jpg";
import img9 from "@/public/img/you/9.jpg";
import { DiscussionEmbed } from "disqus-react";
import Image from "next/image";

export default function Reviews() {
  return (
    <main className="flex flex-col items-center justify-between space-y-8">
      <section className="flex flex-col">
        <div className="carousel carousel-center p-4 space-x-8">
          <div className="carousel-item">
            <Image src={img1} alt="1" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img2} alt="2" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img3} alt="3" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img4} alt="4" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img5} alt="5" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img6} alt="6" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img7} alt="7" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img8} alt="8" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img9} alt="9" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img10} alt="10" className="rounded-box" height={400} />
          </div>
        </div>
        <div className="carousel carousel-center p-4 space-x-8">
          <div className="carousel-item">
            <Image src={img11} alt="11" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img12} alt="12" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img13} alt="13" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img14} alt="14" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img15} alt="15" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img16} alt="16" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img17} alt="17" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img18} alt="18" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img19} alt="19" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img20} alt="20" className="rounded-box" height={400} />
          </div>
        </div>
      </section>

      <section className="w-5/6">
        <DiscussionEmbed
          shortname="yesilmavihayat"
          config={{
            url: "https://yesilmavihayat.com",
            identifier: "yorumlar",
            title: "Yeşil Mavi Hayat",
            language: "tr",
          }}
        />
      </section>
    </main>
  );
}
